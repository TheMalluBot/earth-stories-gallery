
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { blogPosts } from './BlogData';
import BlogCard from './BlogCard';
import { initBlogAnimations } from './BlogAnimations';

const Blog = () => {
  const blogSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initialize animations when the component mounts
    if (window.gsap && window.ScrollTrigger) {
      initBlogAnimations(blogSectionRef);
    } else {
      // If GSAP is not loaded yet, set up a listener for when it loads
      const checkGSAP = setInterval(() => {
        if (window.gsap && window.ScrollTrigger) {
          clearInterval(checkGSAP);
          initBlogAnimations(blogSectionRef);
        }
      }, 100);
      
      // Clean up interval on component unmount
      return () => clearInterval(checkGSAP);
    }
  }, []);

  return (
    <section id="blog" ref={blogSectionRef} className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="blog-title section-heading text-3xl md:text-4xl font-serif font-bold mb-4">From My Blog</h2>
          <p className="blog-subtitle text-muted-foreground max-w-2xl mx-auto">
            Photography insights, tips, and stories from behind the lens
          </p>
        </div>
        
        <div className="blog-carousel relative">
          <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="mx-auto">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
