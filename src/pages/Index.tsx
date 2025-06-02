
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Testimonials } from "@/components/Testimonials";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Portfolio />
      <Services />
{/*       <About /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
