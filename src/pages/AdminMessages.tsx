
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
import { ArrowLeft, Search, Mail, Eye, Trash } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";

// Define the Message interface
interface Message {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}

// Define the Subscriber interface
interface Subscriber {
  id: number;
  email: string;
  date: string;
  status: 'active' | 'unsubscribed';
}

// Sample data - in a real app, this would come from an API or database
const messageData: Message[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    subject: "Workshop Inquiry",
    message: "Hello, I'm interested in your upcoming landscape photography workshop. Could you provide more details about the itinerary and what equipment I should bring? Thank you!",
    date: "2025-04-01T14:32:00",
    read: false
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    subject: "Print Purchase",
    message: "Hi there, I saw your mountain sunrise photo in the portfolio and I'm interested in purchasing a print. What sizes do you offer and what are the prices? Thanks!",
    date: "2025-03-28T09:15:00",
    read: true
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "m.chen@example.com",
    subject: "Collaboration Opportunity",
    message: "Hello, I'm a travel blogger and I'm planning a trip to Yellowstone this summer. I'm looking for a photographer to collaborate with for some content. Would you be interested in discussing this opportunity?",
    date: "2025-03-25T16:45:00",
    read: true
  },
  {
    id: 4,
    name: "Emily Wilson",
    email: "emily.w@example.com",
    subject: "Private Lesson Request",
    message: "Hi, I'm a beginner photographer looking to improve my skills. Do you offer private lessons or one-on-one mentoring? I'm particularly interested in learning more about composition and lighting techniques.",
    date: "2025-03-20T11:22:00",
    read: false
  }
];

// Sample subscriber data
const subscriberData: Subscriber[] = [
  {
    id: 1,
    email: "john.smith@example.com",
    date: "2025-01-15",
    status: "active"
  },
  {
    id: 2,
    email: "sarah.j@example.com",
    date: "2025-02-03",
    status: "active"
  },
  {
    id: 3,
    email: "m.chen@example.com",
    date: "2025-02-28",
    status: "active"
  },
  {
    id: 4,
    email: "peter.parker@example.com",
    date: "2025-01-10",
    status: "unsubscribed"
  },
  {
    id: 5,
    email: "jane.doe@example.com",
    date: "2025-03-05",
    status: "active"
  }
];

const AdminMessages = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [readFilter, setReadFilter] = useState<string>('');
  const [activeTab, setActiveTab] = useState('messages');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false);
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus !== 'true') {
      navigate('/login');
    } else {
      setIsAuthenticated(true);
      // Load messages and subscribers
      setMessages(messageData);
      setSubscribers(subscriberData);
    }
  }, [navigate]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleViewMessage = (message: Message) => {
    setSelectedMessage(message);
    setIsMessageDialogOpen(true);
    
    // Mark as read if it wasn't already
    if (!message.read) {
      const updatedMessages = messages.map(m => 
        m.id === message.id ? { ...m, read: true } : m
      );
      setMessages(updatedMessages);
    }
  };

  const handleDeleteMessage = (id: number) => {
    setMessages(messages.filter(message => message.id !== id));
    toast({
      title: "Message deleted",
      description: "The message has been deleted successfully.",
    });
  };

  const handleDeleteSubscriber = (id: number) => {
    setSubscribers(subscribers.filter(subscriber => subscriber.id !== id));
    toast({
      title: "Subscriber removed",
      description: "The subscriber has been removed from your list.",
    });
  };

  const filteredMessages = messages.filter(message => {
    const matchesSearch = 
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesReadStatus = readFilter === '' ? true : 
      (readFilter === 'read' ? message.read : !message.read);
    
    return matchesSearch && matchesReadStatus;
  });

  const filteredSubscribers = subscribers.filter(subscriber => 
    subscriber.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <h1 className="text-2xl font-bold">Messages & Subscribers</h1>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="messages">Contact Messages</TabsTrigger>
          <TabsTrigger value="subscribers">Newsletter Subscribers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="messages">
          <div className="flex justify-between items-center mb-6 gap-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search messages..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-48">
              <Select 
                value={readFilter} 
                onValueChange={setReadFilter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All messages" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All messages</SelectItem>
                  <SelectItem value="unread">Unread</SelectItem>
                  <SelectItem value="read">Read</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[30px]">Status</TableHead>
                  <TableHead>From</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMessages.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                      {searchTerm || readFilter ? "No messages found matching your criteria." : "No messages yet."}
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredMessages.map((message) => (
                    <TableRow key={message.id} className={!message.read ? "bg-blue-50" : ""}>
                      <TableCell>
                        {!message.read && (
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800">New</Badge>
                        )}
                      </TableCell>
                      <TableCell className="font-medium">
                        {message.name}<br />
                        <span className="text-sm text-muted-foreground">{message.email}</span>
                      </TableCell>
                      <TableCell>{message.subject}</TableCell>
                      <TableCell>{formatDate(message.date)}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon" onClick={() => handleViewMessage(message)}>
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDeleteMessage(message.id)}>
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
        </TabsContent>
        
        <TabsContent value="subscribers">
          <div className="flex justify-between items-center mb-6 gap-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search subscribers..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Mail className="mr-2 h-4 w-4" /> Send Newsletter
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Date Subscribed</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSubscribers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                      {searchTerm ? "No subscribers found matching your search." : "No subscribers yet."}
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredSubscribers.map((subscriber) => (
                    <TableRow key={subscriber.id}>
                      <TableCell className="font-medium">{subscriber.email}</TableCell>
                      <TableCell>{formatDate(subscriber.date)}</TableCell>
                      <TableCell>
                        <Badge variant={subscriber.status === 'active' ? 'default' : 'secondary'}>
                          {subscriber.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteSubscriber(subscriber.id)}>
                          <Trash className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>

      {/* Message View Dialog */}
      <Dialog open={isMessageDialogOpen} onOpenChange={setIsMessageDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{selectedMessage?.subject}</DialogTitle>
            <DialogDescription>
              From: {selectedMessage?.name} ({selectedMessage?.email})
              <br />
              Date: {selectedMessage && formatDate(selectedMessage.date)}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 border-y">
            <p className="whitespace-pre-line">{selectedMessage?.message}</p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsMessageDialogOpen(false)}>
              Close
            </Button>
            <Button onClick={() => window.location.href = `mailto:${selectedMessage?.email}`}>
              <Mail className="mr-2 h-4 w-4" /> Reply
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminMessages;
