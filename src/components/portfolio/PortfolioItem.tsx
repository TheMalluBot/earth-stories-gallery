
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { PortfolioItem } from './PortfolioData';

interface PortfolioItemProps {
  item: PortfolioItem;
  onClick: () => void;
}

const PortfolioItemComponent = React.forwardRef<HTMLDivElement, PortfolioItemProps>(
  ({ item, onClick }, ref) => {
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
  }
);

PortfolioItemComponent.displayName = "PortfolioItemComponent";

export default PortfolioItemComponent;
