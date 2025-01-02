import React from 'react';
import { Shield, Key, RefreshCw, UserX, Database, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'True Zero-Knowledge',
    description: 'Complete server-side blindness to user data and activities.',
    planned: [
      'Anonymous authentication system',
      'No email requirement',
      'No server-side user tracking',
    ]
  },
  {
    icon: Key,
    title: 'Enhanced Encryption',
    description: 'Military-grade encryption with additional security layers.',
    planned: [
      'Multiple encryption layers',
      'Hardware security module support',
      'Custom encryption schemes',
    ]
  },
  {
    icon: RefreshCw,
    title: 'Secure Sync',
    description: 'Privacy-preserving synchronization between devices.',
    planned: [
      'End-to-end encrypted sync',
      'No metadata leakage',
      'Offline-first architecture',
    ]
  },
  {
    icon: UserX,
    title: 'Anonymous Usage',
    description: 'Complete user anonymity and privacy.',
    planned: [
      'No personal data collection',
      'Tor network support',
      'Decentralized architecture',
    ]
  },
  {
    icon: Database,
    title: 'Private Storage',
    description: 'Fully encrypted and obfuscated data storage.',
    planned: [
      'Fixed-size encrypted blocks',
      'Random padding',
      'Dummy traffic generation',
    ]
  },
  {
    icon: Lock,
    title: 'Advanced Security',
    description: 'Additional security measures and protections.',
    planned: [
      'Hardware wallet integration',
      'Multi-signature support',
      'Quantum-resistant encryption',
    ]
  }
];

export const PlannedFeatures: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-white mb-6">Planned Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg p-6">
            <feature.icon className="w-8 h-8 text-emerald-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-slate-400 mb-4">{feature.description}</p>
            <ul className="space-y-2">
              {feature.planned.map((item, itemIndex) => (
                <li key={itemIndex} className="text-slate-300 flex items-center">
                  <span className="mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};