import React from 'react';

export const docsNavigation = [
  {
    id: 'basics',
    title: 'Basics',
    items: [
      { id: 'getting-started', title: 'Getting Started' },
      { id: 'installation', title: 'Installation' },
      { id: 'security-model', title: 'Security Model' }
    ]
  },
  {
    id: 'features',
    title: 'Features',
    items: [
      { id: 'budgets', title: 'Budgets' },
      { id: 'transactions', title: 'Transactions' },
      { id: 'bills', title: 'Bills' }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced',
    items: [
      { id: 'encryption', title: 'Encryption Details' },
      { id: 'backup-restore', title: 'Backup & Restore' },
      { id: 'troubleshooting', title: 'Troubleshooting' }
    ]
  }
];

export const docsContent: Record<string, { title: string; content: React.ReactNode }> = {
  'getting-started': {
    title: 'Getting Started with Eden Finance',
    content: (
      <div className="space-y-6">
        <p>
          Eden Finance is a zero-knowledge personal finance app that helps you manage your money while keeping your data private and secure.
        </p>
        
        <h2>Quick Start</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Create an account with a strong password (minimum 12 characters)</li>
          <li>Set up your first budget category</li>
          <li>Add your recurring bills</li>
          <li>Start tracking transactions</li>
        </ol>

        <h2>Important Security Notes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your password is used for encryption - it cannot be reset if lost</li>
          <li>All data is encrypted on your device before storage</li>
          <li>We never have access to your unencrypted data</li>
        </ul>
      </div>
    )
  },
  // Add more documentation sections as needed
};