import { useState, useCallback } from "react";
import { toast } from "sonner";

const THROTTLE_DELAY = 2000; // 2 segundos entre mensajes

export const useWhatsApp = () => {
  const [isThrottled, setIsThrottled] = useState(false);

  const sendWhatsAppMessage = useCallback((phoneNumber: string, message: string) => {
    if (isThrottled) {
      toast.info("Por favor espera un momento antes de enviar otro mensaje");
      return;
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsThrottled(true);
    toast.success("Abriendo WhatsApp...");
    
    setTimeout(() => {
      setIsThrottled(false);
    }, THROTTLE_DELAY);
  }, [isThrottled]);

  return { sendWhatsAppMessage, isThrottled };
};
