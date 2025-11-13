import { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CompanyDetails from './components/CompanyDetails';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
    setCurrentView('companyDetails');
  };

  const handleBackToHome = () => {
    setSelectedCompany(null);
    setCurrentView('home');
  };

  return (
    <div className="h-4 bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {currentView === 'home' ? (
          <HomePage onCompanyClick={handleCompanyClick} />
        ) : (
          <CompanyDetails company={selectedCompany} onBack={handleBackToHome} />
        )}
      </main>
    </div>
  );
}

export default App;