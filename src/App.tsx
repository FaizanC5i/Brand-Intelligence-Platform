import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Overview from "./pages/Overview";
import KnowledgeHub from "./pages/KnowledgeHub";
import AudienceHub from "./pages/AudienceHub";
import MeasurementHub from "./pages/MeasurementHub";
import InsightsHub from "./pages/InsightsHub";

import Intelligence from "./pages/Intelligence";
import NotFound from "./pages/NotFound";
import MarketShareDashboard from "./pages/MarketShareDashboard";
import ConsumerInterestDashboard from "./pages/ConsumerInterestDashboard";
import AIPCDashboard from "./pages/AIPCDashboard";
import GamingDashboard from "./pages/GamingDashboard";
import Simulate from "./pages/Simulate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/knowledge-hub" element={<KnowledgeHub />} />
          <Route path="/hub/audience" element={<AudienceHub />} />
          <Route path="/hub/measurement" element={<MeasurementHub />} />
          <Route path="/hub/insights" element={<InsightsHub />} />
          
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/dashboard/market-share" element={<MarketShareDashboard />} />
          <Route path="/dashboard/consumer-interest" element={<ConsumerInterestDashboard />} />
          <Route path="/dashboard/ai-pc" element={<AIPCDashboard />} />
          <Route path="/dashboard/gaming" element={<GamingDashboard />} />
          <Route path="/simulate" element={<Simulate />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
