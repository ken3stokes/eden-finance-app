import { useState, useEffect, useCallback } from 'react';
import { Budget } from '../types';
import { saveToStorage, getFromStorage } from '../utils/storage';
import { resetExpiredBudgets } from '../utils/budgetPeriod';

export const useBudgets = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const loadBudgets = useCallback(() => {
    try {
      const savedBudgets = getFromStorage('budgets') || [];
      const updatedBudgets = resetExpiredBudgets(savedBudgets);
      setBudgets(updatedBudgets);
      
      if (JSON.stringify(updatedBudgets) !== JSON.stringify(savedBudgets)) {
        saveToStorage('budgets', updatedBudgets);
      }
    } catch (err) {
      console.error('Error loading budgets:', err);
      setError(err instanceof Error ? err : new Error('Failed to load budgets'));
    }
  }, []);

  useEffect(() => {
    loadBudgets();
    const interval = setInterval(loadBudgets, 60000);
    return () => clearInterval(interval);
  }, [loadBudgets]);

  const addBudget = useCallback((newBudget: Omit<Budget, 'id' | 'spent'>) => {
    try {
      const budget: Budget = {
        id: Date.now().toString(),
        ...newBudget,
        spent: 0,
      };

      setBudgets(prev => {
        const updated = [...prev, budget];
        saveToStorage('budgets', updated);
        return updated;
      });
    } catch (err) {
      console.error('Error adding budget:', err);
      setError(err instanceof Error ? err : new Error('Failed to add budget'));
    }
  }, []);

  const deleteBudget = useCallback((id: string) => {
    try {
      setBudgets(prev => {
        const updated = prev.filter(budget => budget.id !== id);
        saveToStorage('budgets', updated);
        return updated;
      });
    } catch (err) {
      console.error('Error deleting budget:', err);
      setError(err instanceof Error ? err : new Error('Failed to delete budget'));
    }
  }, []);

  return {
    budgets,
    addBudget,
    deleteBudget,
    error,
  };
};