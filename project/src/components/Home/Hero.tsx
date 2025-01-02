import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-emerald-400">
              <Shield size={24} />
              <span className="font-medium">Eden Finance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Your Financial Data, <br/>
              <span className="text-emerald-400">Encrypted</span> and <span className="text-emerald-400">Private</span>
            </h1>
            <p className="text-xl text-slate-300">
              Take control of your finances with military-grade encryption. No servers, no data collection, just pure privacy.
            </p>
            <div className="flex gap-4">
              <button
                onClick={onGetStarted}
                className="inline-flex items-center px-6 py-3 bg-emerald-500 text-white rounded-lg
                  font-medium hover:bg-emerald-600 transition-colors gap-2"
              >
                Start Securely
                <ArrowRight size={20} />
              </button>
              <a
                href="#features"
                className="inline-flex items-center px-6 py-3 border border-slate-600 text-slate-300 
                  rounded-lg font-medium hover:bg-slate-800 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000"
              alt="Privacy First Finance"
              className="rounded-2xl shadow-2xl border border-slate-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};