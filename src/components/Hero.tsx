
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    "/lovable-uploads/_DSC21086.jpg",
    "/lovable-uploads/_DSC2273.jpg",
    "/lovable-uploads/_DSC2114.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Real estate photography ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      <div className="absolute inset-0 bg-black/40"></div>
      
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-12 animate-fade-in">
            Leila Professional Real Estate Photography and Videography in Greater Vancouver Area
          </h1>
        {/*   <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
            Professional real estate photography and videography that sells homes faster and for higher prices
          </p> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mt-8">
            <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
              Book Your Shoot
            </Button>
            <Button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-yellow-400/50 text-white hover:bg-yellow-500/20 hover:border-yellow-300 text-lg px-8 py-3 transition-all duration-300"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};
