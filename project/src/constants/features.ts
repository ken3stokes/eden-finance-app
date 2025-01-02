import { Shield, HardDrive, Key, RefreshCcw, Lock, FileKey } from 'lucide-react';

export const privacyFeatures = [
  {
    icon: Shield,
    title: 'Zero-Knowledge Design',
    description: 'Your data is encrypted before it leaves your device. We can\'t read it, even if we wanted to.',
  },
  {
    icon: HardDrive,
    title: 'Local-First Storage',
    description: 'All data stays on your device. No cloud storage, no external servers, complete control.',
  },
  {
    icon: Key,
    title: 'Military-Grade Encryption',
    description: 'AES-256 encryption ensures your financial data remains completely private.',
  },
  {
    icon: RefreshCcw,
    title: 'Secure Sync',
    description: 'Optional encrypted sync between your devices. Your keys, your control.',
  },
  {
    icon: Lock,
    title: 'No Tracking',
    description: 'Zero analytics, zero tracking, zero cookies. Just pure privacy.',
  },
  {
    icon: FileKey,
    title: 'Encrypted Export',
    description: 'Export your data in encrypted format for secure backups.',
  },
];