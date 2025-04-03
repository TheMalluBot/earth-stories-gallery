
export interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Natural Light Photography",
    date: "April 15, 2023",
    category: "Technique",
    excerpt: "Learn how to use natural light to create stunning, atmospheric photographs in any setting.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Essential Gear for Wildlife Photography",
    date: "March 23, 2023",
    category: "Equipment",
    excerpt: "Discover the must-have gear and equipment for capturing amazing wildlife moments.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Creating a Memorable Portrait",
    date: "February 12, 2023",
    category: "Portraits",
    excerpt: "Tips and techniques for connecting with your subjects to create powerful, emotive portraits.",
    image: "https://images.unsplash.com/photo-1567397384254-fad9eb54becc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Advanced Composition Techniques",
    date: "January 28, 2023",
    category: "Composition",
    excerpt: "Take your photography to the next level with these advanced composition strategies.",
    image: "https://images.unsplash.com/photo-1618339221121-1642d466c281?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];
