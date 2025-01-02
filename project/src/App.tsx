import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { AppContent } from './components/AppContent';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePolicy } from './pages/CookiePolicy';
import { SecurityPolicy } from './pages/SecurityPolicy';
import { Disclaimer } from './pages/Disclaimer';
import { FAQ } from './pages/FAQ/FAQ';
import { Documentation } from './pages/Documentation/Documentation';
import { Roadmap } from './pages/Roadmap/Roadmap';

type Page = 'main' | 'privacy' | 'terms' | 'cookies' | 'security' | 'disclaimer' | 'faq' | 'docs' | 'roadmap';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('main');

  const handleBack = () => setCurrentPage('main');

  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        {currentPage === 'main' && <AppContent onNavigate={setCurrentPage} />}
        {currentPage === 'privacy' && <PrivacyPolicy onBack={handleBack} />}
        {currentPage === 'terms' && <TermsOfService onBack={handleBack} />}
        {currentPage === 'cookies' && <CookiePolicy onBack={handleBack} />}
        {currentPage === 'security' && <SecurityPolicy onBack={handleBack} />}
        {currentPage === 'disclaimer' && <Disclaimer onBack={handleBack} />}
        {currentPage === 'faq' && <FAQ onBack={handleBack} />}
        {currentPage === 'docs' && <Documentation onBack={handleBack} />}
        {currentPage === 'roadmap' && <Roadmap onBack={handleBack} />}
      </div>
    </AuthProvider>
  );
}

export default App;