
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
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
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="container relative z-20 text-white text-center px-4">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
          Capturing Earth's<br />Untold Stories
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Professional nature photography that transports you to the heart of wilderness
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="text-base" asChild>
            <a href="#portfolio">
              View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base bg-transparent border-white text-white hover:bg-white/10">
            Book a Session
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
