import React from 'react';
import { PolicyLayout } from '../components/shared/PolicyLayout';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <PolicyLayout
      title="Privacy Policy"
      lastUpdated="March 1, 2024"
      onBack={onBack}
    >
      <h2>1. Introduction</h2>
      <p>
        We do not collect or store any personal data or financial information on external servers. 
        All data you enter into the Eden app remains locally on your device.
      </p>

      <h2>2. Zero-Knowledge Approach</h2>
      <p>
        We do not have access to your financial data, encryption keys, or passphrases. 
        We cannot recover data if you lose your keys.
      </p>

      <h2>3. Contact Information</h2>
      <p>
        If you have questions about how we handle your data, reach us at support@edenapp.example.
      </p>
    </PolicyLayout>
  );
};