import Sidebar from './Sidebar';
import { companiesData } from '../data/JobData';

function CompanyDetails({ company, onBack, onCompanyClick }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [company]);
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
          <h2 className="text-3xl font-bold text-gray-800">{company.name}</h2>
          <h2 className="mt-2 text-2xl font-bold text-gray-800">
            Role: {company.role}
          </h2>
          <p className="text-gray-600 mb-6">{company.description}</p>

          <div className="border-t pb-8 border-b">
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 ml-1">
                Apply Now
              </h3>
              {company.email && (
                <div className="mt-4 inline-flex items-center gap-2 bg-gray-50 p-3 rounded-lg max-w-fit">
                  <span id="hr-label" className="text-sm font-medium text-gray-700 transition-colors duration-300">HR Email:</span>
                  <span className="text-sm text-gray-600">{company.email}</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(company.email);
                      const label = document.getElementById('hr-label');
                      const icon = document.getElementById('copy-icon');
                      
                      label.classList.add('text-orange-500');
                      icon.classList.add('text-orange-500');
                      
                      setTimeout(() => {
                        label.classList.remove('text-orange-500');
                        icon.classList.remove('text-orange-500');
                      }, 300);
                    }}
                    className="p-1.5 hover:bg-gray-200 rounded transition-colors"
                    title="Copy email"
                  >
                    <svg id="copy-icon" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              )}

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


          {/* FIXED: No large gap, proper bullets */}
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Job Description</h3>

          <ul className="space-y-2 text-gray-800">
            {company.fulldescription
              ?.split("\n")
              .filter(line => line.trim() !== "")
              .map((item, index) => (
                <li
                  key={index}
                  className="relative pl-5 before:content-['▸'] before:absolute before:left-0 before:text-orange-500"
                >
                  {item.trim()}
                </li>
              ))}
          </ul>

          <div className="mt-6"></div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Interview Preparation Tips</h3>

          <ul className="list-inside space-y-0 text-gray-600">
            <li className="relative pl-5 before:content-['▸'] before:absolute before:left-0 before:text-orange-500">Research {company.name}'s culture and values</li>
            <li className="relative pl-5 before:content-['▸'] before:absolute before:left-0 before:text-orange-500">Prepare for technical and behavioral questions</li>
            <li className="relative pl-5 before:content-['▸'] before:absolute before:left-0 before:text-orange-500">Practice coding problems on platforms like LeetCode</li>
            <li className="relative pl-5 before:content-['▸'] before:absolute before:left-0 before:text-orange-500">Prepare questions to ask the interviewer</li>
            <li className="relative pl-5 before:content-['▸'] before:absolute before:left-0 before:text-orange-500">Review your resume thoroughly</li>
          </ul>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 flex-shrink-0 order-last">
          <Sidebar onCompanyClick={onCompanyClick} companiesData={companiesData} />
        </div>
      </div>
    </>
  );
}

export default CompanyDetails;