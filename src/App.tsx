import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import RealTimeConversion from "./pages/RealTimeConversion";
import MarketAnalysis from "./pages/MarketAnalysis";
import GlobalCoverage from "./pages/GlobalCoverage";
import FastPerformance from "./pages/FastPerformance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/real-time-conversion" element={<RealTimeConversion />} />
          <Route path="/market-analysis" element={<MarketAnalysis />} />
          <Route path="/global-coverage" element={<GlobalCoverage />} />
          <Route path="/fast-performance" element={<FastPerformance />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;