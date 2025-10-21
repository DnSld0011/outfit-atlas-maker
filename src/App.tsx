import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import WomenCollection from "./pages/WomenCollection";
import MenCollection from "./pages/MenCollection";
import KidsCollection from "./pages/KidsCollection";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";


function App() {
  return (
    <div className="App">
      {/* Tu contenido principal */}
      <WhatsAppButton />
    </div>
  );
}

export default App;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/collections/women" element={<WomenCollection />} />
            <Route path="/collections/men" element={<MenCollection />} />
            <Route path="/collections/kids" element={<KidsCollection />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
