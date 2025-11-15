import { companiesData } from '../data/JobData';

function HiringLinks({ onCompanyClick }) {
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

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">🏢 Company Hiring Links</h2>
      </div>
      
      <div className="space-y-4">
        {companiesData.map(company => (
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
                e.stopPropagation(); // Prevent double triggering from parent div
                handleViewDetails(company);
              }}
            >
              View Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HiringLinks;