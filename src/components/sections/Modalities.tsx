"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Wifi, CheckCircle2, Layers } from "lucide-react";

const modalities = [
  {
    id: "presencial",
    icon: <MapPin size={32} color="white" />,
    emoji: "🏫",
    title: "Presencial",
    subtitle: "Puebla, México",
    gradient: "linear-gradient(135deg, #7B2D8B, #9b3dab)",
    shadowColor: "rgba(123,45,139,0.35)",
    description:
      "Un espacio cálido, seguro y diseñado especialmente para ti y tu bebé. Vive la experiencia completa de conexión en persona.",
    features: [
      "Espacio acondicionado y seguro",
      "Atención personalizada",
      "Grupo pequeño y familiar",
      "Materiales y equipo incluidos",
      "Área de juego para bebés",
      "Estacionamiento disponible",
    ],
    cta: "Ver ubicación",
    location: "Puebla, Pue.",
  },
  {
    id: "online",
    icon: <Wifi size={32} color="white" />,
    emoji: "💻",
    title: "En Línea",
    subtitle: "Desde tu hogar",
    gradient: "linear-gradient(135deg, #C8A2C8, #9b3dab)",
    shadowColor: "rgba(200,162,200,0.4)",
    description:
      "La misma calidad y calidez de las clases presenciales, desde la comodidad de tu hogar. Sin importar dónde estés.",
    features: [
      "Misma metodología y calidad",
      "Horarios flexibles",
      "Acceso desde cualquier ciudad",
      "Grabaciones disponibles",
      "Soporte técnico incluido",
      "Comunidad virtual de mamás",
    ],
    cta: "Agendar clase online",
    location: "México y el mundo",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
} as const;

export default function Modalities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="modalidades"
      ref={ref}
      style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #fff 0%, #fdf6ff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "-200px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(123,45,139,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {/* Header */}
        <motion.div variants={fadeInUp} style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              borderRadius: "50px",
              background: "rgba(123,45,139,0.08)",
              border: "1px solid rgba(123,45,139,0.15)",
              marginBottom: "20px",
            }}
          >
            <Layers size={14} color="#7B2D8B" />
            <span style={{ fontSize: "13px", fontWeight: "600", color: "#7B2D8B" }}>
              Modalidades
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "700",
              color: "#1a1a2e",
              marginBottom: "16px",
            }}
          >
            Elige cómo quieres aprender
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#6a6a8a", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Clases presenciales en Puebla o en línea desde cualquier lugar.
            La misma calidad, a tu ritmo.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
          }}
          className="modality-grid"
        >
          {modalities.map((m, i) => (
            <motion.div
              key={m.id}
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: `0 30px 70px ${m.shadowColor}` }}
              style={{
                borderRadius: "28px",
                overflow: "hidden",
                background: "white",
                border: "1px solid rgba(200,162,200,0.2)",
                boxShadow: "0 8px 30px rgba(123,45,139,0.08)",
                transition: "all 0.4s ease",
              }}
            >
              {/* Card Header */}
              <div
                style={{
                  background: m.gradient,
                  padding: "48px 40px",
                  position: "relative",
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                {/* Background circles */}
                <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.07)" }} />
                <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "150px", height: "150px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

                <div style={{ fontSize: "64px", marginBottom: "16px" }}>{m.emoji}</div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2rem",
                    fontWeight: "700",
                    color: "white",
                    marginBottom: "6px",
                  }}
                >
                  {m.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px" }}>
                  📍 {m.location}
                </p>
              </div>

              {/* Card Body */}
              <div style={{ padding: "36px 40px" }}>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#5a5a7a",
                    lineHeight: 1.7,
                    marginBottom: "28px",
                  }}
                >
                  {m.description}
                </p>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                  {m.features.map((feature, j) => (
                    <li
                      key={j}
                      style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "#4a4a6a" }}
                    >
                      <CheckCircle2 size={16} color="#7B2D8B" style={{ flexShrink: 0 }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/522226746711"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "14px 28px",
                    borderRadius: "50px",
                    background: m.gradient,
                    color: "white",
                    fontWeight: "700",
                    fontSize: "15px",
                    textDecoration: "none",
                    boxShadow: `0 6px 20px ${m.shadowColor}`,
                    transition: "all 0.3s ease",
                  }}
                >
                  {m.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .modality-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
