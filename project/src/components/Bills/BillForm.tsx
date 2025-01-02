import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { CategorySelect } from '../shared/CategorySelect';
import { RecurringSchedule } from '../../types';

interface BillFormProps {
  onSubmit: (bill: {
    name: string;
    amount: number;
    dueDate: string;
    category: string;
    subcategory: string;
    isRecurring: boolean;
    recurringSchedule?: RecurringSchedule;
  }) => void;
}

export const BillForm: React.FC<BillFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [frequency, setFrequency] = useState<'weekly' | 'monthly' | 'yearly'>('monthly');
  const [interval, setInterval] = useState('1');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !amount || !dueDate || !category || !subcategory) return;

    const bill = {
      name,
      amount: parseFloat(amount),
      dueDate,
      category,
      subcategory,
      isRecurring,
      ...(isRecurring && {
        recurringSchedule: {
          frequency,
          interval: parseInt(interval),
          ...(endDate && { endDate }),
        },
      }),
    };

    onSubmit(bill);

    setName('');
    setAmount('');
    setDueDate('');
    setCategory('');
    setSubcategory('');
    setIsRecurring(false);
    setFrequency('monthly');
    setInterval('1');
    setEndDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bill Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter bill name"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      <CategorySelect
        selectedCategory={category}
        selectedSubcategory={subcategory}
        onCategoryChange={setCategory}
        onSubcategoryChange={setSubcategory}
      />

      <div className="mt-4">
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={isRecurring}
            onChange={(e) => setIsRecurring(e.target.checked)}
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <span className="ml-2 text-sm text-gray-700">Recurring Bill</span>
        </label>

        {isRecurring && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value as 'weekly' | 'monthly' | 'yearly')}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Every</label>
              <input
                type="number"
                min="1"
                value={interval}
                onChange={(e) => setInterval(e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date (Optional)</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        )}

        <div className="flex gap-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="flex-1 p-2 border rounded focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 flex items-center gap-2"
          >
            <PlusCircle size={20} />
            Add Bill
          </button>
        </div>
      </div>
    </form>
  );
};