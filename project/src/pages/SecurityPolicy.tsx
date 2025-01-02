import React from 'react';
import { PolicyLayout } from '../components/shared/PolicyLayout';

interface SecurityPolicyProps {
  onBack: () => void;
}

export const SecurityPolicy: React.FC<SecurityPolicyProps> = ({ onBack }) => {
  return (
    <PolicyLayout
      title="Security Policy"
      lastUpdated="March 1, 2024"
      onBack={onBack}
    >
      <h2>1. Data Encryption</h2>
      <p>
        All data in Eden Finance is protected using:
      </p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>AES-256-GCM encryption standard</li>
        <li>PBKDF2 key derivation (100,000 iterations)</li>
        <li>Secure random IV generation</li>
        <li>WebCrypto API for cryptographic operations</li>
      </ul>

      <h2>2. Zero-Knowledge Architecture</h2>
      <p>
        Our security model ensures:
      </p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>All encryption occurs on your device</li>
        <li>Only encrypted data leaves your device</li>
        <li>No plain text data is ever transmitted</li>
        <li>No recovery keys or backdoors exist</li>
      </ul>

      <h2>3. Local Storage Protection</h2>
      <p>
        Your data is secured through:
      </p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Local-first storage using IndexedDB</li>
        <li>Encrypted data chunks</li>
        <li>Atomic transactions</li>
        <li>Versioned schema for data integrity</li>
      </ul>

      <h2>4. Authentication Security</h2>
      <p>
        Account protection includes:
      </p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Minimum 12-character password requirement</li>
        <li>No password recovery (by design)</li>
        <li>Rate limiting on authentication attempts</li>
        <li>Secure session management</li>
      </ul>

      <h2>5. Security Reporting</h2>
      <p>
        If you discover a security vulnerability, please report it immediately to{' '}
        <span className="text-emerald-400">security@eden-finance.com</span>
      </p>

      <h2>6. Regular Audits</h2>
      <p>
        We maintain security through:
      </p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Regular security audits</li>
        <li>Penetration testing</li>
        <li>Code reviews</li>
        <li>Dependency vulnerability scanning</li>
      </ul>
    </PolicyLayout>
  );
};