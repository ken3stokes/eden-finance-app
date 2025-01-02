import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Card } from './Card';

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
  onBack: () => void;
}

export const PolicyLayout: React.FC<PolicyLayoutProps> = ({
  title,
  lastUpdated,
  children,
  onBack
}) => {
  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-slate-400 hover:text-slate-300 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        <Card className="bg-slate-800/50 backdrop-blur">
          <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
          <p className="text-slate-400 text-sm mb-8">Last updated: {lastUpdated}</p>
          
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-slate-300">
              {children}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}