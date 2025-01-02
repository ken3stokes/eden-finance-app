export interface BudgetSubcategory {
  id: string;
  name: string;
  description: string;
}

export interface BudgetCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  subcategories: BudgetSubcategory[];
}

export const commonBudgetCategories: BudgetCategory[] = [
  {
    id: 'housing',
    name: 'Housing',
    icon: 'home',
    description: 'Rent, mortgage, utilities, maintenance',
    subcategories: [
      { id: 'rent', name: 'Rent/Mortgage', description: 'Monthly housing payment' },
      { id: 'utilities', name: 'Utilities', description: 'Electricity, water, gas' },
      { id: 'maintenance', name: 'Maintenance', description: 'Repairs and upkeep' },
      { id: 'insurance', name: 'Home Insurance', description: 'Property insurance' },
    ]
  },
  {
    id: 'transportation',
    name: 'Transportation',
    icon: 'car',
    description: 'Car payments, fuel, public transit, maintenance',
    subcategories: [
      { id: 'car-payment', name: 'Car Payment', description: 'Monthly vehicle payment' },
      { id: 'fuel', name: 'Fuel', description: 'Gas or charging costs' },
      { id: 'maintenance', name: 'Maintenance', description: 'Vehicle repairs and service' },
      { id: 'public-transit', name: 'Public Transit', description: 'Bus, train, subway fares' },
      { id: 'insurance', name: 'Car Insurance', description: 'Vehicle insurance' },
    ]
  },
  {
    id: 'communications',
    name: 'Communications',
    icon: 'smartphone',
    description: 'Phone, internet, and communication services',
    subcategories: [
      { id: 'cell-phone', name: 'Cell Phone', description: 'Mobile phone service and payments' },
      { id: 'internet', name: 'Internet', description: 'Home internet service' },
      { id: 'landline', name: 'Landline', description: 'Home phone service' },
      { id: 'streaming', name: 'Streaming Services', description: 'Netflix, Spotify, etc.' },
    ]
  },
  {
    id: 'groceries',
    name: 'Groceries',
    icon: 'shopping-cart',
    description: 'Food and household supplies',
    subcategories: [
      { id: 'food', name: 'Food', description: 'Regular grocery items' },
      { id: 'household', name: 'Household Items', description: 'Cleaning supplies, paper goods' },
      { id: 'personal-care', name: 'Personal Care', description: 'Hygiene products' },
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: 'heart',
    description: 'Insurance, medications, doctor visits',
    subcategories: [
      { id: 'insurance', name: 'Health Insurance', description: 'Monthly premium' },
      { id: 'medications', name: 'Medications', description: 'Prescriptions and OTC medicines' },
      { id: 'doctor', name: 'Doctor Visits', description: 'Medical appointments' },
      { id: 'dental', name: 'Dental Care', description: 'Dental visits and procedures' },
    ]
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: 'tv',
    description: 'Hobbies, dining out, events',
    subcategories: [
      { id: 'dining', name: 'Dining Out', description: 'Restaurants and takeout' },
      { id: 'hobbies', name: 'Hobbies', description: 'Activities and equipment' },
      { id: 'events', name: 'Events', description: 'Concerts, movies, shows' },
    ]
  },
  {
    id: 'business',
    name: 'Business',
    icon: 'briefcase',
    description: 'Business expenses and investments',
    subcategories: [
      { id: 'supplies', name: 'Office Supplies', description: 'Office materials and supplies' },
      { id: 'software', name: 'Software', description: 'Software subscriptions and licenses' },
      { id: 'marketing', name: 'Marketing', description: 'Advertising and promotion' },
      { id: 'services', name: 'Professional Services', description: 'Legal, accounting, consulting' },
      { id: 'equipment', name: 'Equipment', description: 'Business equipment and hardware' },
      { id: 'lease', name: 'Lease', description: 'Office or equipment lease payments' },
    ]
  },
  {
    id: 'savings',
    name: 'Savings',
    icon: 'piggy-bank',
    description: 'Emergency fund, investments, goals',
    subcategories: [
      { id: 'emergency', name: 'Emergency Fund', description: 'Rainy day savings' },
      { id: 'retirement', name: 'Retirement', description: '401k, IRA contributions' },
      { id: 'investments', name: 'Investments', description: 'Stocks, bonds, etc.' },
      { id: 'goals', name: 'Specific Goals', description: 'Vacation, down payment, etc.' },
    ]
  },
  {
    id: 'education',
    name: 'Education',
    icon: 'book',
    description: 'Tuition, books, courses',
    subcategories: [
      { id: 'tuition', name: 'Tuition', description: 'School fees' },
      { id: 'books', name: 'Books', description: 'Textbooks and materials' },
      { id: 'courses', name: 'Online Courses', description: 'Additional education' },
      { id: 'supplies', name: 'Supplies', description: 'Educational supplies' },
    ]
  },
  {
    id: 'debt',
    name: 'Debt Payments',
    icon: 'credit-card',
    description: 'Credit cards, loans, other debt',
    subcategories: [
      { id: 'credit-cards', name: 'Credit Cards', description: 'Credit card payments' },
      { id: 'student-loans', name: 'Student Loans', description: 'Education debt' },
      { id: 'personal-loans', name: 'Personal Loans', description: 'Other loan payments' },
    ]
  }
];