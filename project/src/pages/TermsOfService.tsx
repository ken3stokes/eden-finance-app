import React from 'react';
import { PolicyLayout } from '../components/shared/PolicyLayout';

interface TermsOfServiceProps {
  onBack: () => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  return (
    <PolicyLayout
      title="Terms of Service"
      lastUpdated="March 1, 2024"
      onBack={onBack}
    >
      <h2>1. Acceptance</h2>
      <p>
        By using the Eden app, you agree to these Terms.
      </p>

      <h2>2. License</h2>
      <p>
        We grant you a personal, non-transferable, non-exclusive license to use the app for your own 
        financial tracking on your device.
      </p>

      <h2>3. Zero-Knowledge & Local Data</h2>
      <p>
        All data is stored locally on your device. We do not store or access your data or encryption 
        keys on our servers. We are not responsible for lost data or passphrases.
      </p>

      <h2>4. Disclaimer</h2>
      <p>
        We are not liable for any financial decisions you make using the app. The app is provided 
        "as is," without warranties.
      </p>

      <h2>5. Changes</h2>
      <p>
        We may update these Terms from time to time. Continued use of the app constitutes acceptance 
        of updated Terms.
      </p>
    </PolicyLayout>
  );
};