
export const Testimonials = () => {
  const testimonials = [
    {
      name: "Saiya Yesmurza",
      role: "Royal LePage Realtor",
      image: "/lovable-uploads/realtor_1.jpg",
      content: "As a realtor, I couldn’t be happier with the results. The quality of both the video and photos exceeded my expectations! They truly showcased the property in the best possible light. The turnaround time was impressively fast, and communication throughout the process was excellent. All of my requests and comments were carefully considered and implemented, which made the collaboration smooth and enjoyable. I highly recommend LaVision Media to anyone looking for professional, high-quality real estate media services. Thank you for your outstanding work!",
      rating: 5
    }
    // {
    //   name: "Jennifer Roycroft PREC",
    //   role: "Royal LaPage Realtor",
    //   image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=100&h=100&fit=crop&crop=face",
    //   content: "I've worked with many photographers, but none deliver the wow factor like LaVision Media. Their video walkthroughs and professional photography are game-changers.",
    //   rating: 5
    // },
    // {
    //   name: "Jennifer Park",
    //   role: "Coldwell Banker",
    //   image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=100&h=100&fit=crop&crop=face",
    //   content: "Fast turnaround, competitive pricing, and stunning results. They've become my go-to team for all luxury listings. Highly recommend to any serious realtor.",
    //   rating: 5
    // }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by Vancouver's top real estate professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-yellow-50/30 rounded-lg p-8 hover:shadow-lg transition-all duration-300 border border-yellow-100">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
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
                  className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-yellow-200"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-yellow-600 text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
