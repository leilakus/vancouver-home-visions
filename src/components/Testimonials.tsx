
export const Testimonials = () => {
  const testimonials = [
    {
      name: "Saiya Yesmurza",
      role: "Royal LaPage Realtor",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=100&h=100&fit=crop&crop=face",
      content: "The quality of work is exceptional. My listings with their photography sell 40% faster than the market average. The attention to detail and professionalism is unmatched.",
      rating: 5
    },
    {
      name: "Jennifer Roycroft PREC",
      role: "Royal LaPage Realtor",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=100&h=100&fit=crop&crop=face",
      content: "I've worked with many photographers, but none deliver the wow factor like LaVision Media. Their video walkthroughs and professional photography are game-changers.",
      rating: 5
    },
    {
      name: "Jennifer Park",
      role: "Coldwell Banker",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=100&h=100&fit=crop&crop=face",
      content: "Fast turnaround, competitive pricing, and stunning results. They've become my go-to team for all luxury listings. Highly recommend to any serious realtor.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by Vancouver's top real estate professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-amber-50/30 rounded-lg p-8 hover:shadow-lg transition-all duration-300 border border-amber-100">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-amber-200"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-amber-600 text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
