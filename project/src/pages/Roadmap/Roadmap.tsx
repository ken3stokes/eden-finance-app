import React from 'react';
import { PolicyLayout } from '../../components/shared/PolicyLayout';
import { RoadmapTimeline } from './RoadmapTimeline';
import { PlannedFeatures } from './PlannedFeatures';

interface RoadmapProps {
  onBack: () => void;
}

export const Roadmap: React.FC<RoadmapProps> = ({ onBack }) => {
  return (
    <PolicyLayout
      title="Product Roadmap"
      lastUpdated="March 1, 2024"
      onBack={onBack}
    >
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Current Status</h2>
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 mb-8">
            <h3 className="text-red-400 font-semibold mb-2">Important Notice</h3>
            <p className="text-slate-300">
              Eden Finance is currently in early development. While we strive for complete privacy and 
              security, some advertised features are still in development. This roadmap outlines our 
              path to achieving true zero-knowledge architecture.
            </p>
          </div>
        </section>

        <RoadmapTimeline />
        <PlannedFeatures />
      </div>
    </PolicyLayout>
  );
};