
export const initPortfolioAnimations = (
  portfolioRef: React.RefObject<HTMLElement>,
  activeTab: string
) => {
  const { gsap, ScrollTrigger } = window;
  if (!gsap || !ScrollTrigger || !portfolioRef.current) return;
  
  // Clear any existing ScrollTrigger instances for this section
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.vars.trigger === portfolioRef.current) {
      trigger.kill();
    } else if (typeof trigger.vars.trigger === 'object' && 
               trigger.vars.trigger !== null && 
               'closest' in trigger.vars.trigger && 
               typeof trigger.vars.trigger.closest === 'function' && 
               trigger.vars.trigger.closest('#portfolio')) {
      trigger.kill();
    }
  });
  
  // Animate portfolio title and subtitle
  gsap.from(".portfolio-title", {
    opacity: 0,
    y: 30,
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
    ease: "power3.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".portfolio-subtitle",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });
  
  // Animate tab filters
  gsap.from(".portfolio-filters", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power2.out",
    delay: 0.4,
    scrollTrigger: {
      trigger: ".portfolio-filters",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });
  
  // Get portfolio items and animate with alternating row animations
  const portfolioItems = gsap.utils.toArray('.portfolio-item');
  if (portfolioItems.length > 0) {
    // Determine number of items per row based on screen width
    const itemsPerRow = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1;
    
    // Group items by row
    const rows = [];
    for (let i = 0; i < portfolioItems.length; i += itemsPerRow) {
      rows.push(Array.from(portfolioItems).slice(i, i + itemsPerRow));
    }
    
    // Apply alternating animations to each row
    rows.forEach((row, index) => {
      const isEvenRow = index % 2 === 0;
      
      // Even rows come from left, odd rows come from right
      gsap.fromTo(
        row,
        { 
          opacity: 0, 
          x: isEvenRow ? -50 : 50,
          y: 20,
          scale: 0.95
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
  
  // Add hover effect animation for portfolio items
  gsap.utils.toArray('.portfolio-item').forEach((item) => {
    const img = item.querySelector('.card-image');
    if (img) {
      // Parallax effect on scroll
      gsap.to(img, {
        y: "-15%",
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }
  });
};
