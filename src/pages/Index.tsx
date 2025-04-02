
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Workshops from '@/components/Workshops';
import Blog from '@/components/Blog';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Import GSAP and ScrollTrigger from the CDN
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

const Index = () => {
  useEffect(() => {
    // Wait for GSAP and ScrollTrigger to be available
    const checkGSAP = () => {
      if (window.gsap && window.ScrollTrigger) {
        const { gsap, ScrollTrigger } = window;
        
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        
        // Initialize animations
        initAnimations(gsap, ScrollTrigger);
      } else {
        // Check again in 100ms
        setTimeout(checkGSAP, 100);
      }
    };
    
    checkGSAP();
    
    return () => {
      // Clean up ScrollTrigger on unmount
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, []);
  
  // All animation setup
  const initAnimations = (gsap: any, ScrollTrigger: any) => {
    // Hero section animations
    gsap.from(".hero-title", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out"
    });
    
    gsap.from(".hero-description", {
      opacity: 0,
      y: 30,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out"
    });
    
    gsap.from(".hero-buttons", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.6,
      ease: "power3.out"
    });
    
    // Section heading animations
    gsap.utils.toArray(".section-heading").forEach((heading: any) => {
      gsap.from(heading, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });
    
    // Portfolio items (staggered)
    gsap.from(".portfolio-item", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".portfolio-grid",
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });
    
    // Workshop cards (staggered)
    gsap.from(".workshop-card", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".workshops-grid",
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });
    
    // Testimonials
    gsap.from(".testimonial-item", {
      opacity: 0,
      y: 30,
      duration: 0.7,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".testimonials-container",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
    
    // Blog posts
    gsap.from(".blog-post", {
      opacity: 0,
      y: 40,
      duration: 0.7,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".blog-grid",
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });
    
    // About section
    gsap.from(".about-content", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });
    
    // Contact section
    gsap.from(".contact-element", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
    
    // Floating elements animation
    gsap.to(".floating-element", {
      y: "random(-20, 20)",
      x: "random(-20, 20)",
      rotation: "random(-10, 10)",
      duration: "random(3, 6)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.2
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Portfolio />
      <Workshops />
      <Blog />
      <About />
      <Contact />
      <Footer />
      
      {/* GSAP CDN Scripts */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" async></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" async></script>
    </div>
  );
};

export default Index;
