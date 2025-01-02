import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { CategorySelect } from '../shared/CategorySelect';
import { calculatePeriodDates } from '../../utils/budgetPeriod';

interface BudgetFormProps {
  onSubmit: (budget: {
    category: string;
    subcategory: string;
    amount: number;
    period: { type: 'monthly' | 'yearly'; startDate: string; endDate: string };
  }) => void;
}

export const BudgetForm: React.FC<BudgetFormProps> = ({ onSubmit }) => {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [amount, setAmount] = useState('');
  const [periodType, setPeriodType] = useState<'monthly' | 'yearly'>('monthly');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category || !subcategory || !amount) return;

    const period = {
      type: periodType,
      ...calculatePeriodDates(periodType),
    };

    onSubmit({
      category,
      subcategory,
      amount: parseFloat(amount),
      period,
    });

    setCategory('');
    setSubcategory('');
    setAmount('');
    setPeriodType('monthly');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-lg shadow">
      <CategorySelect
        selectedCategory={category}
        selectedSubcategory={subcategory}
        onCategoryChange={setCategory}
        onSubcategoryChange={setSubcategory}
      />
      
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
          <select
            value={periodType}
            onChange={(e) => setPeriodType(e.target.value as 'monthly' | 'yearly')}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          >
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
          <div className="flex gap-4">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="flex-1 p-2 border rounded focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center gap-2"
            >
              <PlusCircle size={20} />
              Add Budget
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};