
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
    SplitText: any;
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

    // Turn off default ScrollTrigger markers
    ScrollTrigger.defaults({ markers: false });

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
    
    // Workshop cards with 3D effect
    const workshopsTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".workshops-grid",
        start: "top 75%",
        end: "bottom 50%",
        scrub: 0.5
      }
    });
    
    workshopsTl
      .from(".workshops-grid", {
        rotationY: 5,
        transformPerspective: 1000,
        duration: 1
      });
    
    gsap.utils.toArray(".workshop-card").forEach((card: any, index: number) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        rotationX: 10,
        transformPerspective: 1000,
        duration: 0.8,
        delay: index * 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });
    
    // Make workshop cards container shift horizontally
    gsap.to(".workshops-grid", {
      xPercent: -5,
      ease: "none",
      scrollTrigger: {
        trigger: ".workshops-grid",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
    
    // Blog carousel advanced animation
    const blogTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#blog",
        start: "top 70%",
        end: "center center", 
        scrub: 0.5
      }
    });
    
    blogTl
      .from(".blog-title", { opacity: 0, y: 30, duration: 0.5 })
      .from(".blog-subtitle", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
      .from(".blog-carousel", { 
        opacity: 0, 
        x: -50,
        duration: 0.8
      }, "-=0.2");
    
    // Make blog posts scroll horizontally
    gsap.to(".blog-carousel", {
      x: "-10%",
      ease: "none",
      scrollTrigger: {
        trigger: ".blog-carousel",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
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
      
      // About images animation with 3D effect
      gsap.utils.toArray(".about-image").forEach((img: any, index: number) => {
        gsap.to(img, {
          y: index % 2 === 0 ? "-15%" : "-20%",
          rotationY: index % 2 === 0 ? 5 : -5,
          rotationX: index % 2 === 0 ? 2 : -2,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: img.closest(".about-image-wrapper"),
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });
      
      // Animate the stats numbers
      gsap.utils.toArray(".about-stats-container .stat-number").forEach((stat: any) => {
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
              stat.textContent = Math.ceil(this.targets()[0].textContent);
            }
          }
        );
      });
      
      // Behind the Scenes text effect (revealing from nothing)
      if (document.querySelector(".behind-scenes-title")) {
        const behindScenesTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".behind-scenes-container",
            start: "top 75%",
            toggleActions: "play none none none"
          }
        });
        
        behindScenesTl
          .from(".behind-scenes-title", {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            ease: "back.out(1.7)"
          })
          .from(".behind-scenes-description", {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.4");
      }
      
      // Behind the Scenes cards with creative text effect
      gsap.utils.toArray(".behind-scenes-card").forEach((card: any, index: number) => {
        const title = card.querySelector(".behind-scenes-card-title");
        const text = card.querySelector(".behind-scenes-card-text");
        const button = card.querySelector("button");
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
        
        // Text splitting effect (character by character)
        if (title && window.SplitText) {
          const split = new window.SplitText(title, { type: "chars" });
          
          tl.from(split.chars, {
            opacity: 0,
            y: 20,
            rotationX: -90,
            stagger: 0.02,
            duration: 0.5,
            ease: "back.out(1.7)"
          });
        } else if (title) {
          tl.from(title, {
            opacity: 0,
            y: 20,
            duration: 0.5
          });
        }
        
        // Text fade in
        if (text) {
          tl.from(text, {
            opacity: 0,
            y: 10,
            duration: 0.5
          }, "-=0.2");
        }
        
        // Button fade in
        if (button) {
          tl.from(button, {
            opacity: 0,
            y: 10,
            duration: 0.5
          }, "-=0.2");
        }
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
    
    // Responsive animations using matchMedia
    ScrollTrigger.matchMedia({
      // Desktop animations
      "(min-width: 992px)": function() {
        // More complex animations for desktop
        
        // Portfolio grid staggered reveal
        gsap.utils.toArray(".portfolio-grid").forEach((grid: any) => {
          const cards = grid.querySelectorAll(".portfolio-item");
          gsap.from(cards, {
            opacity: 0,
            y: 50,
            scale: 0.9,
            stagger: {
              each: 0.1,
              grid: [2, 4],
              from: "center"
            },
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: grid,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          });
        });
      },
      
      // Mobile animations
      "(max-width: 991px)": function() {
        // Simpler animations for mobile
        
        // Portfolio simple reveal
        gsap.utils.toArray(".portfolio-item").forEach((card: any) => {
          gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          });
        });
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
