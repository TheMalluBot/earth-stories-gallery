
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Plus } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AdminUsers = () => {
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
          <h1 className="text-2xl font-bold">User Management</h1>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add User
        </Button>
      </div>
      
      <div className="flex flex-col items-center justify-center p-12 border rounded-lg bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">User Management Coming Soon</h2>
        <p className="text-center text-muted-foreground mb-6">
          This section will allow you to manage administrator accounts and workshop participants, 
          set permissions, and handle user access to the system.
        </p>
        <Button variant="outline" onClick={() => navigate('/admin')}>
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default AdminUsers;
