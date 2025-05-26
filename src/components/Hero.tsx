
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop"
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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Capturing Vancouver's
          <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Premium Properties
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
          Professional real estate photography and videography that sells homes faster and for higher prices
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button onClick={scrollToContact} size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
            Book Your Shoot
          </Button>
          <Button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline" 
            size="lg" 
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-3"
          >
            View Portfolio
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};
