import React from 'react';
import { Transaction } from '../../types';
import { commonBudgetCategories } from '../../utils/budgetCategories';
import { Trash2 } from 'lucide-react';
import { AutoScroll } from '../shared/AutoScroll';

interface TransactionsListProps {
  transactions: Transaction[];
  onDelete: (id: string) => void;
}

export const TransactionsList: React.FC<TransactionsListProps> = ({ transactions, onDelete }) => {
  const getCategoryNames = (transaction: Transaction) => {
    const category = commonBudgetCategories.find(cat => cat.id === transaction.category);
    const subcategory = category?.subcategories.find(sub => sub.id === transaction.subcategory);
    return { categoryName: category?.name, subcategoryName: subcategory?.name };
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <AutoScroll className="max-h-[600px]">
        <table className="min-w-full">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((transaction) => {
                const { categoryName, subcategoryName } = getCategoryNames(transaction);
                return (
                  <tr key={transaction.id}>
                    <td className="px-6 py-4">{new Date(transaction.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4">${transaction.amount.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <span className="font-medium">{categoryName}</span>
                      <span className="text-gray-500 mx-2">›</span>
                      <span className="text-gray-700">{subcategoryName}</span>
                    </td>
                    <td className="px-6 py-4">{transaction.description}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => onDelete(transaction.id)}
                        className="text-red-500 hover:text-red-600 p-1 rounded hover:bg-red-50 transition-colors"
                        aria-label="Delete transaction"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </AutoScroll>
    </div>
  );
};