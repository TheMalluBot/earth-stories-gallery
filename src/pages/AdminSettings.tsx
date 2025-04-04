
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AdminSettings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
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
          <h1 className="text-2xl font-bold">General Settings</h1>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" /> Save Changes
        </Button>
      </div>
      
      <div className="flex flex-col items-center justify-center p-12 border rounded-lg bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Settings Panel Coming Soon</h2>
        <p className="text-center text-muted-foreground mb-6">
          This section will allow you to configure site-wide settings, SEO metadata, privacy policies, 
          backups, and other general website configurations.
        </p>
        <Button variant="outline" onClick={() => navigate('/admin')}>
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default AdminSettings;
