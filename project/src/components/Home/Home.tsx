import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { Privacy } from './Privacy';
import { TechnicalDetails } from './TechnicalDetails';

interface HomeProps {
  onGetStarted: () => void;
}

export const Home: React.FC<HomeProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero onGetStarted={onGetStarted} />
      <Features />
      <Privacy />
      <TechnicalDetails />
    </div>
  );
};