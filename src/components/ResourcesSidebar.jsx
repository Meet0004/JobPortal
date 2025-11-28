import { ArrowRight02Icon } from 'hugeicons-react';
import { resourcesData } from '../data/PromoData/ResourceDataPromo';
import booksIcon from "../assets/svg/books.svg";
function ResourcesSidebar() {
  const resources = resourcesData;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-bold text-gray-800 mb-3"><img src={booksIcon} className="inline w-7 h-7 mb-2" /> Resources</h3>
      <div className="space-y-2 max-h-[280px] overflow-y-auto pr-2 custom-scrollbar">
        {resources.map((resource) => (
          <a
            key={resource.id}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors group"
          >
            <img
              src={resource.image}
              alt={resource.title}
              className="w-10 h-10 object-contain rounded"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/40?text=" + resource.title[0];
              }}
            />
            <span className="flex-1 font-medium text-gray-800 text-sm">{resource.title}</span>
            <ArrowRight02Icon size={16} className="text-amber-600 group-hover:translate-x-1 transition-transform" />
          </a>
        ))}
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #fbbf24;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #f59e0b;
        }
      `}</style>
    </div>
  );
}

export default ResourcesSidebar;