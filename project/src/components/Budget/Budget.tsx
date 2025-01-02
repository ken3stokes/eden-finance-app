import React from 'react';
import { BudgetProgress } from './BudgetProgress';
import { BudgetForm } from './BudgetForm';
import { BudgetSummary } from './BudgetSummary';
import { useBudgets } from '../../hooks/useBudgets';

export const Budget: React.FC = () => {
  const { budgets, addBudget, deleteBudget } = useBudgets();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-500 mb-6">Budgets</h2>
      <BudgetSummary budgets={budgets} />
      <BudgetForm onSubmit={addBudget} />
      <div className="space-y-4">
        {budgets.map((budget) => (
          <BudgetProgress 
            key={budget.id} 
            budget={budget} 
            onDelete={deleteBudget}
          />
        ))}
      </div>
    </div>
  );
};