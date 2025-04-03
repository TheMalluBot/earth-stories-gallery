
import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { portfolioItems, PortfolioItem as PortfolioItemType } from './PortfolioData';
import PortfolioItemComponent from './PortfolioItem';
import PortfolioImageModal from './PortfolioImageModal';
import { initPortfolioAnimations } from './PortfolioAnimations';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<PortfolioItemType | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const portfolioRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    // Initialize animations when the component mounts
    if (window.gsap && window.ScrollTrigger) {
      initPortfolioAnimations(portfolioRef, activeTab);
    } else {
      // If GSAP is not loaded yet, set up a listener for when it loads
      const checkGSAP = setInterval(() => {
        if (window.gsap && window.ScrollTrigger) {
          clearInterval(checkGSAP);
          initPortfolioAnimations(portfolioRef, activeTab);
        }
      }, 100);
      
      // Clean up interval on component unmount
      return () => clearInterval(checkGSAP);
    }
  }, []);
  
  // Re-initialize animations when tab changes
  useEffect(() => {
    if (window.gsap && window.ScrollTrigger) {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        initPortfolioAnimations(portfolioRef, activeTab);
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
                <PortfolioItemComponent 
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
                    <PortfolioItemComponent 
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

      <PortfolioImageModal 
        selectedImage={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </section>
  );
};

export default Portfolio;
