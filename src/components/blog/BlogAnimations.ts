
export const initBlogAnimations = (blogSectionRef: React.RefObject<HTMLElement>) => {
  const { gsap, ScrollTrigger } = window;
  if (!gsap || !ScrollTrigger || !blogSectionRef.current) return;
  
  // Clear any existing ScrollTrigger instances for this section
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.vars.trigger === blogSectionRef.current || 
        trigger.vars.trigger?.closest('#blog')) {
      trigger.kill();
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

  // Blog card staggered animations
  gsap.from(".blog-card", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".blog-grid",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });

  // Blog card title animations
  gsap.utils.toArray('.blog-post-title').forEach((title) => {
    gsap.from(title, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      scrollTrigger: {
        trigger: title,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    });
  });
};
