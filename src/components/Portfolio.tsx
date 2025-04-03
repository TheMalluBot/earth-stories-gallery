
import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

const portfolioItems = [
  {
    id: 1,
    title: 'Mountain Sunrise',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Forest Pathway',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'River Valley',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Deer in Forest',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Business Portrait',
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Creative Portrait',
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    title: 'Wedding Ceremony',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    title: 'Corporate Event',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<null | { id: number; image: string; title: string }>(null);
  const [activeTab, setActiveTab] = useState("all");
  const portfolioRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const gsapLoaded = useRef<boolean>(false);
  const imagesLoaded = useRef<boolean>(false);
  
  const initAnimations = () => {
    const { gsap, ScrollTrigger } = window;
    if (!gsap || !ScrollTrigger || !portfolioRef.current) return;
    
    // Clear any existing ScrollTrigger instances for this section
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.trigger === portfolioRef.current || 
          trigger.vars.trigger?.closest('#portfolio')) {
        trigger.kill();
      }
    });
    
    // Create text split animations
    if (window.SplitText) {
      const titleSplit = new window.SplitText(".portfolio-title", { type: "chars" });
      const subtitleSplit = new window.SplitText(".portfolio-subtitle", { type: "chars" });
      
      gsap.from(titleSplit.chars, {
        opacity: 0,
        y: 20,
        rotationX: -90,
        stagger: 0.02,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".portfolio-title",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
      
      gsap.from(subtitleSplit.chars, {
        opacity: 0,
        y: 20,
        rotationX: -90,
        stagger: 0.01,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.3,
        scrollTrigger: {
          trigger: ".portfolio-subtitle",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    } else {
      // Fallback if SplitText is not loaded
      gsap.from(".portfolio-title", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".portfolio-title",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
      
      gsap.from(".portfolio-subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.3,
        scrollTrigger: {
          trigger: ".portfolio-subtitle",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    }
    
    // Animate filters with a bounce effect
    gsap.from(".portfolio-filters", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: ".portfolio-filters",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
    
    // Create alternating row animations for portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-grid .portfolio-item');
    if (portfolioItems.length > 0) {
      // Group items by row
      const rows = [];
      const itemsPerRow = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1;
      
      for (let i = 0; i < portfolioItems.length; i += itemsPerRow) {
        rows.push(Array.from(portfolioItems).slice(i, i + itemsPerRow));
      }
      
      // Apply alternating animations to each row
      rows.forEach((row, rowIndex) => {
        const isEvenRow = rowIndex % 2 === 0;
        const xOffset = isEvenRow ? -50 : 50;
        
        gsap.fromTo(
          row,
          { 
            opacity: 0, 
            x: xOffset,
            y: 30,
            scale: 0.9
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row[0],
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    }
    
    // Add parallax effect to card images
    gsap.utils.toArray(".card-image").forEach((image: any) => {
      const card = image.closest('.portfolio-item');
      if (card) {
        gsap.to(image, {
          y: "-20%",
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }
    });
  };

  // Function to ensure all images are loaded and visible
  const ensureImagesVisible = () => {
    if (imagesLoaded.current) return;
    
    const { gsap } = window;
    if (!gsap) return;
    
    // Force all images to be visible right away
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    gsap.to(portfolioItems, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: "power3.out",
      onComplete: () => {
        imagesLoaded.current = true;
      }
    });
  };

  // Load GSAP plugins and initialize animations
  useEffect(() => {
    if (window.gsap && window.ScrollTrigger) {
      gsapLoaded.current = true;
    }
    
    // Load SplitText plugin if not already loaded
    if (!document.getElementById('gsap-splittext')) {
      const splitTextScript = document.createElement('script');
      splitTextScript.id = 'gsap-splittext';
      splitTextScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/SplitText.min.js';
      splitTextScript.async = true;
      document.body.appendChild(splitTextScript);
      
      splitTextScript.onload = () => {
        if (gsapLoaded.current) {
          initAnimations();
          setTimeout(ensureImagesVisible, 300);
        }
      };
    } else if (window.SplitText && gsapLoaded.current) {
      initAnimations();
      setTimeout(ensureImagesVisible, 300);
    }
    
    // Clean up
    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars.trigger === portfolioRef.current || 
              trigger.vars.trigger?.closest('#portfolio')) {
            trigger.kill();
          }
        });
      }
    };
  }, []);
  
  // Re-initialize animations when tab changes
  useEffect(() => {
    if (window.gsap && window.ScrollTrigger && window.SplitText) {
      setTimeout(() => {
        initAnimations();
        ensureImagesVisible();
      }, 100);
    }
  }, [activeTab]);
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <section id="portfolio" ref={portfolioRef} className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading portfolio-title text-3xl md:text-4xl font-serif font-bold mb-4">Portfolio</h2>
          <p className="portfolio-subtitle text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my finest photographs across various categories
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={handleTabChange}>
          <TabsList className="portfolio-filters mx-auto mb-8 flex justify-center">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="nature">Nature</TabsTrigger>
            <TabsTrigger value="portraits">Portraits</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="portfolio-grid-container">
            <div className="portfolio-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {portfolioItems.map((item, index) => (
                <PortfolioItem 
                  key={item.id} 
                  item={item} 
                  onClick={() => setSelectedImage(item)}
                  ref={el => {
                    if (el && itemsRef.current) {
                      itemsRef.current[index] = el;
                    }
                  }}
                />
              ))}
            </div>
          </TabsContent>

          {['nature', 'portraits', 'events'].map((category) => (
            <TabsContent key={category} value={category} className="portfolio-grid-container">
              <div className="portfolio-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {portfolioItems
                  .filter((item) => item.category === category)
                  .map((item, index) => (
                    <PortfolioItem 
                      key={item.id} 
                      item={item} 
                      onClick={() => setSelectedImage(item)}
                      ref={el => {
                        if (el && itemsRef.current) {
                          const filteredIndex = portfolioItems
                            .filter(i => i.category === category)
                            .findIndex(i => i.id === item.id);
                          itemsRef.current[portfolioItems.length + filteredIndex] = el;
                        }
                      }}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title} 
              className="w-full h-auto rounded-md animate-scale-in"
            />
            <p className="text-white text-center mt-4 text-xl font-serif">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

const PortfolioItem = React.forwardRef<
  HTMLDivElement, 
  { 
    item: { id: number; title: string; category: string; image: string }; 
    onClick: () => void 
  }
>(({ item, onClick }, ref) => {
  return (
    <Card 
      ref={ref}
      className="portfolio-item overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300" 
      onClick={onClick}
    >
      <CardContent className="p-0 relative">
        <div className="aspect-square overflow-hidden portfolio-image-container">
          <img 
            src={item.image} 
            alt={item.title} 
            className="card-image w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            loading="eager"
          />
        </div>
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100",
          "flex items-end justify-start p-4 transition-opacity duration-300"
        )}>
          <div className="text-white">
            <h3 className="font-semibold font-serif">{item.title}</h3>
            <p className="text-sm capitalize text-white/80">{item.category}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});
PortfolioItem.displayName = "PortfolioItem";

export default Portfolio;
