
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
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black via-primary/50 to-black z-0"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djIyaDJ2LTIyaDIydi0ySDM4VjEwaC0ydjIySDEwdjJoMjZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 z-[1]"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {mounted && (
          <>
            {/* Colored orbs */}
            <div className="floating-element w-32 h-32 md:w-48 md:h-48 rounded-full bg-blue-500/20 backdrop-blur-3xl absolute -top-10 -left-10 animate-float-slow" />
            <div className="floating-element w-40 h-40 md:w-56 md:h-56 rounded-full bg-purple-500/20 backdrop-blur-3xl absolute bottom-20 -right-20 animate-float-reverse" />
            <div className="floating-element w-24 h-24 md:w-32 md:h-32 rounded-full bg-green-500/20 backdrop-blur-3xl absolute top-1/3 right-10 animate-float" />
            
            {/* Glowing orbs */}
            <div className="floating-element w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/80 blur-sm absolute top-1/4 left-1/4 animate-pulse" />
            <div className="floating-element w-4 h-4 md:w-6 md:h-6 rounded-full bg-white/80 blur-sm absolute bottom-1/3 right-1/3 animate-pulse" />
            <div className="floating-element w-5 h-5 md:w-7 md:h-7 rounded-full bg-white/80 blur-sm absolute top-2/3 left-1/3 animate-pulse" />
            
            {/* Grid-like elements */}
            <div className="floating-element w-40 h-40 md:w-64 md:h-64 border border-white/10 rounded-lg absolute top-1/4 left-1/3 rotate-12 backdrop-blur-sm animate-float-slow-reverse" />
            <div className="floating-element w-32 h-32 md:w-48 md:h-48 border border-white/10 rounded-lg absolute bottom-1/4 right-1/3 -rotate-6 backdrop-blur-sm animate-float-slow" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="container relative z-20 text-white text-center px-4">
        <div className="relative animate-fade-in inline-block mb-8">
          <span className="absolute -top-1 -left-1 inline-flex h-full w-full rounded-md border border-white/20"></span>
          <span className="relative px-6 py-2 text-sm font-medium uppercase tracking-wider text-white/80">
            Somak Banerjee Photography
          </span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
          Capturing Earth's<br />Untold Stories
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Professional nature photography that transports you to the heart of wilderness
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="text-base group bg-gradient-to-r from-purple-500 to-blue-500 border-0 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-primary/20" asChild>
            <a href="#portfolio">
              <span className="relative z-10">View Portfolio</span>
              <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300">
            <span className="relative z-10">Book a Session</span>
          </Button>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>

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
