"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Calendar } from "lucide-react";

const schedule = [
  {
    day: "Lunes – Viernes",
    hours: "9:00 AM – 8:00 PM",
    open: true,
    icon: "📅",
    slots: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM", "7:00 PM"],
  },
  {
    day: "Sábados",
    hours: "9:00 AM – 2:00 PM",
    open: true,
    icon: "🌟",
    slots: ["9:00 AM", "10:30 AM", "12:00 PM"],
  },
  {
    day: "Domingos",
    hours: "Cerrado",
    open: false,
    icon: "🌸",
    slots: [],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Schedule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="horarios"
      ref={ref}
      style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #fdf6ff 0%, #fff 100%)",
        position: "relative",
      }}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        style={{ maxWidth: "900px", margin: "0 auto" }}
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
              background: "rgba(244,167,185,0.12)",
              border: "1px solid rgba(244,167,185,0.25)",
              marginBottom: "20px",
            }}
          >
            <Clock size={14} color="#7B2D8B" />
            <span style={{ fontSize: "13px", fontWeight: "600", color: "#7B2D8B" }}>
              Horarios
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
            ¿Cuándo nos encontramos?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#6a6a8a", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
            Tenemos horarios flexibles para adaptarnos a tu ritmo de vida
          </p>
        </motion.div>

        {/* Schedule cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {schedule.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={item.open ? { x: 6 } : {}}
              style={{
                background: item.open ? "white" : "rgba(248,244,251,0.5)",
                borderRadius: "20px",
                border: item.open
                  ? "1px solid rgba(200,162,200,0.25)"
                  : "1px solid rgba(200,162,200,0.1)",
                boxShadow: item.open
                  ? "0 8px 30px rgba(123,45,139,0.08)"
                  : "none",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "28px 36px",
                  flexWrap: "wrap",
                  gap: "16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "16px",
                      background: item.open
                        ? "linear-gradient(135deg, rgba(123,45,139,0.1), rgba(200,162,200,0.15))"
                        : "rgba(200,162,200,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontWeight: "700",
                        fontSize: "18px",
                        color: item.open ? "#1a1a2e" : "#aaaacc",
                        marginBottom: "4px",
                      }}
                    >
                      {item.day}
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Clock size={14} color={item.open ? "#7B2D8B" : "#aaaacc"} />
                      <span
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          color: item.open ? "#7B2D8B" : "#aaaacc",
                        }}
                      >
                        {item.hours}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Status badge */}
                <div
                  style={{
                    padding: "8px 20px",
                    borderRadius: "50px",
                    fontSize: "13px",
                    fontWeight: "700",
                    background: item.open
                      ? "linear-gradient(135deg, rgba(123,45,139,0.1), rgba(200,162,200,0.15))"
                      : "rgba(200,162,200,0.1)",
                    color: item.open ? "#7B2D8B" : "#aaaacc",
                    border: `1px solid ${item.open ? "rgba(123,45,139,0.2)" : "rgba(200,162,200,0.15)"}`,
                  }}
                >
                  {item.open ? "✓ Disponible" : "× Cerrado"}
                </div>
              </div>

              {/* Time slots */}
              {item.open && item.slots.length > 0 && (
                <div
                  style={{
                    padding: "0 36px 24px",
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  {item.slots.map((slot, j) => (
                    <span
                      key={j}
                      style={{
                        padding: "6px 14px",
                        borderRadius: "50px",
                        background: "rgba(123,45,139,0.06)",
                        border: "1px solid rgba(123,45,139,0.12)",
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#7B2D8B",
                      }}
                    >
                      {slot}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA note */}
        <motion.div
          variants={fadeInUp}
          style={{
            marginTop: "48px",
            textAlign: "center",
            padding: "32px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, rgba(123,45,139,0.06), rgba(200,162,200,0.08))",
            border: "1px solid rgba(123,45,139,0.1)",
          }}
        >
          <Calendar size={28} color="#7B2D8B" style={{ marginBottom: "12px" }} />
          <p style={{ fontSize: "16px", color: "#3a3a5a", marginBottom: "16px", lineHeight: 1.6 }}>
            ¿Necesitas un horario especial?{" "}
            <strong style={{ color: "#7B2D8B" }}>¡Contáctame!</strong> Buscaremos
            el horario perfecto para ti.
          </p>
          <a
            href="https://wa.me/522226746711"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 28px",
              borderRadius: "50px",
              background: "linear-gradient(135deg, #7B2D8B, #9b3dab)",
              color: "white",
              fontWeight: "600",
              fontSize: "14px",
              textDecoration: "none",
              boxShadow: "0 4px 15px rgba(123,45,139,0.3)",
            }}
          >
            Agendar mi clase
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
