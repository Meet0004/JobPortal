import { resourcesData } from '../data/data';

function Resources() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-semibold text-amber-600 mb-6 flex items-center">
        <span className="mr-2">📚</span> Resources (Interview Tips and Complete Guide)
      </h3>
      
      <div className="space-y-4">
        {resourcesData.map(resource => (
          <div
            key={resource.id}
            className="flex items-center gap-4 p-4 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors border border-amber-200"
          >
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src={resource.image}
                alt={resource.title}
                className="w-24 h-24 object-cover rounded-lg"
              />
            </div>

            {/* Title and Description */}
            <div className="flex-grow">
              <h4 className="font-semibold text-lg text-gray-800 mb-1">{resource.title}</h4>
              <p className="text-sm text-gray-600 line-clamp-2">{resource.description}</p>
            </div>

            {/* Price and Link */}
            <div className="flex-shrink-0 flex flex-col items-end gap-2">
              <span className="text-xl font-bold text-amber-600">{resource.price}</span>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-amber-500 hover:bg-amber-600 rounded-full transition-colors"
                title="View Resource"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;