
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
    
    // Hero background parallax effect
    gsap.to(".hero-background", {
      y: '30%',
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
    
    // Hero text fade out on scroll
    gsap.to([".hero-title", ".hero-description", ".hero-buttons"], {
      opacity: 0,
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "center top",
        end: "bottom top",
        scrub: 0.5
      }
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
          toggleActions: "play none none none"
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
        toggleActions: "play none none none"
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
        toggleActions: "play none none none"
      }
    });
    
    // Portfolio items batch animation for better performance
    ScrollTrigger.batch(".portfolio-item", {
      batchMax: 4,
      start: "top 85%",
      onEnter: batch => gsap.from(batch, {
        opacity: 0,
        y: 40,
        scale: 0.98,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        overwrite: true
      })
    });
    
    // Card image parallax
    gsap.utils.toArray(".portfolio-item .card-image").forEach((img: any) => {
      gsap.to(img, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: img.closest(".portfolio-item"),
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
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
    
    // Add a subtle horizontal shift to workshop cards container
    gsap.to(".workshops-grid", {
      xPercent: -3,
      ease: "none",
      scrollTrigger: {
        trigger: ".workshops-grid",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
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
        toggleActions: "play none none none"
      }
    });
    
    // Blog posts with staggered reveal and subtle rotation
    ScrollTrigger.batch(".blog-post", {
      batchMax: 4,
      start: "top 85%",
      onEnter: batch => gsap.from(batch, {
        opacity: 0,
        y: 50,
        rotationY: 5,
        duration: 0.7,
        stagger: 0.15,
        ease: "back.out(1.2)",
        overwrite: true
      })
    });
    
    // About section with advanced animation
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      // Create a timeline for the about section
      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top 70%",
          end: "center center",
          scrub: 0.5
        }
      });
      
      // Add animations to the timeline
      aboutTl
        .from(".about-content", {
          opacity: 0,
          y: 50,
          duration: 0.5
        })
        .from(".about-stats-container > div", {
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.4
        }, "-=0.2");
      
      // Animate the stats numbers
      gsap.utils.toArray(".about-stats-container .text-3xl").forEach((stat: any) => {
        const endValue = parseInt(stat.textContent);
        gsap.fromTo(stat, 
          { textContent: 0 },
          {
            textContent: endValue,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stat,
              start: "top 80%",
              toggleActions: "play none none none"
            },
            snap: { textContent: 1 },
            onUpdate: function() {
              stat.textContent = Math.ceil(this.targets()[0].textContent) + "+";
            }
          }
        );
      });
    }
    
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
    
    // Floating elements parallax effect
    gsap.utils.toArray(".floating-element").forEach((element: any) => {
      gsap.to(element, {
        y: 'random(-40, 40)',
        x: 'random(-40, 40)',
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1
        }
      });
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
