import { useState } from 'react';
import HiringLinks from './HiringLinks';
import Resources from './Resources';
import { HandPointingLeft04Icon } from 'hugeicons-react';

function HomePage({ onCompanyClick }) {
  const [activeTab, setActiveTab] = useState('hiring');

  return (
    <>
      <div className="text-center mb-4">
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
            className={`px-6 py-3 rounded-md font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'resources'
                ? 'bg-amber-500 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Resources
            <HandPointingLeft04Icon
              size={28}
              className="animate-[bounce-horizontal_1s_ease-in-out_infinite]" 
              style={{
                marginLeft: '6px',
                animation: 'bounce-horizontal 1s ease-in-out infinite',
              }}
            />
          </button>
          <style>{`
          
            @keyframes bounce-horizontal {
              0%, 100% {
                transform: translateX(0);
              }
              50% {
                transform: translateX(-10px);
              }
            }
          `}</style>
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