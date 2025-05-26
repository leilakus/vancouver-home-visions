
export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Vancouver Real Estate Media
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 8 years of experience in real estate photography and videography, 
              we specialize in capturing the essence of Vancouver's unique properties. 
              From luxury waterfront homes to modern downtown condos, we understand 
              what it takes to make properties stand out in today's competitive market.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team combines technical expertise with artistic vision to deliver 
              stunning visuals that not only showcase your property but tell its story. 
              We're committed to helping real estate professionals sell faster and for 
              better prices through compelling visual content.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">500+</h3>
                <p className="text-gray-600">Properties Photographed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">98%</h3>
                <p className="text-gray-600">Client Satisfaction Rate</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">24hr</h3>
                <p className="text-gray-600">Average Turnaround</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">8yrs</h3>
                <p className="text-gray-600">Industry Experience</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=600&h=600&fit=crop"
              alt="Professional photographer at work"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 text-sm mb-2">Trusted by Vancouver's top realtors</p>
              <div className="flex items-center">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-800 font-semibold">5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
