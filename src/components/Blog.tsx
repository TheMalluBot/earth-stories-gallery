
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Mastering Manual Mode: A Comprehensive Guide',
    excerpt: 'Learn how to take full control of your camera settings for perfect exposure in any situation.',
    date: 'May 15, 2023',
    category: 'Camera Gear',
    image: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '8 min read'
  },
  {
    id: 2,
    title: 'Top Lenses for Nature Photography in 2024',
    excerpt: 'Discover the best lenses for capturing wildlife, landscapes, and macro nature photography.',
    date: 'April 22, 2023',
    category: 'Camera Gear',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '10 min read'
  },
  {
    id: 3,
    title: 'Composition Techniques for Stunning Landscapes',
    excerpt: 'Elevate your landscape photography with these essential composition techniques and principles.',
    date: 'March 8, 2023',
    category: 'Composition',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Post-Processing Tips for Nature Photography',
    excerpt: 'Learn how to enhance your nature photos while maintaining authenticity and natural beauty.',
    date: 'February 17, 2023',
    category: 'Editing Tips',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '12 min read'
  },
  {
    id: 5,
    title: 'Wildlife Photography Ethics: Respect and Responsibility',
    excerpt: 'Understanding the importance of ethical practices when photographing wild animals in their natural habitats.',
    date: 'January 25, 2024',
    category: 'Ethics',
    image: 'https://images.unsplash.com/photo-1534535498441-29391bdc1981?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '9 min read'
  },
  {
    id: 6,
    title: 'Capturing Bird Photography: Tips and Techniques',
    excerpt: 'Expert advice for photographing birds in flight and creating stunning avian portraits.',
    date: 'December 12, 2023',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1621396828584-c1eed2e664ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '7 min read'
  },
  {
    id: 7,
    title: 'Night Sky Photography: Capturing the Milky Way',
    excerpt: 'A complete guide to photographing celestial objects and creating breathtaking astro-landscapes.',
    date: 'November 5, 2023',
    category: 'Night Photography',
    image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '11 min read'
  },
  {
    id: 8,
    title: 'Photography in Extreme Weather Conditions',
    excerpt: 'How to protect your gear and capture amazing images in rain, snow, extreme heat, and other challenging environments.',
    date: 'October 19, 2023',
    category: 'Field Techniques',
    image: 'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '8 min read'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Learning Hub</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover tips, tutorials, and insights to enhance your photography skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-primary font-medium px-2 py-1 bg-primary/10 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="font-serif text-lg">{post.title}</CardTitle>
                <CardDescription className="text-sm">{post.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="px-0 hover:bg-transparent hover:text-primary">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
            <h3 className="text-xl font-serif font-bold mb-2">Nature Photography eBook</h3>
            <p className="text-muted-foreground mb-0">
              Download our comprehensive guide to capturing stunning nature photographs in any environment.
            </p>
          </div>
          <Button size="lg">Get Your Free Copy</Button>
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            Browse All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
