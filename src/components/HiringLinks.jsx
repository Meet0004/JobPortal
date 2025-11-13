import { companiesData } from '../data/JobData';

function HiringLinks({ onCompanyClick }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-semibold text-orange-600 mb-6 flex items-center">
        <span className="mr-2">🏢</span> Company Hiring Links
      </h3>
      <div className="space-y-3">
        {companiesData.map(company => (
          <div
            key={company.id}
            onClick={() => onCompanyClick(company)}
            className="block p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors border border-orange-200 cursor-pointer"
          >
            <h4 className="font-semibold text-lg text-gray-800">{company.name}</h4>
            <p className="text-sm text-gray-700 font-medium">{company.role}</p>
            <p className="text-sm text-gray-600 mt-1">{company.shortdescription}</p>
            <span className="text-orange-600 text-sm font-medium mt-2 inline-block">
              View Details →
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HiringLinks;