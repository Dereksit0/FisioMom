"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Baby, Heart, Flower2, CheckCircle2 } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const programs = [
  {
    icon: <Heart size={32} color="white" />,
    emoji: "🌸",
    title: "Preparación al Embarazo y Parto",
    subtitle: "Acompañamiento integral para mamá",
    gradient: "linear-gradient(135deg, #7B2D8B, #9b3dab)",
    accentColor: "#C8A2C8",
    items: [
      { icon: "🌿", text: "Ejercicios para favorecer la concepción" },
      { icon: "💪", text: "Preparación física y mental para parto natural o cesárea" },
      { icon: "🧘", text: "Control de respiración y manejo del dolor" },
      { icon: "✨", text: "Taller Postparto: recuperación y bienestar" },
      { icon: "💜", text: "Conexión mamá-bebé desde el vientre" },
      { icon: "🤝", text: "Comunidad de apoyo entre mamás" },
    ],
  },
  {
    icon: <Baby size={32} color="white" />,
    emoji: "🍼",
    title: "Estimulación Temprana",
    subtitle: "Desarrollo integral del bebé",
    gradient: "linear-gradient(135deg, #C8A2C8, #dfc2df)",
    accentColor: "#7B2D8B",
    items: [
      { icon: "👶", text: "Clases para bebés desde las primeras semanas de vida" },
      { icon: "🧠", text: "Desarrollo cognitivo, motor y emocional" },
      { icon: "🗣️", text: "Estimulación del lenguaje desde temprana edad" },
      { icon: "🎯", text: "Coordinación y equilibrio adaptados a cada etapa" },
      { icon: "🎨", text: "Creatividad, exploración y juego sensorial" },
      { icon: "❤️", text: "Fortalece el vínculo padres-hijo" },
    ],
  },
];

export default function AboutProgram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="programa"
      ref={ref}
      style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #fff 0%, #fdf6ff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,162,200,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={stagger}
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* Section header */}
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
            <Flower2 size={14} color="#7B2D8B" />
            <span style={{ fontSize: "13px", fontWeight: "600", color: "#7B2D8B" }}>
              Nuestros Programas
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "700",
              color: "#1a1a2e",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            ¿Qué ofrecemos?
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#6a6a8a",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Programas diseñados con amor y ciencia para acompañarte en cada etapa
            de la maternidad
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
          }}
          className="program-grid"
        >
          {programs.map((program, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              style={{
                borderRadius: "28px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(123,45,139,0.12)",
                background: "white",
                border: "1px solid rgba(200,162,200,0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 30px 80px rgba(123,45,139,0.2)",
              }}
            >
              {/* Card header */}
              <div
                style={{
                  background: program.gradient,
                  padding: "40px 36px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-30px",
                    right: "-30px",
                    width: "140px",
                    height: "140px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                  }}
                />
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  {program.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "white",
                    marginBottom: "6px",
                    lineHeight: 1.3,
                  }}
                >
                  {program.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>
                  {program.subtitle}
                </p>
              </div>

              {/* Card body */}
              <div style={{ padding: "32px 36px" }}>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                  {program.items.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        fontSize: "15px",
                        color: "#3a3a5a",
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ fontSize: "18px", flexShrink: 0, marginTop: "1px" }}>
                        {item.icon}
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/522226746711"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "28px",
                    padding: "12px 24px",
                    borderRadius: "50px",
                    background: program.gradient,
                    color: "white",
                    fontWeight: "600",
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(123,45,139,0.25)",
                  }}
                >
                  <CheckCircle2 size={16} />
                  Más información
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .program-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
