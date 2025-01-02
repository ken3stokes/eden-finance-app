import React from 'react';
import { PolicyLayout } from '../components/shared/PolicyLayout';

interface DisclaimerProps {
  onBack: () => void;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ onBack }) => {
  return (
    <PolicyLayout
      title="Disclaimer"
      lastUpdated="March 1, 2024"
      onBack={onBack}
    >
      <h2>Not Financial Advice</h2>
      <p>
        Eden Finance is a tool for tracking personal finances. We do not provide financial advice, 
        investment recommendations, or tax guidance.
      </p>

      <h2>Data Loss Risk</h2>
      <p>
        Due to our zero-knowledge architecture:
      </p>
      <ul>
        <li>Lost passwords cannot be recovered</li>
        <li>Forgotten passwords result in permanent data loss</li>
        <li>We cannot assist in data recovery</li>
      </ul>

      <h2>No Warranties</h2>
      <p>
        The service is provided "as is" without warranties of any kind, either express or implied.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        We are not liable for:
      </p>
      <ul>
        <li>Data loss from forgotten passwords</li>
        <li>Financial losses from using the application</li>
        <li>Service interruptions or bugs</li>
        <li>Third-party services integrated with Eden Finance</li>
      </ul>

      <h2>Accuracy of Information</h2>
      <p>
        While we strive for accuracy, you are responsible for verifying all financial calculations 
        and information within the application.
      </p>
    </PolicyLayout>
  );
};