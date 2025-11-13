import { useState } from 'react';
import HiringLinks from './HiringLinks';
import Resources from './Resources';

function HomePage({ onCompanyClick }) {
  const [activeTab, setActiveTab] = useState('hiring');

  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-4xl font-semibold text-gray-800 mb-2">Meet Soni</h2>
        <p className="text-gray-600">Your Career Guide & Interview Resource Hub</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg shadow-md p-2 inline-flex gap-2">
          <button
            onClick={() => setActiveTab('hiring')}
            className={`px-6 py-3 rounded-md font-semibold transition-colors ${
              activeTab === 'hiring'
                ? 'bg-orange-500 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Company Hiring Links
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`px-6 py-3 rounded-md font-semibold transition-colors ${
              activeTab === 'resources'
                ? 'bg-amber-500 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Resources
          </button>
        </div>
      </div>

      {/* Content Display */}
      <div className="max-w-4xl mx-auto">
        {activeTab === 'hiring' ? <HiringLinks onCompanyClick={onCompanyClick} /> : <Resources />}
      </div>
    </>
  );
}

export default HomePage;