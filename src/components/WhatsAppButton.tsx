import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "51924115208"; // tu número de WhatsApp
  const message = "Hola! Estoy interesado en sus productos";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
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
      }}
      aria-label="Chatea con nosotros por WhatsApp"
    >
      <span style={{ fontWeight: "bold" }}>💬</span>
    </a>
  );
};

export default WhatsAppButton;
