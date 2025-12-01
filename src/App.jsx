import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CompanyDetails from './components/CompanyDetails';
import { companiesData } from './data/JobData';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCompany, setSelectedCompany] = useState(null);

  // Load company from URL on initial mount
  useEffect(() => {
    const loadCompanyFromURL = () => {
      const path = window.location.pathname;
      const segments = path.split('/').filter(Boolean);
      
      // Check if URL matches pattern: /id/name/role
      if (segments.length === 3) {
        const companyId = segments[0];
        
        // Find company by ID
        const company = companiesData.find(c => c.id === companyId || c.id === parseInt(companyId));
        
        if (company) {
          setSelectedCompany(company);
          setCurrentView('companyDetails');
        } else {
          // Company not found, redirect to home
          window.history.replaceState({}, '', '/');
          setCurrentView('home');
        }
      }
    };

    loadCompanyFromURL();
  }, []); // Run only once on mount

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
    setCurrentView('companyDetails');

    const formattedName = company.name.replace(/\s+/g, '-').toLowerCase();
    const formattedRole = company.role.replace(/\s+/g, '-').toLowerCase();
    const url = `/${company.id}/${formattedName}/${formattedRole}`;

    window.history.pushState({ company }, '', url);
  };

  const handleBackToHome = () => {
    setSelectedCompany(null);
    setCurrentView('home');
    window.history.pushState({}, '', '/');
  };

  // Browser back & forward handling
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.company) {
        setSelectedCompany(event.state.company);
        setCurrentView('companyDetails');
      } else {
        // Try to load from URL if no state
        const path = window.location.pathname;
        const segments = path.split('/').filter(Boolean);
        
        if (segments.length === 3) {
          const companyId = segments[0];
          const company = companiesData.find(c => c.id === companyId || c.id === parseInt(companyId));
          
          if (company) {
            setSelectedCompany(company);
            setCurrentView('companyDetails');
            return;
          }
        }
        
        // Otherwise go to home
        setSelectedCompany(null);
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {currentView === 'home' ? (
          <HomePage onCompanyClick={handleCompanyClick} />
        ) : (
          <CompanyDetails 
            company={selectedCompany} 
            onBack={handleBackToHome}
            onCompanyClick={handleCompanyClick}
          />
        )}
      </main>
    </div>
  );
}

export default App;