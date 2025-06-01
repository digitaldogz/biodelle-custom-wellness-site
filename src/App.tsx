
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AntiIdadeAvancado from "./pages/AntiIdadeAvancado";
import PerformanceEsportiva from "./pages/PerformanceEsportiva";
import BemEstarFeminino from "./pages/BemEstarFeminino";
import LinhaCapilar from "./pages/LinhaCapilar";
import SuporteImunidade from "./pages/SuporteImunidade";
import LinhaKids from "./pages/LinhaKids";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/anti-idade-avancado" element={<AntiIdadeAvancado />} />
          <Route path="/performance-esportiva" element={<PerformanceEsportiva />} />
          <Route path="/bem-estar-feminino" element={<BemEstarFeminino />} />
          <Route path="/linha-capilar" element={<LinhaCapilar />} />
          <Route path="/suporte-imunidade" element={<SuporteImunidade />} />
          <Route path="/linha-kids" element={<LinhaKids />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
