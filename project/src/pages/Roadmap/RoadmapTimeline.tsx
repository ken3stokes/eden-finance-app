import React from 'react';
import { Check, Clock } from 'lucide-react';

const timelineItems = [
  {
    phase: 'Phase 1 - Current',
    status: 'complete',
    features: [
      'Basic budget management',
      'Transaction tracking',
      'Bill planning',
      'Local storage',
      'Basic encryption',
    ]
  },
  {
    phase: 'Phase 2 - Q2 2025',
    status: 'in-progress',
    features: [
      'True zero-knowledge architecture',
      'Client-side key generation',
      'Encrypted sync between devices',
      'Anonymous authentication',
    ]
  },
  {
    phase: 'Phase 3 - Q3 2025',
    status: 'planned',
    features: [
      'Metadata obfuscation',
      'Secure multi-device sync',
      'Encrypted backups',
      'Privacy-preserving analytics',
    ]
  },
  {
    phase: 'Phase 4 - Q4 2025',
    status: 'planned',
    features: [
      'Hardware wallet integration',
      'Offline mode',
      'Enhanced encryption options',
      'Third-party security audit',
    ]
  }
];

export const RoadmapTimeline: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-white mb-6">Development Timeline</h2>
      <div className="space-y-8">
        {timelineItems.map((item, index) => (
          <div key={index} className="relative pl-8 pb-8 border-l border-slate-700 last:pb-0">
            <div className="absolute left-0 -translate-x-1/2 rounded-full bg-slate-800 border border-slate-700 p-1">
              {item.status === 'complete' ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Clock className="w-4 h-4 text-slate-400" />
              )}
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6 ml-4">
              <h3 className="text-lg font-semibold text-white mb-2">{item.phase}</h3>
              <ul className="space-y-2">
                {item.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className={`flex items-center ${
                      item.status === 'complete' ? 'text-emerald-400' : 'text-slate-300'
                    }`}
                  >
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};