import React from "react";
import { useWhatsApp } from "@/hooks/useWhatsApp";

const WhatsAppButton = () => {
  const phoneNumber = "51924115208";
  const message = "Hola! Estoy interesado en sus productos";
  const { sendWhatsAppMessage, isThrottled } = useWhatsApp();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    sendWhatsAppMessage(phoneNumber, message);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isThrottled}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "#fff",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        zIndex: 1000,
        textDecoration: "none",
        fontSize: "28px",
        border: "none",
        cursor: isThrottled ? "not-allowed" : "pointer",
        opacity: isThrottled ? 0.6 : 1,
      }}
      aria-label="Chatea con nosotros por WhatsApp"
    >
      <span style={{ fontWeight: "bold" }}>💬</span>
    </button>
  );
};

export default WhatsAppButton;
