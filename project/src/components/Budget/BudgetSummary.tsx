import React from 'react';
import { Budget } from '../../types';
import { PiggyBank } from 'lucide-react';

interface BudgetSummaryProps {
  budgets: Budget[];
}

export const BudgetSummary: React.FC<BudgetSummaryProps> = ({ budgets }) => {
  const totalBudget = budgets.reduce((sum, budget) => sum + budget.amount, 0);
  const totalSpent = budgets.reduce((sum, budget) => sum + budget.spent, 0);
  const totalRemaining = totalBudget - totalSpent;
  const spentPercentage = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0;

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <PiggyBank className="text-green-500" size={24} />
        <h3 className="text-xl font-semibold">Total Budget</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <p className="text-sm text-gray-600 mb-1">Total Budget</p>
          <p className="text-2xl font-bold text-gray-900">${totalBudget.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Total Spent</p>
          <p className="text-2xl font-bold text-gray-900">${totalSpent.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Remaining</p>
          <p className="text-2xl font-bold text-gray-900">${totalRemaining.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${
              spentPercentage > 90 ? 'bg-red-500' : spentPercentage > 70 ? 'bg-yellow-500' : 'bg-green-500'
            }`}
            style={{ width: `${Math.min(spentPercentage, 100)}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {spentPercentage.toFixed(1)}% of total budget spent
        </p>
      </div>
    </div>
  );
};