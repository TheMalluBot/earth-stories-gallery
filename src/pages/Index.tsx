
import { useEffect, useRef } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Workshops from '@/components/Workshops';
import Blog from '@/components/Blog';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#') && link.hostname === window.location.hostname) {
        e.preventDefault();
        const targetId = link.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe all section elements
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      observer.disconnect();
    };
  }, []);

  // Handle parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Parallax for hero section
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        const speed = 0.5;
        const yPos = scrollY * speed;
        heroSection.setAttribute('style', `transform: translateY(${yPos}px)`);
      }
      
      // Animate floating elements based on scroll position
      document.querySelectorAll('.floating-element').forEach((element, index) => {
        const el = element as HTMLElement;
        const rotationSpeed = 0.02 * (index % 3 + 1);
        const floatSpeed = 0.05 * (index % 2 + 1);
        
        el.style.transform = `translateY(${Math.sin(scrollY * floatSpeed) * 20}px) 
                              rotate(${scrollY * rotationSpeed}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <div className="animate-fade-in">
        <Hero />
      </div>
      <div className="relative z-10">
        <div className="section-wrapper" ref={el => sectionsRef.current[0] = el}>
          <Portfolio />
        </div>
        <div className="section-wrapper" ref={el => sectionsRef.current[1] = el}>
          <Workshops />
        </div>
        <div className="section-wrapper" ref={el => sectionsRef.current[2] = el}>
          <Blog />
        </div>
        <div className="section-wrapper" ref={el => sectionsRef.current[3] = el}>
          <About />
        </div>
        <div className="section-wrapper" ref={el => sectionsRef.current[4] = el}>
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
