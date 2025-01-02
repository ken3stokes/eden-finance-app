import { Code2, Database, KeyRound } from 'lucide-react';

export const technicalSpecs = [
  {
    icon: Code2,
    title: 'Client-Side Encryption',
    features: [
      'AES-256-GCM encryption',
      'PBKDF2 key derivation',
      'Secure random IV generation',
      'WebCrypto API implementation',
    ],
  },
  {
    icon: Database,
    title: 'Local Storage',
    features: [
      'IndexedDB for data storage',
      'Encrypted data chunks',
      'Atomic transactions',
      'Versioned schema',
    ],
  },
  {
    icon: KeyRound,
    title: 'Key Management',
    features: [
      'Local key generation',
      'Secure key storage',
      'Key rotation support',
      'No key transmission',
    ],
  },
];