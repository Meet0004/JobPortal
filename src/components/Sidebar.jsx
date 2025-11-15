import ResourcesSidebar from './ResourcesSidebar';
import CompaniesSidebar from './CompaniesSidebar';

function Sidebar({ onCompanyClick, companiesData }) {
  return (
    <div className="space-y-6">
      <ResourcesSidebar />
      <CompaniesSidebar onCompanyClick={onCompanyClick} companiesData={companiesData} />
      
    </div>
  );
}

export default Sidebar;