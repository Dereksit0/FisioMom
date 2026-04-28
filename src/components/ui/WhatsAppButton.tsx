"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/522226746711"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Contactar por WhatsApp"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: hovered ? "14px 22px 14px 16px" : "16px",
        borderRadius: "50px",
        background: "linear-gradient(135deg, #25D366, #128C7E)",
        color: "white",
        textDecoration: "none",
        boxShadow: hovered
          ? "0 8px 30px rgba(37,211,102,0.5)"
          : "0 4px 20px rgba(37,211,102,0.35)",
        transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: hovered ? "scale(1.05)" : "scale(1)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        maxWidth: hovered ? "260px" : "56px",
      }}
    >
      <MessageCircle size={26} fill="white" stroke="none" style={{ flexShrink: 0 }} />
      <span
        style={{
          fontWeight: "600",
          fontSize: "14px",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s ease 0.1s",
          whiteSpace: "nowrap",
        }}
      >
        ¡Escríbeme ahora!
      </span>

      {/* Pulse ring */}
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50px",
          border: "2px solid rgba(37,211,102,0.4)",
          animation: "pulse-ring 2s ease-out infinite",
        }}
      />

      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.35); opacity: 0; }
        }
      `}</style>
    </a>
  );
}
