import React from 'react';
import { Home as HomeIcon, Wallet, Receipt, CreditCard, Map } from 'lucide-react';

type Page = 'main' | 'privacy' | 'terms' | 'cookies' | 'security' | 'disclaimer' | 'faq' | 'docs' | 'roadmap';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: 'home' | 'budget' | 'bills' | 'transactions') => void;
  onNavigate: (page: Page) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange, onNavigate }) => {
  const handleHomeClick = () => {
    onTabChange('home');
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <button 
            onClick={handleHomeClick}
            className="text-2xl font-bold text-green-500 hover:text-green-600 transition-colors"
          >
            Eden
          </button>
          <div className="flex space-x-6">
            <NavButton
              icon={<HomeIcon size={20} />}
              label="Home"
              isActive={activeTab === 'home'}
              onClick={handleHomeClick}
            />
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
            <NavButton
              icon={<Map size={20} />}
              label="Roadmap"
              isActive={false}
              onClick={() => onNavigate('roadmap')}
              className="bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, isActive, onClick, className }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors
      ${className || (isActive 
        ? 'text-green-600 bg-green-50' 
        : 'text-gray-600 hover:text-green-600 hover:bg-green-50')
      }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);