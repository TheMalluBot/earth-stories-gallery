
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Add staggered animation to text elements
    const title = textRef.current;
    if (title) {
      const words = title.innerText.split(' ');
      title.innerHTML = words.map(word => 
        `<span class="inline-block overflow-hidden"><span class="reveal-text-word inline-block">${word}</span></span>`
      ).join(' ');
      
      // Animate each word with a delay
      const wordElements = title.querySelectorAll('.reveal-text-word');
      wordElements.forEach((word, index) => {
        (word as HTMLElement).style.animationDelay = `${0.2 * index}s`;
      });
    }
    
    return () => setMounted(false);
  }, []);

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { width, height } = heroRef.current.getBoundingClientRect();
        
        // Calculate movement based on mouse position relative to center
        const moveX = ((clientX - width / 2) / width) * 40;
        const moveY = ((clientY - height / 2) / height) * 40;
        
        // Apply movement to floating elements
        document.querySelectorAll('.floating-element').forEach((element, index) => {
          const el = element as HTMLElement;
          const factor = 1 - (index % 3) * 0.2;
          
          el.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px) ${el.style.transform}`;
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mounted]);

  return (
    <section ref={heroRef} className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black via-[#150f1f] to-black z-0"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-30 z-[1]"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {mounted && (
          <>
            {/* Large gradient circle */}
            <div className="floating-element w-[70vw] h-[70vw] rounded-full bg-gradient-to-tr from-purple-900/20 via-blue-900/10 to-transparent backdrop-blur-3xl absolute -top-[30%] -right-[20%] animate-float-slow" />
            
            {/* Small colored orbs */}
            <div className="floating-element w-32 h-32 md:w-48 md:h-48 rounded-full bg-blue-500/10 backdrop-blur-3xl absolute -top-10 -left-10 animate-float-slow border border-blue-500/20" />
            <div className="floating-element w-40 h-40 md:w-56 md:h-56 rounded-full bg-purple-500/10 backdrop-blur-3xl absolute bottom-20 -right-20 animate-float-reverse border border-purple-500/20" />
            <div className="floating-element w-24 h-24 md:w-32 md:h-32 rounded-full bg-green-500/10 backdrop-blur-3xl absolute top-1/3 right-10 animate-float border border-green-500/20" />
            
            {/* Glowing elements */}
            <div className="floating-element w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/80 blur-md absolute top-1/4 left-1/4 animate-pulse-slow" />
            <div className="floating-element w-4 h-4 md:w-6 md:h-6 rounded-full bg-white/80 blur-md absolute bottom-1/3 right-1/3 animate-pulse-slow" />
            <div className="floating-element w-5 h-5 md:w-7 md:h-7 rounded-full bg-white/80 blur-md absolute top-2/3 left-1/3 animate-pulse-slow" />
            
            {/* Grid-like elements */}
            <div className="floating-element w-40 h-40 md:w-64 md:h-64 border border-white/10 rounded-lg absolute top-1/4 left-1/3 rotate-12 backdrop-blur-sm animate-float-slow-reverse" />
            <div className="floating-element w-32 h-32 md:w-48 md:h-48 border border-white/10 rounded-lg absolute bottom-1/4 right-1/3 -rotate-6 backdrop-blur-sm animate-float-slow" />
            
            {/* Glassy surfaces */}
            <div className="floating-element w-48 h-48 md:w-80 md:h-80 glassmorphism absolute opacity-20 -bottom-10 -left-20 animate-float-slow" />
            <div className="floating-element w-32 h-32 md:w-64 md:h-64 glassmorphism absolute opacity-10 top-[20%] right-[10%] animate-float-reverse" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="container relative z-20 text-white text-center px-4">
        <div className="relative inline-block mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <span className="absolute -top-1 -left-1 inline-flex h-full w-full rounded-md border border-white/20"></span>
          <span className="relative px-6 py-2 text-sm font-medium uppercase tracking-wider text-white/80">
            Somak Banerjee Photography
          </span>
        </div>
        
        <h1 
          ref={textRef}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70 text-glow"
        >
          Capturing Earth's<br />Untold Stories
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          Professional nature photography that transports you to the heart of wilderness
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <Button size="lg" className="text-base group bg-gradient-to-r from-purple-600 to-blue-600 border-0 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-primary/20 hover:scale-105 transform" asChild>
            <a href="#portfolio">
              <span className="relative z-10">View Portfolio</span>
              <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 transform">
            <span className="relative z-10">Book a Session</span>
          </Button>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full animate-scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
