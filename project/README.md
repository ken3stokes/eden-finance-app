# Eden Finance - Zero-Knowledge Personal Finance App

![Eden Finance](https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000)

Eden Finance is a privacy-focused personal finance application that helps you manage your budgets, bills, and transactions while keeping your data secure and local.

## Features

- **Zero-Knowledge Architecture**: All data is encrypted on your device
- **Budget Management**: Set and track category-based budgets
- **Bill Planning**: Schedule and manage upcoming bills with due date reminders
- **Transaction Tracking**: Log and categorize transactions
- **Privacy-First**: No external servers or databases - your data stays on your device
- **Military-Grade Encryption**: AES-256-GCM encryption (coming soon)

## Tech Stack

- React 18 with TypeScript
- Vite for blazing fast development
- Tailwind CSS for styling
- Supabase for authentication
- Lucide React for icons

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/eden-finance.git
cd eden-finance
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Auth/           # Authentication components
│   ├── Budget/         # Budget management
│   ├── Bills/          # Bill planning
│   ├── Home/           # Landing page
│   ├── Layout/         # Layout components
│   ├── shared/         # Shared components
│   └── Transactions/   # Transaction tracking
├── contexts/           # React contexts
├── hooks/              # Custom hooks
├── pages/              # Page components
├── types/              # TypeScript types
└── utils/              # Utility functions
    ├── crypto/         # Encryption utilities
    ├── storage/        # Storage management
    └── supabase/       # Supabase client
```

## Security Features (Coming Soon)

- **Client-Side Encryption**: AES-256-GCM encryption
- **Zero-Knowledge Design**: No server-side data access
- **Local-First Storage**: Data stays on your device
- **Secure Sync**: Optional encrypted device sync
- **Privacy Protection**: No tracking or analytics

## Development

### Prerequisites

- Node.js 18+
- npm 9+

### Running Tests

```bash
npm run test
```

### Building for Production

```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Security

Please report security vulnerabilities to security@eden-finance.com

## License

MIT License - see LICENSE for details

## Contact

- Email: support@eden-finance.com
- GitHub: [eden-finance](https://github.com/yourusername/eden-finance)

## Roadmap

See our [roadmap](https://eden-finance.com/roadmap) for upcoming features and security implementations.