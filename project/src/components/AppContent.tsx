import React, { useState } from 'react';
import { Home } from './Home/Home';
import { BudgetContainer } from './Budget/BudgetContainer';
import { BillPlanning } from './Bills/BillPlanning';
import { Transactions } from './Transactions/Transactions';
import { SecurityBanner } from './SecurityBanner';
import { DashboardLayout } from './Layout/DashboardLayout';
import { Footer } from './Layout/Footer';

type Page = 'main' | 'privacy' | 'terms' | 'cookies' | 'security' | 'disclaimer' | 'faq' | 'docs' | 'roadmap';

interface AppContentProps {
  onNavigate: (page: Page) => void;
}

export const AppContent: React.FC<AppContentProps> = ({ onNavigate }) => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [activeTab, setActiveTab] = useState<'budget' | 'bills' | 'transactions'>('budget');

  // Show home page initially
  if (!showDashboard) {
    return (
      <>
        <Home onGetStarted={() => setShowDashboard(true)} />
        <Footer onNavigate={onNavigate} />
      </>
    );
  }

  // Show dashboard when started
  return (
    <DashboardLayout 
      activeTab={activeTab} 
      onTabChange={setActiveTab}
      onNavigateHome={() => setShowDashboard(false)}
    >
      <SecurityBanner onViewRoadmap={() => onNavigate('roadmap')} />
      {activeTab === 'budget' && <BudgetContainer />}
      {activeTab === 'bills' && <BillPlanning />}
      {activeTab === 'transactions' && <Transactions />}
    </DashboardLayout>
  );
};