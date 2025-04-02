
import { useEffect, useRef } from 'react';
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
  const gsapLoaded = useRef<boolean>(false);

  useEffect(() => {
    // Add the GSAP and ScrollTrigger scripts if they don't already exist
    if (!document.getElementById('gsap-script')) {
      const gsapScript = document.createElement('script');
      gsapScript.id = 'gsap-script';
      gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
      gsapScript.async = true;
      document.body.appendChild(gsapScript);

      const scrollTriggerScript = document.createElement('script');
      scrollTriggerScript.id = 'scrolltrigger-script';
      scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
      scrollTriggerScript.async = true;
      document.body.appendChild(scrollTriggerScript);

      scrollTriggerScript.onload = () => {
        gsapLoaded.current = true;
        initAnimations();
      };
    } else if (window.gsap && window.ScrollTrigger) {
      gsapLoaded.current = true;
      initAnimations();
    }

    // Clean up
    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, []);

  const initAnimations = () => {
    const { gsap, ScrollTrigger } = window;
    if (!gsap || !ScrollTrigger) return;

    console.log("GSAP and ScrollTrigger initialized");
    gsap.registerPlugin(ScrollTrigger);

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
    
    // Section headings animations
    gsap.utils.toArray(".section-heading").forEach((heading: any) => {
      gsap.from(heading, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          toggleActions: "play none none none",
          markers: true // Remove this in production
        }
      });
    });
    
    // Portfolio animations
    gsap.from(".portfolio-subtitle", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".portfolio-subtitle",
        start: "top 85%",
        toggleActions: "play none none none",
        markers: true // Remove this in production
      }
    });
    
    gsap.from(".portfolio-filters", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".portfolio-filters",
        start: "top 85%",
        toggleActions: "play none none none",
        markers: true // Remove this in production
      }
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
        toggleActions: "play none none none",
        markers: true // Remove this in production
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
        toggleActions: "play none none none",
        markers: true // Remove this in production
      }
    });
    
    // Blog posts
    gsap.from(".blog-subtitle", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".blog-subtitle",
        start: "top 85%",
        toggleActions: "play none none none",
        markers: true // Remove this in production
      }
    });
    
    gsap.from(".blog-post", {
      opacity: 0,
      y: 40,
      duration: 0.7,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".blog-grid",
        start: "top 75%",
        toggleActions: "play none none none",
        markers: true // Remove this in production
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
        toggleActions: "play none none none",
        markers: true // Remove this in production
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
        toggleActions: "play none none none",
        markers: true // Remove this in production
      }
    });
    
    // Floating elements parallax effect
    gsap.utils.toArray(".floating-element").forEach((element: any) => {
      gsap.to(element, {
        y: `random(-40, 40)`,
        x: `random(-40, 40)`,
        duration: "random(3, 8)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      });
    });
    
    // Additional parallax effects on scroll
    gsap.to(".hero-title", {
      y: 100,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });
    
    gsap.to(".hero-description", {
      y: 150,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      }
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
    </div>
  );
};

export default Index;
