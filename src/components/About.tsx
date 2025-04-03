
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 about-content">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 section-heading">About the Photographer</h2>
            
            <p className="mb-4 text-muted-foreground about-text">
              Hello, I'm Somak Banerjee, a professional nature and wildlife photographer with over 15 years of experience capturing Earth's most remarkable moments. My journey began with a simple point-and-shoot camera and a profound fascination with the natural world.
            </p>
            
            <p className="mb-6 text-muted-foreground about-text">
              My photography philosophy centers on patience, presence, and respect for nature. I believe that the most compelling images emerge when we observe without interference, allowing natural behaviors and lighting to create authentic visual stories.
            </p>
            
            <div className="mb-6 grid grid-cols-2 gap-4 about-stats-container">
              <div className="bg-muted/30 p-4 rounded-lg text-center about-stat">
                <p className="text-3xl font-bold text-primary mb-1 stat-number">15</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg text-center about-stat">
                <p className="text-3xl font-bold text-primary mb-1 stat-number">50</p>
                <p className="text-sm text-muted-foreground">Locations Explored</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg text-center about-stat">
                <p className="text-3xl font-bold text-primary mb-1 stat-number">12</p>
                <p className="text-sm text-muted-foreground">Photography Awards</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg text-center about-stat">
                <p className="text-3xl font-bold text-primary mb-1 stat-number">120</p>
                <p className="text-sm text-muted-foreground">Workshops Conducted</p>
              </div>
            </div>
            
            <Button className="about-button">Learn More About Me</Button>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 about-image-grid">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg about-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Wildlife photography" 
                  className="rounded-lg w-full object-cover h-48 md:h-64 about-image transition-all duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg about-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Landscape photography" 
                  className="rounded-lg w-full object-cover h-64 md:h-80 about-image transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="overflow-hidden rounded-lg about-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Forest photography" 
                  className="rounded-lg w-full object-cover h-64 md:h-80 about-image transition-all duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg about-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Mountain photography" 
                  className="rounded-lg w-full object-cover h-48 md:h-64 about-image transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-16" />

        <div className="text-center mb-10">
          <h3 className="text-2xl font-serif font-bold mb-4 section-heading behind-scenes-title">Behind the Scenes</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto behind-scenes-description">
            Get a glimpse into my creative process and expedition preparations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 behind-scenes-cards">
          <div className="bg-muted/30 p-6 rounded-lg behind-scenes-card">
            <h4 className="font-serif font-semibold mb-2 behind-scenes-card-title">My Equipment</h4>
            <p className="text-sm text-muted-foreground mb-4 behind-scenes-card-text">
              I use a combination of professional-grade DSLRs and mirrorless cameras with specialized lenses for different scenarios - from ultra-wide landscape shots to super-telephoto wildlife photography.
            </p>
            <Button variant="outline" size="sm" className="w-full">View My Gear</Button>
          </div>
          
          <div className="bg-muted/30 p-6 rounded-lg behind-scenes-card">
            <h4 className="font-serif font-semibold mb-2 behind-scenes-card-title">Expedition Planning</h4>
            <p className="text-sm text-muted-foreground mb-4 behind-scenes-card-text">
              Each photography journey requires meticulous planning - researching locations, understanding weather patterns, wildlife behaviors, and preparing the right equipment for specific conditions.
            </p>
            <Button variant="outline" size="sm" className="w-full">My Process</Button>
          </div>
          
          <div className="bg-muted/30 p-6 rounded-lg behind-scenes-card">
            <h4 className="font-serif font-semibold mb-2 behind-scenes-card-title">Post-Processing</h4>
            <p className="text-sm text-muted-foreground mb-4 behind-scenes-card-text">
              My editing approach is focused on enhancing what nature already provides. I believe in minimal adjustments that preserve authenticity while bringing out the full potential of each image.
            </p>
            <Button variant="outline" size="sm" className="w-full">Editing Philosophy</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
