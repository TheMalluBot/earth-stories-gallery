
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AdminBlog from "./pages/AdminBlog";
import AdminPortfolio from "./pages/AdminPortfolio";
import EditBlogPost from "./components/admin/EditBlogPost";
import EditPortfolioItem from "./components/admin/EditPortfolioItem";
import AdminWorkshops from "./pages/AdminWorkshops";
import AdminAbout from "./pages/AdminAbout";
import AdminMessages from "./pages/AdminMessages";
import AdminUsers from "./pages/AdminUsers";
import AdminSettings from "./pages/AdminSettings";
import AdminDesign from "./pages/AdminDesign";
import AdminAnalytics from "./pages/AdminAnalytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          
          {/* Blog Management */}
          <Route path="/admin/blog" element={<AdminBlog />} />
          <Route path="/admin/blog/:id" element={<EditBlogPost />} />
          
          {/* Portfolio Management */}
          <Route path="/admin/portfolio" element={<AdminPortfolio />} />
          <Route path="/admin/portfolio/:id" element={<EditPortfolioItem />} />
          
          {/* Workshop Management */}
          <Route path="/admin/workshops" element={<AdminWorkshops />} />
          <Route path="/admin/workshops/:id" element={<EditBlogPost />} />
          
          {/* About & Communication */}
          <Route path="/admin/about" element={<AdminAbout />} />
          <Route path="/admin/messages" element={<AdminMessages />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          
          {/* Settings & Analytics */}
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/design" element={<AdminDesign />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
