"use client";

import NextImage from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #fdf6ff 0%, #f9eef9 40%, #fce8f0 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(123,45,139,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(244,167,185,0.2) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Floating circles */}
      {[
        { size: 12, top: "20%", left: "8%", color: "#C8A2C8", delay: 0 },
        { size: 8, top: "70%", left: "12%", color: "#F4A7B9", delay: 0.5 },
        { size: 16, top: "30%", right: "10%", color: "#7B2D8B", delay: 1 },
        { size: 10, bottom: "25%", right: "20%", color: "#C8A2C8", delay: 0.3 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            borderRadius: "50%",
            background: dot.color,
            opacity: 0.4,
            top: dot.top,
            left: (dot as any).left,
            right: (dot as any).right,
            bottom: (dot as any).bottom,
          }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
        />
      ))}

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 24px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
          width: "100%",
        }}
        className="hero-grid"
      >
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              borderRadius: "50px",
              background: "linear-gradient(135deg, rgba(123,45,139,0.1), rgba(200,162,200,0.15))",
              border: "1px solid rgba(123,45,139,0.2)",
              marginBottom: "24px",
            }}
          >
            <Sparkles size={14} color="#7B2D8B" />
            <span
              style={{
                fontSize: "13px",
                fontWeight: "600",
                color: "#7B2D8B",
                letterSpacing: "0.5px",
              }}
            >
              Clases Presenciales y En Línea
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: "700",
              lineHeight: "1.15",
              color: "#1a1a2e",
              marginBottom: "20px",
            }}
          >
            Tu camino hacia la{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7B2D8B, #C8A2C8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              maternidad consciente
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "#5a5a7a",
              lineHeight: "1.7",
              marginBottom: "36px",
              maxWidth: "480px",
            }}
          >
            Soy{" "}
            <strong style={{ color: "#7B2D8B" }}>Yoali Marín</strong>, fisioterapeuta
            especializada en maternidad. Te acompañaré en cada etapa de este hermoso
            viaje, desde la preparación al parto hasta la estimulación de tu bebé.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ display: "flex", gap: "32px", marginBottom: "40px" }}
          >
            {[
              { value: "500+", label: "Mamás atendidas" },
              { value: "5★", label: "Calificación" },
              { value: "10+", label: "Años de exp." },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.8rem",
                    fontWeight: "700",
                    color: "#7B2D8B",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: "12px", color: "#8a8aaa", marginTop: "4px" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <a
              href="https://wa.me/522226746711"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 32px",
                borderRadius: "50px",
                background: "linear-gradient(135deg, #7B2D8B, #9b3dab)",
                color: "white",
                fontWeight: "700",
                fontSize: "16px",
                textDecoration: "none",
                boxShadow: "0 8px 25px rgba(123,45,139,0.35)",
                transition: "all 0.3s ease",
              }}
            >
              <MessageCircle size={20} />
              Agenda por WhatsApp
            </a>
            <button
              onClick={() => {
                document.getElementById("programa")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                padding: "16px 32px",
                borderRadius: "50px",
                background: "transparent",
                border: "2px solid rgba(123,45,139,0.3)",
                color: "#7B2D8B",
                fontWeight: "600",
                fontSize: "16px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Ver programa
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Image card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          style={{ position: "relative" }}
        >
          <div
            style={{
              borderRadius: "30px",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(123,45,139,0.25)",
              background: "linear-gradient(135deg, #f0d8f4, #fce3ed)",
              aspectRatio: "4/5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Real Image of Yoali Marín */}
            <NextImage
              src="/images/fisiomom.jpeg"
              alt="Yoali Marín - Fisioterapeuta Perinatal"
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Overlay Gradient for text readability if needed (optional but good for premium feel) */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(123,45,139,0.2) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: "24px",
                left: "24px",
                background: "white",
                borderRadius: "16px",
                padding: "12px 16px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #7B2D8B, #C8A2C8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                }}
              >
                💜
              </div>
              <div>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#1a1a2e" }}>
                  Primera consulta
                </div>
                <div style={{ fontSize: "11px", color: "#7B2D8B", fontWeight: "600" }}>
                  ¡Gratis!
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ fontSize: "12px", color: "#C8A2C8", letterSpacing: "2px" }}>
          DESCUBRE MÁS
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: "20px", height: "30px", border: "2px solid #C8A2C8", borderRadius: "10px", position: "relative" }}
        >
          <motion.div
            animate={{ y: [4, 12, 4], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#7B2D8B", position: "absolute", left: "50%", transform: "translateX(-50%)" }}
          />
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding-top: 100px !important;
          }
        }
      `}</style>
    </section>
  );
}
