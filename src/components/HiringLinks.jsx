import { useState } from 'react';
import { companiesData } from '../data/JobData';
import buildingIcon from "../assets/svg/building.svg";
import SearchBar from './SearchBar';

function HiringLinks({ onCompanyClick }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleViewDetails = (company) => {
    // Format the URL: /companyId/name/role
    const formattedName = company.name.replace(/\s+/g, '-').toLowerCase();
    const formattedRole = company.role.replace(/\s+/g, '-').toLowerCase();
    const url = `/${company.id}/${formattedName}/${formattedRole}`;
    
    // Update the browser URL without reloading
    window.history.pushState({ company }, '', url);
    
    // Trigger the parent's company click handler to change the view
    if (onCompanyClick) {
      onCompanyClick(company);
    }
  };

  // Filter companies based on search term
  const sortedCompanies = [...companiesData].sort((a, b) => b.id - a.id);
  // Filter companies based on search term
  const filteredCompanies = sortedCompanies.filter(company => {
    const searchLower = searchTerm.toLowerCase();
    return (
      company.name.toLowerCase().includes(searchLower) ||
      company.role.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          <img src={buildingIcon} className="inline w-8 h-8 mb-2" alt="Building" /> Company Hiring Links
        </h2>
      </div>
      
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      {filteredCompanies.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No companies found matching "{searchTerm}"</p>
          <button
            onClick={() => setSearchTerm('')}
            className="mt-4 text-orange-600 hover:text-orange-700 font-medium"
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredCompanies.map(company => (
            <div
              key={company.id}
              onClick={() => handleViewDetails(company)}
              className="block p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors border border-orange-200 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
              <p className="text-sm text-orange-600 font-medium">{company.role}</p>
              <p className="text-sm text-gray-600 mt-2">{company.shortdescription}</p>
              
              <button 
                className="mt-3 text-orange-600 hover:text-orange-700 font-medium text-sm inline-flex items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewDetails(company);
                }}
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HiringLinks;