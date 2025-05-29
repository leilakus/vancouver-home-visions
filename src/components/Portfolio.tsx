import { useState } from "react";

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      image: "/lovable-uploads/_DSC2273.jpg",
      title: "Luxury Condo - Downtown Vancouver",
      category: "interior",
      type: "Photography"
    },
    {
      id: 2,
      image: "/lovable-uploads/_DSC2230.jpg",
      title: "Modern Family Home - West Vancouver",
      category: "interior",
      type: "Photography"
    },
    {
      id: 3,
      image: "/lovable-uploads/_DSC21086.jpg",
      title: "Waterfront Property - North Vancouver",
      category: "interior",
      type: "Photography"
    },
    {
      id: 4,
      image: "/lovable-uploads/_DSC2162.jpg",
      title: "Mountain View Estate - Burnaby",
      category: "interior",
      type: "Photography"
    },
    {
      id: 5,
      image: "/lovable-uploads/_DSC2139.jpg",
      title: "Designer Kitchen - Yaletown",
      category: "interior",
      type: "Photography"
    },
    {
      id: 6,
      image: "/lovable-uploads/_DSC2114.jpg",
      title: "Heritage Home - Kitsilano",
      category: "interior",
      type: "Photography"
    },
    {
      id: 7,
      image: "/lovable-uploads/_DSC2217.jpg",
      title: "Heritage Home - Kitsilano",
      category: "interior",
      type: "Photography"
    },
    {
      id: 8,
      image: "/lovable-uploads/_DSC2178.jpg",
      title: "Heritage Home - Kitsilano",
      category: "interior",
      type: "Photography"
    },
    {
      id: 9,
      image: "/lovable-uploads/_DSC2313.jpg",
      title: "Heritage Home - Kitsilano",
      category: "exterior",
      type: "Photography"
    },
    // Google Drive videos - Replace YOUR_FILE_ID with actual Google Drive file IDs
    {
      id: 10,
      video: "https://drive.google.com/file/d/1y54mWU5uRmz20ChEDWZMRxXmn8UTF9x6/view?usp=sharing",
      title: "Property Walkthrough - West Vancouver",
      category: "exterior",
      type: "Video",
      isVertical: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'interior', label: 'Interior' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'video', label: 'Videos' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : selectedCategory === 'video'
    ? portfolioItems.filter(item => item.video)
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing Vancouver's finest properties through our lens
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Separate sections for better visual hierarchy */}
        {selectedCategory === 'all' ? (
          <div className="space-y-16">
            {/* Photos Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Photography</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.filter(item => item.image).map((item) => (
                  <div key={item.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={item.image}
{/*                         alt={item.title} */}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-sm font-medium text-blue-300">{item.type}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Videos Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Videography</h3>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
                  {portfolioItems.filter(item => item.video).map((item) => (
                    <div key={item.id} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[9/16] max-w-xs mx-auto">
                        <video
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          controls
                          preload="metadata"
                          playsInline
                          poster="/lovable-uploads/1111.jpg" // You can add a poster image URL here
                        >
                          <source src={item.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div className="absolute bottom-4 left-4 text-white">
                            <p className="text-sm font-medium text-blue-300">{item.type}</p>
{/*                             <p className="text-xs text-gray-300 mt-1">{item.title}</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Filtered view - single grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className={`relative overflow-hidden rounded-lg shadow-lg ${
                  item.isVertical ? 'aspect-[9/16] max-w-xs mx-auto' : ''
                }`}>
                  {item.video ? (
                    <video
                      className={`w-full transition-transform duration-300 group-hover:scale-110 ${
                        item.isVertical 
                          ? 'h-full object-cover' 
                          : 'h-64 object-cover'
                      }`}
                      controls
                      preload="metadata"
                      playsInline
                      poster="/lovable-uploads/1111.jpg" // You can add a poster image URL here
                    >
                      <source src={item.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={item.image}
{/*                       alt={item.title} */}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium text-blue-300">{item.type}</p>
{/*                       <p className="text-xs text-gray-300 mt-1">{item.title}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
