"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles } from "lucide-react";

const mamaBenefits = [
  { icon: "🌸", title: "Reducción del dolor", desc: "Durante el embarazo y el parto con técnicas especializadas" },
  { icon: "🫁", title: "Control de respiración", desc: "Domina tu cuerpo y mente en cada contracción" },
  { icon: "⚡", title: "Recuperación postparto", desc: "Recuperación más rápida y efectiva después del parto" },
  { icon: "🧘", title: "Reduce ansiedad y estrés", desc: "Técnicas de relajación y mindfulness perinatal" },
  { icon: "💜", title: "Conexión mamá-bebé", desc: "Fortalece el vínculo desde el vientre materno" },
  { icon: "💪", title: "Suelo pélvico", desc: "Fortalecimiento y rehabilitación del suelo pélvico" },
  { icon: "❤️", title: "Preparación emocional", desc: "Para afrontar la maternidad con confianza y seguridad" },
  { icon: "👭", title: "Comunidad de mamás", desc: "Red de apoyo y acompañamiento entre madres" },
];

const bebeBenefits = [
  { icon: "🧠", title: "Desarrollo cognitivo", desc: "Potencia la inteligencia y capacidades mentales del bebé" },
  { icon: "🤝", title: "Vínculo padres-hijo", desc: "Fortalece la conexión emocional desde los primeros días" },
  { icon: "🗣️", title: "Estimulación del lenguaje", desc: "Desarrolla las bases del habla desde temprana edad" },
  { icon: "🎯", title: "Coordinación y equilibrio", desc: "Ejercicios adaptados al desarrollo motor del bebé" },
  { icon: "🎨", title: "Creatividad y exploración", desc: "Fomenta la curiosidad y el aprendizaje activo" },
  { icon: "📅", title: "Etapas adaptadas", desc: "Actividades diseñadas para cada etapa del desarrollo" },
];

const tabs = [
  { id: "mama", label: "💜 Para Mamá", benefits: mamaBenefits },
  { id: "bebe", label: "🍼 Para el Bebé", benefits: bebeBenefits },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("mama");

  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section
      id="beneficios"
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
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {/* Header */}
        <motion.div variants={fadeInUp} style={{ textAlign: "center", marginBottom: "56px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              borderRadius: "50px",
              background: "rgba(244,167,185,0.15)",
              border: "1px solid rgba(244,167,185,0.3)",
              marginBottom: "20px",
            }}
          >
            <Sparkles size={14} color="#7B2D8B" />
            <span style={{ fontSize: "13px", fontWeight: "600", color: "#7B2D8B" }}>
              Beneficios
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
            ¿Por qué elegir Fisio Mom?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#6a6a8a", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Beneficios reales respaldados por la fisioterapia especializada en maternidad
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div variants={fadeInUp} style={{ display: "flex", justifyContent: "center", marginBottom: "48px" }}>
          <div
            style={{
              display: "inline-flex",
              padding: "6px",
              borderRadius: "50px",
              background: "rgba(200,162,200,0.12)",
              border: "1px solid rgba(200,162,200,0.25)",
              gap: "4px",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "12px 28px",
                  borderRadius: "50px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  background:
                    activeTab === tab.id
                      ? "linear-gradient(135deg, #7B2D8B, #9b3dab)"
                      : "transparent",
                  color: activeTab === tab.id ? "white" : "#7B2D8B",
                  boxShadow:
                    activeTab === tab.id
                      ? "0 4px 15px rgba(123,45,139,0.3)"
                      : "none",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {active.benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(123,45,139,0.15)" }}
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "24px",
                border: "1px solid rgba(200,162,200,0.2)",
                boxShadow: "0 4px 20px rgba(123,45,139,0.06)",
                transition: "all 0.3s ease",
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, rgba(123,45,139,0.08), rgba(200,162,200,0.12))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  flexShrink: 0,
                }}
              >
                {b.icon}
              </div>
              <div>
                <h4
                  style={{
                    fontWeight: "700",
                    fontSize: "15px",
                    color: "#1a1a2e",
                    marginBottom: "4px",
                  }}
                >
                  {b.title}
                </h4>
                <p style={{ fontSize: "13px", color: "#7a7a9a", lineHeight: 1.6 }}>
                  {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
