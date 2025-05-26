
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      title: "Photos",
      price: "$150",
      features: [
        "15-25 professional photos",
        "HDR photography",
        "Basic editing & color correction",
        "Online gallery delivery",
        "48-hour turnaround",
        "Commercial usage rights"
      ],
      popular: false
    },
    {
      title: "Videos",
      price: "$300",
      features: [
        "Cinematic video walkthrough",
        "Professional editing",
        "4K video quality",
        "Multiple angles and shots",
        "Background music included",
        "24-hour turnaround",
        "Commercial usage rights"
      ],
      popular: true
    },
    {
      title: "Premium",
      price: "$400",
      features: [
        "25-40 professional photos",
        "Cinematic video walkthrough",
        "HDR & twilight photography",
        "Virtual staging (2 rooms)",
        "Floor plan photography",
        "Advanced editing & enhancement",
        "Same-day turnaround",
        "Full commercial rights"
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Service Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional real estate media packages designed to showcase your property's best features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`relative ${service.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-600">{service.price}</span>
                  <span className="text-gray-600 ml-2">per property</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${
                    service.popular 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-800 hover:bg-gray-900'
                  }`}
                >
                  Book This Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Solutions Available</h3>
            <p className="text-gray-600 mb-6">
              Need something specific? We offer custom packages for large properties, commercial real estate, 
              and special requirements. Contact us for a personalized quote.
            </p>
            <Button onClick={scrollToContact} variant="outline" size="lg">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
