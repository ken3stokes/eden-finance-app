import React from 'react';
import { Budget } from '../../types';
import { commonBudgetCategories } from '../../utils/budgetCategories';
import { Trash2 } from 'lucide-react';

interface BudgetProgressProps {
  budget: Budget;
  onDelete: (id: string) => void;
}

export const BudgetProgress: React.FC<BudgetProgressProps> = ({ budget, onDelete }) => {
  const percentage = (budget.spent / budget.amount) * 100;
  const remaining = budget.amount - budget.spent;

  const category = commonBudgetCategories.find(cat => cat.id === budget.category);
  const subcategory = category?.subcategories.find(sub => sub.id === budget.subcategory);

  return (
    <div className="mb-4 p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between mb-2">
        <div>
          <span className="font-semibold">{category?.name}</span>
          <span className="text-gray-500 mx-2">›</span>
          <span className="text-gray-700">{subcategory?.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">
            ${remaining.toFixed(2)} remaining
          </span>
          <button
            onClick={() => onDelete(budget.id)}
            className="text-red-500 hover:text-red-600 p-1 rounded hover:bg-red-50 transition-colors"
            aria-label="Delete budget"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${
            percentage > 90 ? 'bg-red-500' : percentage > 70 ? 'bg-yellow-500' : 'bg-green-500'
          }`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
      <div className="mt-1 text-sm text-gray-500">
        ${budget.spent.toFixed(2)} of ${budget.amount.toFixed(2)} ({percentage.toFixed(1)}%)
      </div>
    </div>
  );
};