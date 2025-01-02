import React from 'react';
import { Shield, Lock, Key, AlertCircle } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <section className="py-24 bg-slate-800" id="privacy">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full">
              <AlertCircle className="w-5 h-5 mr-2" />
              Why Privacy Matters
            </div>
            <h2 className="text-3xl font-bold text-white">Your Financial Data is Sensitive</h2>
            <p className="text-lg text-slate-300">
              Traditional finance apps collect and store your data on their servers. We take a different approach - 
              everything stays encrypted on your device, giving you complete control and privacy.
            </p>
            <ul className="space-y-4">
              {[
                { icon: <Shield className="text-emerald-400" />, text: 'End-to-end encryption using AES-256' },
                { icon: <Lock className="text-emerald-400" />, text: 'Zero-knowledge architecture' },
                { icon: <Key className="text-emerald-400" />, text: 'You own your encryption keys' },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-300">
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
              alt="Data Privacy"
              className="rounded-2xl shadow-2xl border border-slate-700"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-slate-900/80 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};