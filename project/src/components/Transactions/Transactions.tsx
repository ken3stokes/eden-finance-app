import React, { useState, useEffect } from 'react';
import { Transaction, Budget } from '../../types';
import { saveToStorage, getFromStorage } from '../../utils/storage';
import { TransactionForm } from './TransactionForm';
import { TransactionsList } from './TransactionsList';

export const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [budgets, setBudgets] = useState<Budget[]>([]);

  useEffect(() => {
    const savedTransactions = getFromStorage('transactions');
    const savedBudgets = getFromStorage('budgets');
    if (savedTransactions) setTransactions(savedTransactions);
    if (savedBudgets) setBudgets(savedBudgets);
  }, []);

  const handleAddTransaction = (newTransaction: Omit<Transaction, 'id'>) => {
    const transaction: Transaction = {
      id: Date.now().toString(),
      ...newTransaction,
    };

    // Update transactions
    const updatedTransactions = [...transactions, transaction];
    setTransactions(updatedTransactions);
    saveToStorage('transactions', updatedTransactions);

    // Update budget spent amount
    const updatedBudgets = budgets.map(budget => {
      if (budget.category === transaction.category && 
          budget.subcategory === transaction.subcategory) {
        return {
          ...budget,
          spent: budget.spent + transaction.amount,
        };
      }
      return budget;
    });
    setBudgets(updatedBudgets);
    saveToStorage('budgets', updatedBudgets);
  };

  const handleDeleteTransaction = (id: string) => {
    const transaction = transactions.find(t => t.id === id);
    if (!transaction) return;

    // Update transactions
    const updatedTransactions = transactions.filter(t => t.id !== id);
    setTransactions(updatedTransactions);
    saveToStorage('transactions', updatedTransactions);

    // Update budget spent amount
    const updatedBudgets = budgets.map(budget => {
      if (budget.category === transaction.category && 
          budget.subcategory === transaction.subcategory) {
        return {
          ...budget,
          spent: budget.spent - transaction.amount,
        };
      }
      return budget;
    });
    setBudgets(updatedBudgets);
    saveToStorage('budgets', updatedBudgets);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-500 mb-6">Transactions</h2>
      <TransactionForm onSubmit={handleAddTransaction} />
      <TransactionsList 
        transactions={transactions}
        onDelete={handleDeleteTransaction}
      />
    </div>
  );
};