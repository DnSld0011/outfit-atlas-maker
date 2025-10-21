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
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        style={{ width: "32px", height: "32px" }}
      >
        <path d="M16 0C7.164 0 0 7.163 0 16c0 2.818.737 5.454 2.018 7.736L.673 29.327l5.796-1.518C8.581 29.243 12.145 30 16 30c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29c-2.754 0-5.345-.854-7.463-2.31l-.536-.327-5.582 1.463 1.491-5.455-.359-.554A12.897 12.897 0 013 16c0-7.18 5.82-13 13-13s13 5.82 13 13-5.82 13-13 13zm7.145-9.636c-.391-.196-2.318-1.145-2.673-1.273-.355-.127-.614-.191-.873.196-.259.382-.991 1.273-1.218 1.532-.218.259-.445.291-.836.095-.391-.196-1.654-.609-3.145-1.936-1.164-1.036-1.954-2.318-2.182-2.709-.227-.391-.023-.6.173-.795.173-.177.391-.464.586-.695.196-.232.264-.391.391-.65.127-.259.064-.486-.032-.682-.095-.195-.872-2.1-1.195-2.872-.314-.755-.636-.65-.873-.664-.218-.014-.468-.018-.718-.018s-.655.091-1 .486c-.345.391-1.318 1.291-1.318 3.145s1.355 3.654 1.545 3.909c.195.259 2.736 4.177 6.636 5.859.927.4 1.65.636 2.218.818.927.295 1.773.255 2.445.155.745-.109 2.318-.95 2.645-1.868.327-.918.327-1.704.227-1.868-.091-.173-.341-.282-.732-.477z" />
      </svg>
    </button>
  );
};

export default WhatsAppButton;
