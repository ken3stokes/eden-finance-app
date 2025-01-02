import { Budget } from '../types';

export const calculatePeriodDates = (type: 'monthly' | 'yearly'): { startDate: string; endDate: string } => {
  const now = new Date();
  const startDate = new Date(now.getFullYear(), type === 'monthly' ? now.getMonth() : 0, 1);
  const endDate = new Date(
    type === 'monthly' 
      ? new Date(now.getFullYear(), now.getMonth() + 1, 0) 
      : new Date(now.getFullYear(), 11, 31)
  );

  return {
    startDate: startDate.toISOString().split('T')[0],
    endDate: endDate.toISOString().split('T')[0],
  };
};

export const isPeriodExpired = (period: { startDate: string; endDate: string }): boolean => {
  const now = new Date();
  const endDate = new Date(period.endDate);
  return now > endDate;
};

export const resetExpiredBudgets = (budgets: Budget[]): Budget[] => {
  return budgets.map(budget => {
    if (isPeriodExpired(budget.period)) {
      const newPeriod = calculatePeriodDates(budget.period.type);
      return {
        ...budget,
        spent: 0,
        period: {
          ...budget.period,
          ...newPeriod,
        },
      };
    }
    return budget;
  });
};