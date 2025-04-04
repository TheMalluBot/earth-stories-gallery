
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, LogOut, PenLine, Image, Upload, Layout, 
  Users, Calendar, User, Settings, Mail, BarChart3, Palette, BookOpen
} from 'lucide-react';

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
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-primary" />
                    Blog Posts
                  </CardTitle>
                  <CardDescription>Manage your blog articles</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Create, edit, or delete blog content. Organize your posts by categories.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button size="sm" variant="outline" onClick={() => navigate('/admin/blog')}>
                    Manage Posts
                  </Button>
                  <Button size="sm" onClick={() => navigate('/admin/blog/new')}>
                    <PenLine className="mr-2 h-4 w-4" /> New Post
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Image className="mr-2 h-5 w-5 text-primary" />
                    Portfolio
                  </CardTitle>
                  <CardDescription>Manage your photography portfolio</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Update your showcase photography collections, add new photos and manage categories.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button size="sm" variant="outline" onClick={() => navigate('/admin/portfolio')}>
                    Manage Photos
                  </Button>
                  <Button size="sm" onClick={() => navigate('/admin/portfolio/new')}>
                    <Upload className="mr-2 h-4 w-4" /> Add Photo
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    Workshops
                  </CardTitle>
                  <CardDescription>Manage your upcoming workshops</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Update information about upcoming photography workshops and events.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button size="sm" variant="outline" onClick={() => navigate('/admin/workshops')}>
                    Manage Events
                  </Button>
                  <Button size="sm" onClick={() => navigate('/admin/workshops/new')}>
                    <Calendar className="mr-2 h-4 w-4" /> New Workshop
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">User & Communication</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="mr-2 h-5 w-5 text-primary" />
                    About Section
                  </CardTitle>
                  <CardDescription>Update your profile information</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Edit your biography, experience, equipment details, and post-processing philosophy.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" onClick={() => navigate('/admin/about')}>
                    Edit Profile
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-primary" />
                    Messages
                  </CardTitle>
                  <CardDescription>Manage contact form submissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    View and respond to messages from your contact form and manage newsletter subscribers.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" onClick={() => navigate('/admin/messages')}>
                    View Messages
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" />
                    User Management
                  </CardTitle>
                  <CardDescription>Manage user accounts</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Manage admin users, workshop participants, and permission levels.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" onClick={() => navigate('/admin/users')}>
                    Manage Users
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Website Settings & Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="mr-2 h-5 w-5 text-primary" />
                    General Settings
                  </CardTitle>
                  <CardDescription>Update your website information</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Edit site title, meta data, and contact information. Configure SEO settings.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" onClick={() => navigate('/admin/settings')}>
                    Edit Settings
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="mr-2 h-5 w-5 text-primary" />
                    Design Customization
                  </CardTitle>
                  <CardDescription>Customize your website appearance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Edit layout settings, homepage content, colors, and fonts.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" onClick={() => navigate('/admin/design')}>
                    Customize Design
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                    Analytics
                  </CardTitle>
                  <CardDescription>View website performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Track website traffic, popular content, workshop registrations, and user engagement.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" onClick={() => navigate('/admin/analytics')}>
                    View Analytics
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
