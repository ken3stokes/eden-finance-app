import React from 'react';
import { Bill } from '../../types';
import { AlertCircle, Trash2, RefreshCw } from 'lucide-react';
import { commonBudgetCategories } from '../../utils/budgetCategories';

interface BillsListProps {
  bills: Bill[];
  onTogglePaid: (id: string) => void;
  onDelete: (id: string) => void;
}

export const BillsList: React.FC<BillsListProps> = ({ bills, onTogglePaid, onDelete }) => {
  const isComingSoon = (date: string) => {
    const dueDate = new Date(date);
    const today = new Date();
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7 && diffDays >= 0;
  };

  const getRecurringText = (bill: Bill) => {
    if (!bill.isRecurring || !bill.recurringSchedule) return null;
    const { frequency, interval = 1 } = bill.recurringSchedule;
    return `Every ${interval > 1 ? interval : ''} ${frequency.slice(0, -2)}${interval > 1 ? 's' : ''}`;
  };

  const getCategoryNames = (bill: Bill) => {
    const category = commonBudgetCategories.find(cat => cat.id === bill.category);
    const subcategory = category?.subcategories.find(sub => sub.id === bill.subcategory);
    return { categoryName: category?.name, subcategoryName: subcategory?.name };
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recurring</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {bills
            .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
            .map((bill) => {
              const { categoryName, subcategoryName } = getCategoryNames(bill);
              const recurringText = getRecurringText(bill);
              return (
                <tr key={bill.id} className={bill.isPaid ? 'bg-gray-50' : ''}>
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={bill.isPaid}
                      onChange={() => onTogglePaid(bill.id)}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {isComingSoon(bill.dueDate) && !bill.isPaid && (
                        <AlertCircle size={20} className="text-yellow-500 mr-2" />
                      )}
                      <span className={bill.isPaid ? 'line-through text-gray-500' : ''}>
                        {bill.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">${bill.amount.toFixed(2)}</td>
                  <td className="px-6 py-4">{new Date(bill.dueDate).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    {bill.isRecurring && (
                      <div className="flex items-center text-purple-600">
                        <RefreshCw size={16} className="mr-2" />
                        <span className="text-sm">{recurringText}</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium">{categoryName}</span>
                    <span className="text-gray-500 mx-2">›</span>
                    <span className="text-gray-700">{subcategoryName}</span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => onDelete(bill.id)}
                      className="text-red-500 hover:text-red-600 p-1 rounded hover:bg-red-50 transition-colors"
                      aria-label="Delete bill"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};