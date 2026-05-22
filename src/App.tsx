import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import ConceptChapter from "./pages/ConceptChapter";
import ConceptLunora from "./pages/ConceptLunora";
import ConceptAntiOverwork from "./pages/ConceptAntiOverwork";
import Insight from "./pages/Insight";
import InsightPost from "./pages/InsightPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/about" element={<Page2 />} />
          <Route path="/work" element={<Page3 />} />
          <Route path="/concept/chapter" element={<ConceptChapter />} />
          <Route path="/concept/lunora" element={<ConceptLunora />} />
          <Route path="/concept/anti-overwork" element={<ConceptAntiOverwork />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/insight/:slug" element={<InsightPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
