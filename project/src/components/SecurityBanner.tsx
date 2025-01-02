import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface SecurityBannerProps {
  onViewRoadmap: () => void;
}

export const SecurityBanner: React.FC<SecurityBannerProps> = ({ onViewRoadmap }) => {
  return (
    <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-amber-500 text-sm">
            Security Notice: Zero-knowledge encryption is currently being implemented. 
            While you can use all features now, please be aware that full encryption is not yet active.{' '}
            <button
              onClick={onViewRoadmap}
              className="text-amber-400 hover:text-amber-300 underline font-medium"
            >
              View our roadmap
            </button>
            {' '}to learn more.
          </p>
        </div>
      </div>
    </div>
  );
};