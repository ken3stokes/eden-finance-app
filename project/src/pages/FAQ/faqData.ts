export const faqCategories = [
  {
    title: "Getting Started",
    items: [
      {
        question: "How do I start using Eden Finance?",
        answer: "Create an account, set a strong password (minimum 12 characters), and start adding your budgets and transactions. Remember: your password is used for encryption and cannot be recovered if lost."
      },
      {
        question: "Is my financial data safe?",
        answer: "Yes! All data is encrypted on your device using AES-256 encryption. We never see your unencrypted data or encryption keys."
      },
      {
        question: "What happens if I forget my password?",
        answer: "Due to our zero-knowledge architecture, we cannot recover your password or data. Make sure to save your password securely."
      }
    ]
  },
  {
    title: "Features & Usage",
    items: [
      {
        question: "How do budgets work?",
        answer: "Set monthly or yearly budgets by category. Track spending against these budgets with automatic updates when you add transactions."
      },
      {
        question: "Can I set recurring bills?",
        answer: "Yes! When adding a bill, check the 'Recurring' option and set the frequency (weekly, monthly, or yearly)."
      },
      {
        question: "How are transactions categorized?",
        answer: "Manually select categories when adding transactions. They automatically update your budget tracking."
      }
    ]
  },
  {
    title: "Privacy & Security",
    items: [
      {
        question: "Where is my data stored?",
        answer: "All data is stored locally on your device. Optional encrypted backups can be stored in the cloud."
      },
      {
        question: "Can Eden Finance see my financial data?",
        answer: "No. Your data is encrypted before it leaves your device. We technically cannot access your financial information."
      },
      {
        question: "How secure is the encryption?",
        answer: "We use AES-256-GCM encryption with PBKDF2 key derivation - the same standards used by banks and military systems."
      }
    ]
  }
];