
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Edit, Trash, Plus, ArrowLeft, Search, Calendar } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the Workshop interface
interface Workshop {
  id: number;
  title: string;
  date: string;
  location: string;
  price: string;
  capacity: number;
  status: 'upcoming' | 'in-progress' | 'completed';
  registrations: number;
}

// Sample data - in a real app, this would come from an API or database
const workshopData: Workshop[] = [
  {
    id: 1,
    title: "Landscape Photography Basics",
    date: "2025-05-15",
    location: "Yosemite National Park, CA",
    price: "$299",
    capacity: 15,
    status: "upcoming",
    registrations: 8
  },
  {
    id: 2,
    title: "Portrait Photography Masterclass",
    date: "2025-06-10",
    location: "San Francisco, CA",
    price: "$249",
    capacity: 12,
    status: "upcoming",
    registrations: 5
  },
  {
    id: 3,
    title: "Night Sky Photography",
    date: "2025-07-20",
    location: "Joshua Tree National Park, CA",
    price: "$349",
    capacity: 10,
    status: "upcoming",
    registrations: 10
  },
  {
    id: 4,
    title: "Wildlife Photography Expedition",
    date: "2025-04-01",
    location: "Yellowstone National Park, WY",
    price: "$499",
    capacity: 8,
    status: "completed",
    registrations: 8
  }
];

const AdminWorkshops = () => {
  const navigate = useNavigate();
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus !== 'true') {
      navigate('/login');
    } else {
      setIsAuthenticated(true);
      // Load workshops
      setWorkshops(workshopData);
    }
  }, [navigate]);

  const handleEdit = (id: number) => {
    navigate(`/admin/workshops/${id}`);
  };

  const handleDelete = (id: number) => {
    // In a real app, this would delete from a database
    // For now, just filter the local state
    const workshopToDelete = workshops.find(workshop => workshop.id === id);
    
    if (workshopToDelete) {
      setWorkshops(workshops.filter(workshop => workshop.id !== id));
      
      toast({
        title: "Workshop deleted",
        description: `"${workshopToDelete.title}" has been deleted.`,
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'in-progress':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filteredWorkshops = workshops.filter(workshop => {
    const matchesSearch = 
      workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workshop.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter ? workshop.status === statusFilter : true;
    
    return matchesSearch && matchesStatus;
  });

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
          <h1 className="text-2xl font-bold">Workshop Management</h1>
        </div>
        <Button onClick={() => navigate('/admin/workshops/new')}>
          <Plus className="mr-2 h-4 w-4" /> New Workshop
        </Button>
      </div>

      <div className="flex justify-between items-center mb-6 gap-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search workshops..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-48">
          <Select 
            value={statusFilter} 
            onValueChange={setStatusFilter}
          >
            <SelectTrigger>
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All statuses</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Registrations</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredWorkshops.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  {searchTerm || statusFilter ? "No workshops found matching your criteria." : "No workshops yet."}
                </TableCell>
              </TableRow>
            ) : (
              filteredWorkshops.map((workshop) => (
                <TableRow key={workshop.id}>
                  <TableCell className="font-medium">{workshop.title}</TableCell>
                  <TableCell>{formatDate(workshop.date)}</TableCell>
                  <TableCell>{workshop.location}</TableCell>
                  <TableCell>{workshop.price}</TableCell>
                  <TableCell>
                    {workshop.registrations}/{workshop.capacity}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(workshop.status)}>
                      {workshop.status.charAt(0).toUpperCase() + workshop.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(workshop.id)}>
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(workshop.id)}>
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminWorkshops;
