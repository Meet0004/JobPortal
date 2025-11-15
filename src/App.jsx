import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CompanyDetails from "./components/CompanyDetails";
import { companiesData } from "./data/JobData";

function CompanyDetailsWrapper() {
  const { id, company, role } = useParams();

  // find company by id
  const selected = companiesData.find(
    (item) =>
      item.id.toString() === id &&
      item.name.toLowerCase() === company.toLowerCase() &&
      item.role.toLowerCase().replace(/\s+/g, "-") === role.toLowerCase()
  );

  return <CompanyDetails company={selected} />;
}

export default function App() {
  const navigate = useNavigate();

  const handleCompanyClick = (company) => {
    const url =
      `/${company.id}/${company.name.toLowerCase()}/` +
      `${company.role.toLowerCase().replace(/\s+/g, "-")}`;

    navigate(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={<HomePage onCompanyClick={handleCompanyClick} />}
          />

          {/* Details Page */}
          <Route
            path="/:id/:company/:role"
            element={<CompanyDetailsWrapper />}
          />
        </Routes>
      </main>
    </div>
  );
}
