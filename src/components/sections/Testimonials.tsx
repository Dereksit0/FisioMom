"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sofía Mendoza",
    initials: "SM",
    color: "#7B2D8B",
    service: "Preparación al Parto",
    rating: 5,
    text:
      "Yoali me acompañó durante todo mi embarazo con una dedicación increíble. Gracias a sus clases pude tener un parto natural sin epidural. ¡Fue la mejor decisión que tomé!",
  },
  {
    name: "Valentina García",
    initials: "VG",
    color: "#C8A2C8",
    service: "Estimulación Temprana",
    rating: 5,
    text:
      "Mi bebé Emilio comenzó las clases de estimulación a las 6 semanas y la diferencia es notable. Es un niño muy activo, curioso y con un vínculo hermoso con nosotros. Totalmente recomendado.",
  },
  {
    name: "Mariana López",
    initials: "ML",
    color: "#F4A7B9",
    service: "Taller Postparto",
    rating: 5,
    text:
      "Después de mi cesárea me sentía perdida. Yoali me ayudó a recuperarme tanto física como emocionalmente. Su clase en línea fue perfecta porque podía hacerlo desde casa con mi bebé.",
  },
  {
    name: "Daniela Ruiz",
    initials: "DR",
    color: "#9b3dab",
    service: "Preparación al Parto",
    rating: 5,
    text:
      "Las técnicas de respiración que aprendí me cambiaron la vida durante el parto. Yoali es una profesional excepcional, empática y muy conocedora. ¡La segunda vez también iré con ella!",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        setSelectedIndex(index);
      }
    },
    [emblaApi]
  );

  return (
    <section
      id="testimonios"
      ref={ref}
      style={{
        padding: "100px 0",
        background: "linear-gradient(135deg, #1a1a2e 0%, #2d1540 50%, #1a1a2e 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(123,45,139,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(200,162,200,0.1) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
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
              background: "rgba(200,162,200,0.12)",
              border: "1px solid rgba(200,162,200,0.2)",
              marginBottom: "20px",
            }}
          >
            <Star size={14} color="#F4A7B9" fill="#F4A7B9" />
            <span style={{ fontSize: "13px", fontWeight: "600", color: "#C8A2C8" }}>
              Testimonios
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "700",
              color: "white",
              marginBottom: "16px",
            }}
          >
            Lo que dicen nuestras mamás
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#8a8aaa", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
            Cientos de familias ya han transformado su experiencia de maternidad
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div variants={fadeInUp}>
          <div ref={emblaRef} style={{ overflow: "hidden" }}>
            <div style={{ display: "flex", gap: "24px" }}>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    flex: "0 0 min(85vw, 480px)",
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "24px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "36px",
                    position: "relative",
                  }}
                >
                  {/* Quote icon */}
                  <div style={{ marginBottom: "20px" }}>
                    <Quote size={36} color={t.color} style={{ opacity: 0.6 }} />
                  </div>

                  {/* Text */}
                  <p
                    style={{
                      fontSize: "16px",
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: 1.8,
                      marginBottom: "28px",
                      fontStyle: "italic",
                    }}
                  >
                    "{t.text}"
                  </p>

                  {/* Stars */}
                  <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} size={16} color="#F4A7B9" fill="#F4A7B9" />
                    ))}
                  </div>

                  {/* Author */}
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${t.color}, ${t.color}99)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "700",
                        fontSize: "16px",
                        color: "white",
                        flexShrink: 0,
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div style={{ fontWeight: "700", color: "white", fontSize: "15px" }}>
                        {t.name}
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: t.color,
                          fontWeight: "600",
                          marginTop: "2px",
                        }}
                      >
                        {t.service}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            <button
              onClick={scrollPrev}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(200,162,200,0.15)",
                border: "1px solid rgba(200,162,200,0.25)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#C8A2C8",
                transition: "all 0.3s ease",
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <div style={{ display: "flex", gap: "8px" }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  style={{
                    width: selectedIndex === i ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background: selectedIndex === i ? "#C8A2C8" : "rgba(200,162,200,0.3)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(200,162,200,0.15)",
                border: "1px solid rgba(200,162,200,0.25)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#C8A2C8",
                transition: "all 0.3s ease",
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
