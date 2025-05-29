
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
      image: "/lovable-uploads/_DSC2262.jpg",
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
    }
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'interior', label: 'Interior' },
    { id: 'exterior', label: 'Exterior' },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium text-blue-300">{item.type}</p>
{/*                     <h3 className="text-lg font-semibold">{item.title}</h3> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
