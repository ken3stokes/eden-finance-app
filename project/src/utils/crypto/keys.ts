import { getRandomBytes } from './random';

// Key derivation parameters
const SALT_LENGTH = 16;
const ITERATIONS = 100000;
const KEY_LENGTH = 32; // 256 bits

export async function deriveKey(password: string, salt?: Uint8Array): Promise<{key: CryptoKey, salt: Uint8Array}> {
  const saltBytes = salt || getRandomBytes(SALT_LENGTH);
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveBits', 'deriveKey']
  );

  const key = await crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: saltBytes,
      iterations: ITERATIONS,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );

  return { key, salt: saltBytes };
}