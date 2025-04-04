
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Save } from 'lucide-react';
import { BlogPost, blogPosts } from '@/components/blog/BlogData';
import { useToast } from '@/components/ui/use-toast';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';

const EditBlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isNewPost = id === 'new';
  
  const [post, setPost] = useState<BlogPost>({
    id: Date.now(),
    title: '',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    category: '',
    excerpt: '',
    image: ''
  });

  useEffect(() => {
    if (!isNewPost && id) {
      const postId = parseInt(id);
      const existingPost = blogPosts.find(p => p.id === postId);
      if (existingPost) {
        setPost(existingPost);
      } else {
        toast({
          title: "Post not found",
          description: "The requested blog post could not be found.",
          variant: "destructive"
        });
        navigate('/admin/blog');
      }
    }
  }, [id, isNewPost, navigate, toast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would save to a database
    // For now, we'll just show a success message
    
    toast({
      title: isNewPost ? "Post created" : "Post updated",
      description: `Your blog post "${post.title}" has been ${isNewPost ? 'created' : 'updated'} successfully.`,
    });
    
    navigate('/admin/blog');
  };

  return (
    <div className="container max-w-4xl py-6">
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate('/admin/blog')}
          className="mr-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <h1 className="text-2xl font-bold">{isNewPost ? 'Create New Post' : 'Edit Post'}</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isNewPost ? 'New Blog Post' : 'Edit Blog Post'}</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={post.title}
                onChange={handleChange}
                placeholder="Enter post title"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                name="category"
                value={post.category}
                onChange={handleChange}
                placeholder="E.g., Technique, Equipment, Portraits"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                name="image"
                value={post.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                required
              />
              {post.image && (
                <div className="mt-2 rounded-md overflow-hidden w-full h-40">
                  <img 
                    src={post.image} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                value={post.excerpt}
                onChange={handleChange}
                placeholder="Enter a brief description of the post"
                required
                rows={3}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" className="flex items-center">
              <Save className="mr-2 h-4 w-4" />
              {isNewPost ? 'Create Post' : 'Save Changes'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default EditBlogPost;
