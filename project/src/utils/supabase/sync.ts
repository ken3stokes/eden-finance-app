import { supabase } from './client';
import { encrypt, decrypt } from '../crypto/encryption';
import type { CryptoKey } from '../crypto/types';

interface EncryptedData {
  id: string;
  encrypted_data: ArrayBuffer;
  updated_at: string;
}

export async function syncToCloud(
  key: CryptoKey,
  store: string,
  data: any
): Promise<void> {
  const encrypted = await encrypt(key, data);
  
  const { error } = await supabase
    .from('encrypted_data')
    .upsert({
      id: `${store}_${data.id}`,
      encrypted_data: Array.from(new Uint8Array(encrypted)),
      store,
      updated_at: new Date().toISOString()
    });

  if (error) throw error;
}

export async function getFromCloud(
  key: CryptoKey,
  store: string
): Promise<any[]> {
  const { data, error } = await supabase
    .from('encrypted_data')
    .select('*')
    .eq('store', store);

  if (error) throw error;
  if (!data) return [];

  const decrypted = await Promise.all(
    data.map(async (item: EncryptedData) => {
      const buffer = new Uint8Array(item.encrypted_data).buffer;
      return decrypt(key, buffer);
    })
  );

  return decrypted;
}