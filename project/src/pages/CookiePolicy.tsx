import React from 'react';
import { PolicyLayout } from '../components/shared/PolicyLayout';

interface CookiePolicyProps {
  onBack: () => void;
}

export const CookiePolicy: React.FC<CookiePolicyProps> = ({ onBack }) => {
  return (
    <PolicyLayout
      title="Cookie Policy"
      lastUpdated="March 1, 2024"
      onBack={onBack}
    >
      <h2>Limited Cookie Usage</h2>
      <p>
        Eden Finance uses only essential cookies required for authentication and session management.
        We do not use any tracking or analytics cookies.
      </p>

      <h2>Essential Cookies</h2>
      <p>
        The following cookies are necessary for the application to function:
      </p>
      <ul>
        <li>Authentication token (session management)</li>
        <li>CSRF protection token</li>
      </ul>

      <h2>No Tracking</h2>
      <p>
        We do not use:
      </p>
      <ul>
        <li>Analytics cookies</li>
        <li>Advertising cookies</li>
        <li>Third-party cookies</li>
        <li>Tracking pixels</li>
      </ul>

      <h2>Cookie Duration</h2>
      <p>
        Essential cookies are session-based and expire when you close your browser or log out.
      </p>

      <h2>Browser Settings</h2>
      <p>
        You can control cookies through your browser settings, but disabling essential cookies 
        will prevent the application from functioning.
      </p>
    </PolicyLayout>
  );
};