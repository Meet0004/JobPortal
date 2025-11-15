import ResourcesSidebar from './ResourcesSidebar';
import CompaniesSidebar from './CompaniesSidebar';

function Sidebar({ onCompanyClick, companiesData }) {
  return (
    <div className="space-y-6">
      <CompaniesSidebar onCompanyClick={onCompanyClick} companiesData={companiesData} />
      <ResourcesSidebar />
    </div>
  );
}

export default Sidebar;