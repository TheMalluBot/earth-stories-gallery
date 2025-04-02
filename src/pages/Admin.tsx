
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Edit, Trash, Plus, LogOut } from 'lucide-react';

const Admin = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus !== 'true') {
      navigate('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  if (!isAuthenticated) {
    return <div>Checking authentication...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={() => navigate('/')}>
              <ArrowLeft className="mr-2 h-4 w-4" /> View Site
            </Button>
            <Button variant="destructive" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Content Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Blog Posts</CardTitle>
                  <CardDescription>Manage your blog articles</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    You have 8 published blog posts. Create, edit, or delete blog content.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button size="sm" variant="outline">
                    <Edit className="mr-2 h-4 w-4" /> Edit Posts
                  </Button>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" /> New Post
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio</CardTitle>
                  <CardDescription>Manage your photography portfolio</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Update your showcase photography collections and categories.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button size="sm" variant="outline">
                    <Edit className="mr-2 h-4 w-4" /> Edit Portfolio
                  </Button>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" /> Add Photos
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Workshops</CardTitle>
                  <CardDescription>Manage your upcoming workshops</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Update information about upcoming photography workshops and events.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button size="sm" variant="outline">
                    <Edit className="mr-2 h-4 w-4" /> Edit Events
                  </Button>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" /> New Workshop
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Website Settings</h2>
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Update your website information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium">Profile Information</h3>
                    <p className="text-sm text-muted-foreground">
                      Update your bio, contact information, and professional details.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">SEO Settings</h3>
                    <p className="text-sm text-muted-foreground">
                      Manage SEO metadata, keywords, and site descriptions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Email Configuration</h3>
                    <p className="text-sm text-muted-foreground">
                      Update email templates and notification settings.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  Manage Settings
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
