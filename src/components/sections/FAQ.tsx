"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
} as const;

const faqs = [
  {
    question: "¿A partir de qué semana puedo empezar las clases de preparación al parto?",
    answer: "Lo ideal es comenzar entre la semana 24 y 28, pero puedes integrarte en cualquier momento. Nunca es tarde para empezar a conectar con tu cuerpo y tu bebé.",
  },
  {
    question: "¿Es necesario tener experiencia previa en yoga o ejercicio?",
    answer: "Para nada. Nuestras clases están adaptadas para todos los niveles y condiciones físicas. Nos enfocamos en movimientos seguros y funcionales para el embarazo.",
  },
  {
    question: "¿Mi pareja puede asistir a las clases?",
    answer: "¡Claro! Fomentamos la participación de la pareja o acompañante, especialmente en los talleres de preparación al parto, para que ambos se sientan preparados y seguros.",
  },
  {
    question: "¿Qué necesito llevar a las clases presenciales?",
    answer: "Solo ropa cómoda y una botella de agua. Nosotros proporcionamos todo el equipo necesario (mats, pelotas, cojines) en nuestro estudio en Puebla.",
  },
  {
    question: "¿Cómo funcionan las clases en línea?",
    answer: "Las clases en línea se realizan vía Zoom en tiempo real. Esto me permite corregir posturas y resolver dudas al momento, manteniendo la misma calidez que en persona.",
  },
  {
    question: "¿Ofreces asesoría personalizada después del parto?",
    answer: "Sí, cuento con un Taller Postparto y sesiones individuales de rehabilitación de suelo pélvico para ayudarte a recuperar tu bienestar de forma segura.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      ref={ref}
      style={{
        padding: "100px 24px",
        background: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        style={{ maxWidth: "800px", margin: "0 auto" }}
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
              background: "rgba(200,162,200,0.1)",
              border: "1px solid rgba(200,162,200,0.2)",
              marginBottom: "20px",
            }}
          >
            <HelpCircle size={14} color="#7B2D8B" />
            <span style={{ fontSize: "13px", fontWeight: "600", color: "#7B2D8B" }}>
              Preguntas Frecuentes
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "700",
              color: "#1a1a2e",
              marginBottom: "16px",
            }}
          >
            Dudas comunes
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#6a6a8a", lineHeight: 1.7 }}>
            Todo lo que necesitas saber para empezar tu camino con nosotros
          </p>
        </motion.div>

        {/* FAQ List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              style={{
                borderRadius: "20px",
                border: "1px solid rgba(200,162,200,0.2)",
                background: openIndex === i ? "rgba(248,244,251,0.5)" : "white",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "24px 32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    fontWeight: "700",
                    color: openIndex === i ? "#7B2D8B" : "#1a1a2e",
                    transition: "color 0.3s ease",
                  }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  color={openIndex === i ? "#7B2D8B" : "#aaaacc"}
                  style={{
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    flexShrink: 0,
                  }}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div
                      style={{
                        padding: "0 32px 24px",
                        fontSize: "15px",
                        color: "#5a5a7a",
                        lineHeight: 1.8,
                      }}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
