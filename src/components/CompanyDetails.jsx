import Sidebar from './Sidebar';
import { companiesData } from '../data/JobData';

function CompanyDetails({ company, onBack, onCompanyClick }) {
  if (!company) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Company Not Found</h2>
          <button onClick={onBack} className="text-orange-600 hover:underline">
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={onBack}
        className="text-orange-600 hover:underline mb-4 md:ml-28 inline-flex items-center"
      >
        ← Back to Home
      </button>

      <div className="flex flex-col lg:flex-row gap-6 justify-center mb-10">
        {/* Main Content */}
        <div className="flex-1 max-w-3xl bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800">{company.name} </h2>
          <h2 className="mt-2 text-2xl font-bold text-gray-800">Role: {company.role} </h2>
          <p className="text-gray-600 mb-6">{company.description}</p>
          <div className="border-t pb-8 border-b">
            <div className="pt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 ml-1">Apply Now</h3>
            <a
              href={company.hiringLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Visit Career Page →
            </a>
          </div>
        </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 my-3">Job Description</h3>
            <ul
              className="list-disc list-inside space-y-4 text-gray-600"
              style={{ whiteSpace: "pre-line" }}
            >
              {company.fulldescription}
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 my-3">
              Interview Tips for {company.name}
            </h3>
            <ul className="list-disc list-inside space-y-0 text-gray-600">
              <li>Research {company.name}'s culture and values</li>
              <li>Prepare for technical and behavioral questions</li>
              <li>Practice coding problems on platforms like LeetCode</li>
              <li>Prepare questions to ask the interviewer</li>
              <li>Review your resume thoroughly</li>
            </ul>
          </div>
          

        {/* Sidebar - appears after main content on mobile, beside on desktop */}
        <div className="w-full lg:w-80 flex-shrink-0 order-last">
          <Sidebar onCompanyClick={onCompanyClick} companiesData={companiesData} />
        </div>
      </div>
    </>
  );
}

export default CompanyDetails;