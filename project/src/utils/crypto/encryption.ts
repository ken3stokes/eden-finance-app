import { getRandomBytes } from './random';

const IV_LENGTH = 12;

export async function encrypt(key: CryptoKey, data: any): Promise<ArrayBuffer> {
  const iv = getRandomBytes(IV_LENGTH);
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(JSON.stringify(data));

  const encryptedContent = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    encodedData
  );

  // Combine IV and encrypted content
  const result = new Uint8Array(iv.length + encryptedContent.byteLength);
  result.set(iv);
  result.set(new Uint8Array(encryptedContent), iv.length);

  return result;
}

export async function decrypt(key: CryptoKey, data: ArrayBuffer): Promise<any> {
  const iv = new Uint8Array(data, 0, IV_LENGTH);
  const encryptedContent = new Uint8Array(data, IV_LENGTH);

  const decryptedContent = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv },
    key,
    encryptedContent
  );

  const decoder = new TextDecoder();
  return JSON.parse(decoder.decode(decryptedContent));
}