
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BlogPost } from './BlogData';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Card className="blog-card overflow-hidden h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-5 flex-grow flex flex-col">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{post.date}</span>
          <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        <h3 className="text-xl font-serif font-medium mb-2 blog-post-title">{post.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{post.excerpt}</p>
        <Button variant="outline" className="mt-auto self-start">
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
