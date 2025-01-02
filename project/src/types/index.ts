export interface RecurringSchedule {
  frequency: 'weekly' | 'monthly' | 'yearly';
  interval: number;
  endDate?: string;
}

export interface BudgetPeriod {
  type: 'monthly' | 'yearly';
  startDate: string;
  endDate: string;
}

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  category: string;
  subcategory: string;
  description: string;
}

export interface Bill {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
  isPaid: boolean;
  category: string;
  subcategory: string;
  isRecurring: boolean;
  recurringSchedule?: RecurringSchedule;
}

export interface Budget {
  id: string;
  category: string;
  subcategory: string;
  amount: number;
  spent: number;
  period: BudgetPeriod;
}

export interface CategoryTotal {
  [key: string]: {
    total: number;
    subcategories: {
      [key: string]: number;
    };
  };
}