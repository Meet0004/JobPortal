import { ArrowRight02Icon } from 'hugeicons-react';
import { JobDataPromo } from '../data/PromoData/JobDataPromo';
import buildingIcon from "../assets/svg/building.svg";
function CompaniesSidebar({ onCompanyClick, companiesData }) {
  //first 4 companies
  const displayCompanies = JobDataPromo.slice(0, 2);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-bold text-gray-800 mb-3"><img src={buildingIcon} className="inline w-7 h-7 mb-2" /> Top Companies</h3>
      <div className="space-y-2">
        {displayCompanies.map((company) => (
          <div
            key={company.id}
            onClick={() => onCompanyClick(company)}
            className="flex items-center gap-3 p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors cursor-pointer group"
          >
            <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center font-bold text-orange-700">
              {company.name[0]}
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800 text-sm">{company.name}</p>
              <p className="text-xs text-orange-600">{company.role}</p>
            </div>
            <ArrowRight02Icon size={16} className="text-orange-600 group-hover:translate-x-1 transition-transform" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompaniesSidebar;