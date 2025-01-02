import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { CategorySelect } from '../shared/CategorySelect';

interface TransactionFormProps {
  onSubmit: (transaction: {
    date: string;
    amount: number;
    category: string;
    subcategory: string;
    description: string;
  }) => void;
}

export const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit }) => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !category || !subcategory) return;

    onSubmit({
      date,
      amount: parseFloat(amount),
      category,
      subcategory,
      description,
    });

    setAmount('');
    setCategory('');
    setSubcategory('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
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
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <div className="flex gap-4">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
          >
            <PlusCircle size={20} />
            Add Transaction
          </button>
        </div>
      </div>
    </form>
  );
};