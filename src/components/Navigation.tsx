import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <div className="bg-white rounded-lg p-2 shadow-sm">
              <img 
                src="/lovable-uploads/1120f3e6-bb6a-4365-999c-f8d5ad90319a.png" 
                alt="LaVision Media" 
                className="h-18 w-auto"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 ml-4 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              LaVision Media
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">Portfolio</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-2 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium">Contact</button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-yellow-600 font-medium">Portfolio</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-yellow-600 font-medium">Services</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-yellow-600 font-medium">About</button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-yellow-600 font-medium">Reviews</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg font-medium">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};
