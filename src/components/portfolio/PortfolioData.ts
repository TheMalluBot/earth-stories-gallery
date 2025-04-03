
export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Mountain Sunrise',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Forest Pathway',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'River Valley',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Deer in Forest',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Business Portrait',
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Creative Portrait',
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    title: 'Wedding Ceremony',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    title: 'Corporate Event',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];
