import { useState, useEffect } from 'react';
import ResourcesData from '../data/ResourceData';
import { placeholderWords } from '../data/searchBarData';
import booksIcon from "../assets/svg/books.svg";

function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const currentWord = placeholderWords[wordIndex];
    const typingSpeed = isDeleting ? 10 : 100;
    const pauseTime = 300;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (placeholder.length < currentWord.length) {
          setPlaceholder(currentWord.slice(0, placeholder.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (placeholder.length > 0) {
          setPlaceholder(placeholder.slice(0, -1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % placeholderWords.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [placeholder, isDeleting, wordIndex]);

  const filteredResources = ResourcesData.filter(resource => {
    const query = searchQuery.toLowerCase();
    return (
      resource.title.toLowerCase().includes(query) ||
      resource.description.toLowerCase().includes(query)
    );
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-semibold text-amber-600 mb-6 flex items-center">
        <img src={booksIcon} className="inline w-7 h-7 mr-2" alt="Books" />
        Resources (Interview Tips and Complete Guide)
      </h3>

      {/* Search Box */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-11 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-amber-500 absolute left-3 top-1/2 transform -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {searchQuery && (
          <p className="mt-2 text-sm text-gray-600">
            Found {filteredResources.length} resource
            {filteredResources.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {/* Mobile List + Desktop Grid */}
      {filteredResources.length > 0 ? (
        <>
          {/* MOBILE LIST */}
          <div className="space-y-4 lg:hidden">
            {filteredResources.map(resource => (
              <div
                key={resource.id}
                className="flex items-center gap-4 p-4 bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200"
              >
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-grow">
                  <h4 className="font-semibold text-lg text-gray-800 mb-1">
                    {resource.title}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {resource.description}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className="text-lg font-bold text-amber-600">
                    {resource.price}
                  </span>

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

          {/* DESKTOP GRID */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {filteredResources.map(resource => (
              <div
                key={resource.id}
                className="flex flex-col bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200 overflow-hidden shadow-sm hover:shadow-md"
              >
                <div className="w-full aspect-square bg-gray-100">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h4 className="font-semibold text-base text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">
                    {resource.title}
                  </h4>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-amber-200">
                    <span className="text-lg font-bold text-amber-600">
                      {resource.price}
                    </span>

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
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-8 text-gray-500">
          No resources found matching "{searchQuery}"
        </div>
      )}
    </div>
  );
}

export default Resources;
