import { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CompanyDetails from './components/CompanyDetails';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCompany, setSelectedCompany] = useState(null);

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
