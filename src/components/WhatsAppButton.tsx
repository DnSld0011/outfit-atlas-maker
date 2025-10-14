import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "51999999999"; // Cambia esto por tu número de WhatsApp
  const message = "Hola, estoy interesado en sus productos";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </Button>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Contáctanos por WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
