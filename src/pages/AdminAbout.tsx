
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

interface AboutFormValues {
  bio: string;
  experience: string;
  yearsExperience: string;
  locationsExplored: string;
  photosTaken: string;
  cameraBrand: string;
  lenses: string;
  accessories: string;
  expeditionPlanning: string;
  postProcessing: string;
}

const defaultValues: AboutFormValues = {
  bio: "I'm a passionate photographer with a love for capturing the beauty of the natural world. My journey into photography began over 10 years ago, and I've been exploring landscapes and wildlife ever since.",
  experience: "I specialize in landscape and wildlife photography, with a particular focus on remote wilderness areas. My work has been featured in National Geographic, Outdoor Photographer, and several international exhibitions.",
  yearsExperience: "10",
  locationsExplored: "42",
  photosTaken: "150000",
  cameraBrand: "Canon EOS R5, Sony A7R IV",
  lenses: "Canon RF 15-35mm f/2.8L, Canon RF 70-200mm f/2.8L, Sony FE 24-70mm f/2.8 GM",
  accessories: "Gitzo GT3543XLS tripod, Lee filter system, DJI Mavic 3 drone",
  expeditionPlanning: "My approach to expedition planning involves extensive research on locations, seasonal conditions, and wildlife patterns. I typically spend weeks preparing for major photography trips.",
  postProcessing: "I use Adobe Lightroom and Photoshop for all my editing work. My philosophy is to enhance rather than manipulate - I aim to represent the scene as I experienced it, with subtle adjustments to highlight the natural beauty."
};

const AdminAbout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("bio");
  
  const form = useForm<AboutFormValues>({
    defaultValues
  });

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus !== 'true') {
      navigate('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const onSubmit = (data: AboutFormValues) => {
    console.log(data);
    // In a real app, this would save to a database or API
    toast({
      title: "Changes saved",
      description: "Your profile information has been updated successfully.",
    });
  };

  if (!isAuthenticated) {
    return <div>Checking authentication...</div>;
  }

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/admin')}
            className="mr-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Button>
          <h1 className="text-2xl font-bold">About Section Management</h1>
        </div>
        <Button onClick={form.handleSubmit(onSubmit)}>
          <Save className="mr-2 h-4 w-4" /> Save Changes
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="bio">Biography</TabsTrigger>
          <TabsTrigger value="stats">Stats</TabsTrigger>
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
          <TabsTrigger value="expedition">Expedition</TabsTrigger>
          <TabsTrigger value="processing">Post-Processing</TabsTrigger>
        </TabsList>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <TabsContent value="bio" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Biography</CardTitle>
                  <CardDescription>
                    Update your photographer biography and professional experience.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Personal Bio</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Enter your personal biography..." 
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          A brief introduction about yourself and your photography journey.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Professional Experience</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your professional photography experience..." 
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Highlight your specialization, notable projects, and achievements.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="stats" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Statistics</CardTitle>
                  <CardDescription>
                    Showcase impressive numbers about your photography journey.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="yearsExperience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Years of Experience</FormLabel>
                          <FormControl>
                            <Input type="text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="locationsExplored"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Locations Explored</FormLabel>
                          <FormControl>
                            <Input type="text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="photosTaken"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Photos Taken</FormLabel>
                          <FormControl>
                            <Input type="text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="equipment" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Equipment</CardTitle>
                  <CardDescription>
                    Share details about the photography gear you use.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="cameraBrand"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Camera Bodies</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="List your camera bodies..." 
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Camera bodies you currently use.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lenses"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Lenses</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="List your lenses..." 
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Lenses in your photography kit.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="accessories"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Accessories</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="List your accessories..." 
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Tripods, filters, drones, and other accessories.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="expedition" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Expedition Planning</CardTitle>
                  <CardDescription>
                    Share your approach to planning photography expeditions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FormField
                    control={form.control}
                    name="expeditionPlanning"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your expedition planning process..." 
                            className="min-h-[200px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Share your process for planning expeditions, including research, preparation, and execution.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="processing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Post-Processing</CardTitle>
                  <CardDescription>
                    Share your photo editing philosophy and techniques.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FormField
                    control={form.control}
                    name="postProcessing"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your post-processing approach..." 
                            className="min-h-[200px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Explain your editing software, workflow, and philosophy toward post-processing.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </form>
        </Form>
      </Tabs>
    </div>
  );
};

export default AdminAbout;
