
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Save } from 'lucide-react';
import { PortfolioItem, portfolioItems } from '@/components/portfolio/PortfolioData';
import { useToast } from '@/components/ui/use-toast';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = ["nature", "portraits", "events"];

const EditPortfolioItem = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isNewItem = id === 'new';
  
  const [item, setItem] = useState<PortfolioItem>({
    id: Date.now(),
    title: '',
    category: 'nature',
    image: ''
  });

  useEffect(() => {
    if (!isNewItem && id) {
      const itemId = parseInt(id);
      const existingItem = portfolioItems.find(p => p.id === itemId);
      if (existingItem) {
        setItem(existingItem);
      } else {
        toast({
          title: "Item not found",
          description: "The requested portfolio item could not be found.",
          variant: "destructive"
        });
        navigate('/admin/portfolio');
      }
    }
  }, [id, isNewItem, navigate, toast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategoryChange = (value: string) => {
    setItem(prev => ({
      ...prev,
      category: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would save to a database
    // For now, we'll just show a success message
    
    toast({
      title: isNewItem ? "Item created" : "Item updated",
      description: `Your portfolio item "${item.title}" has been ${isNewItem ? 'created' : 'updated'} successfully.`,
    });
    
    navigate('/admin/portfolio');
  };

  return (
    <div className="container max-w-4xl py-6">
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate('/admin/portfolio')}
          className="mr-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <h1 className="text-2xl font-bold">{isNewItem ? 'Add Portfolio Item' : 'Edit Portfolio Item'}</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isNewItem ? 'New Portfolio Item' : 'Edit Portfolio Item'}</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={item.title}
                onChange={handleChange}
                placeholder="Enter item title"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select 
                value={item.category} 
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                name="image"
                value={item.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                required
              />
              {item.image && (
                <div className="mt-2 rounded-md overflow-hidden w-full h-40">
                  <img 
                    src={item.image} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" className="flex items-center">
              <Save className="mr-2 h-4 w-4" />
              {isNewItem ? 'Create Item' : 'Save Changes'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default EditPortfolioItem;
