
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Workshops from '@/components/Workshops';
import Blog from '@/components/Blog';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Portfolio />
      <Workshops />
      <Blog />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
