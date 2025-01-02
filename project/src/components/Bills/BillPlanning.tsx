import React, { useState, useEffect } from 'react';
import { Bill } from '../../types';
import { saveToStorage, getFromStorage } from '../../utils/storage';
import { AlertCircle } from 'lucide-react';
import { BillForm } from './BillForm';
import { BillsList } from './BillsList';

export const BillPlanning: React.FC = () => {
  const [bills, setBills] = useState<Bill[]>([]);

  useEffect(() => {
    const savedBills = getFromStorage('bills');
    if (savedBills) setBills(savedBills);
  }, []);

  const handleAddBill = (newBill: Omit<Bill, 'id' | 'isPaid'>) => {
    const bill: Bill = {
      id: Date.now().toString(),
      ...newBill,
      isPaid: false,
    };

    const updatedBills = [...bills, bill];
    setBills(updatedBills);
    saveToStorage('bills', updatedBills);
  };

  const togglePaidStatus = (id: string) => {
    const updatedBills = bills.map(bill =>
      bill.id === id ? { ...bill, isPaid: !bill.isPaid } : bill
    );
    setBills(updatedBills);
    saveToStorage('bills', updatedBills);
  };

  const handleDeleteBill = (id: string) => {
    const updatedBills = bills.filter(bill => bill.id !== id);
    setBills(updatedBills);
    saveToStorage('bills', updatedBills);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-500 mb-6">Bill Planning</h2>
      <BillForm onSubmit={handleAddBill} />
      <BillsList 
        bills={bills} 
        onTogglePaid={togglePaidStatus} 
        onDelete={handleDeleteBill}
      />
    </div>
  );
};