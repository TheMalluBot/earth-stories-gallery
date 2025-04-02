
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80")',
          filter: 'brightness(0.7)'
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {mounted && (
          <>
            <div className="floating-element w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 backdrop-blur-xl absolute top-1/4 left-1/4 animate-float-slow" />
            <div className="floating-element w-16 h-16 md:w-24 md:h-24 rounded-full bg-orange-500/10 backdrop-blur-xl absolute top-3/4 left-1/3 animate-float" />
            <div className="floating-element w-20 h-20 md:w-28 md:h-28 rounded-full bg-blue-500/10 backdrop-blur-xl absolute top-1/3 right-1/4 animate-float-reverse" />
            <div className="floating-element w-12 h-12 md:w-20 md:h-20 rounded-full bg-green-500/10 backdrop-blur-xl absolute bottom-1/4 right-1/3 animate-float-slow-reverse" />
            
            <div className="floating-element w-32 h-32 md:w-40 md:h-40 rounded-md rotate-45 bg-purple-500/5 backdrop-blur-sm absolute -top-10 -left-10 animate-float-slow" />
            <div className="floating-element w-36 h-36 md:w-48 md:h-48 rounded-md rotate-12 bg-yellow-500/5 backdrop-blur-sm absolute -bottom-20 -right-20 animate-float-reverse" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="container relative z-20 text-white text-center px-4">
        <h1 className="hero-title font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Capturing Earth's<br />Untold Stories
        </h1>
        
        <p className="hero-description mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Professional nature photography that transports you to the heart of wilderness
        </p>
        
        <div className="hero-buttons mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="text-base group relative overflow-hidden" asChild>
            <a href="#portfolio">
              <span className="relative z-10">View Portfolio</span>
              <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base bg-transparent border-white text-white hover:bg-white/10 group relative overflow-hidden">
            <span className="relative z-10">Book a Session</span>
            <span className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
