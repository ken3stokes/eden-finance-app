import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface SecurityNoticeProps {
  onBack: () => void;
}

export const SecurityNotice: React.FC<SecurityNoticeProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl bg-slate-800/50 backdrop-blur rounded-lg p-8 border border-slate-700">
        <div className="flex items-start space-x-4">
          <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Security Implementation in Progress</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                This feature requires our zero-knowledge encryption system, which is currently being implemented. 
                For your security, we've disabled access until the proper encryption is in place.
              </p>
              <p>
                Check our roadmap to see when this feature will be available with full security measures.
              </p>
              <div className="flex gap-4 mt-6">
                <button
                  onClick={onBack}
                  className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 transition-colors"
                >
                  Go Back
                </button>
                <button
                  onClick={() => window.location.hash = '#roadmap'}
                  className="px-4 py-2 bg-amber-500/10 text-amber-500 rounded hover:bg-amber-500/20 transition-colors"
                >
                  View Roadmap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};