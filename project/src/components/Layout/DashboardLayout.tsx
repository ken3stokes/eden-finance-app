import React from 'react';
import { Home as HomeIcon, Wallet, Receipt, CreditCard } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab: 'budget' | 'bills' | 'transactions';
  onTabChange: (tab: 'budget' | 'bills' | 'transactions') => void;
  onNavigateHome: () => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  activeTab,
  onTabChange,
  onNavigateHome
}) => {
  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col">
        {/* Logo */}
        <button 
          onClick={onNavigateHome}
          className="p-6 border-b border-slate-700 text-left hover:bg-slate-700/50 transition-colors"
        >
          <span className="text-2xl font-bold text-green-500">Eden</span>
        </button>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <NavButton
              icon={<Wallet size={20} />}
              label="Budget"
              isActive={activeTab === 'budget'}
              onClick={() => onTabChange('budget')}
            />
            <NavButton
              icon={<Receipt size={20} />}
              label="Bills"
              isActive={activeTab === 'bills'}
              onClick={() => onTabChange('bills')}
            />
            <NavButton
              icon={<CreditCard size={20} />}
              label="Transactions"
              isActive={activeTab === 'transactions'}
              onClick={() => onTabChange('transactions')}
            />
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
      isActive 
        ? 'bg-green-500 text-white' 
        : 'text-slate-400 hover:text-white hover:bg-slate-700'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);