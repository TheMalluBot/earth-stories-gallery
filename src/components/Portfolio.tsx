
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const portfolioItems = [
  {
    id: 1,
    title: 'Stormy Sky',
    category: 'nature',
    image: '/lovable-uploads/0ea14e2d-8084-4a92-ad8a-8abea5e4d574.png',
  },
  {
    id: 2,
    title: 'Vibrant Clouds',
    category: 'nature',
    image: '/lovable-uploads/9aca5a7c-2d9a-49d3-b32d-7fd7b81f81be.png',
  },
  {
    id: 3,
    title: 'Evening Sky',
    category: 'nature',
    image: '/lovable-uploads/ee00ff11-f200-4e53-a4b4-ba1c0bc9e1a9.png',
  },
  {
    id: 4,
    title: 'Dramatic Clouds',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Portrait in Window',
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Urban Portrait',
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    title: 'Window Light',
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1498936178812-4b2e558d2937?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    title: 'Natural Light Portrait',
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    title: 'Corporate Event',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 10,
    title: 'Wedding Celebration',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 11,
    title: 'Music Festival',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 12,
    title: 'Conference',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
  },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<null | { id: number; image: string; title: string }>(null);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my finest photographs across various categories
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mx-auto mb-8 flex justify-center">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="nature">Nature</TabsTrigger>
            <TabsTrigger value="portraits">Portraits</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {portfolioItems.map((item) => (
                <PortfolioItem 
                  key={item.id} 
                  item={item} 
                  onClick={() => setSelectedImage(item)} 
                />
              ))}
            </div>
          </TabsContent>

          {['nature', 'portraits', 'events'].map((category) => (
            <TabsContent key={category} value={category} className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {portfolioItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <PortfolioItem 
                      key={item.id} 
                      item={item} 
                      onClick={() => setSelectedImage(item)} 
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Lightbox */}
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

const PortfolioItem = ({ 
  item, 
  onClick 
}: { 
  item: { id: number; title: string; category: string; image: string }; 
  onClick: () => void 
}) => {
  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300" onClick={onClick}>
      <CardContent className="p-0 relative">
        <div className="aspect-square overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
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
};

export default Portfolio;
