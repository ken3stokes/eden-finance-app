import React from 'react';
import { PolicyLayout } from '../../components/shared/PolicyLayout';
import { FAQSection } from './FAQSection';

interface FAQProps {
  onBack: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onBack }) => {
  return (
    <PolicyLayout
      title="Frequently Asked Questions"
      lastUpdated="March 1, 2024"
      onBack={onBack}
    >
      <FAQSection />
    </PolicyLayout>
  );
};