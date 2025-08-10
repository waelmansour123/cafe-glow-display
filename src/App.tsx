// UI Components for notifications and tooltips
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
// React Query for state management and caching
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// React Router for navigation between pages
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Page components
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create a new QueryClient instance for React Query
// This handles caching, background updates, and synchronization
const queryClient = new QueryClient();

/**
 * Main App Component
 * Sets up all the global providers and routing for the application
 */
const App = () => (
  // React Query provider for state management
  <QueryClientProvider client={queryClient}>
    {/* Tooltip provider for accessible tooltips throughout the app */}
    <TooltipProvider>
      {/* Toast notification systems */}
      <Toaster />
      <Sonner />
      {/* React Router for client-side navigation */}
      <BrowserRouter>
        <Routes>
          {/* Main homepage route - shows the menu */}
          <Route path="/" element={<Index />} />
          {/* Catch-all route for 404 errors - MUST be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
