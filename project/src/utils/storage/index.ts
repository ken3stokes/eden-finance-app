import { initDB } from './db';
import { saveItem, getItem } from './operations';
import { deriveKey } from '../crypto/keys';
import { encrypt, decrypt } from '../crypto/encryption';

let dbInstance: IDBDatabase | null = null;
let encryptionKey: CryptoKey | null = null;

export async function initializeStorage(password: string): Promise<void> {
  if (!dbInstance) {
    dbInstance = await initDB();
  }
  
  const { key } = await deriveKey(password);
  encryptionKey = key;
}

export async function saveEncrypted(store: 'budgets' | 'transactions' | 'bills', key: string, data: any): Promise<void> {
  if (!dbInstance || !encryptionKey) {
    throw new Error('Storage not initialized');
  }

  const encrypted = await encrypt(encryptionKey, data);
  await saveItem(dbInstance, store, key, encrypted);
}

export async function getEncrypted<T>(store: 'budgets' | 'transactions' | 'bills', key: string): Promise<T | null> {
  if (!dbInstance || !encryptionKey) {
    throw new Error('Storage not initialized');
  }

  const encrypted = await getItem(dbInstance, store, key);
  if (!encrypted) return null;

  return await decrypt(encryptionKey, encrypted);
}