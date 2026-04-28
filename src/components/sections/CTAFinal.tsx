"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Phone, Sparkles, Heart } from "lucide-react";

export default function CTAFinal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contacto"
      ref={ref}
      style={{
        padding: "100px 24px",
        background: "linear-gradient(135deg, #7B2D8B 0%, #5e1f6b 30%, #2d1540 60%, #C8A2C8 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(244,167,185,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating hearts */}
      {[
        { top: "15%", left: "8%", size: 20, delay: 0 },
        { top: "70%", left: "5%", size: 14, delay: 1 },
        { top: "20%", right: "6%", size: 16, delay: 0.5 },
        { top: "65%", right: "8%", size: 22, delay: 1.5 },
      ].map((h, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            top: h.top,
            left: (h as any).left,
            right: (h as any).right,
            opacity: 0.2,
          }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: h.delay }}
        >
          <Heart size={h.size} color="white" fill="white" />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 20px",
            borderRadius: "50px",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            marginBottom: "28px",
          }}
        >
          <Sparkles size={14} color="#F4A7B9" />
          <span style={{ fontSize: "13px", fontWeight: "600", color: "#F4A7B9", letterSpacing: "0.5px" }}>
            Primera consulta gratuita
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: "700",
            color: "white",
            lineHeight: 1.2,
            marginBottom: "20px",
          }}
        >
          ¿Lista para comenzar
          <br />
          <span style={{ color: "#F4A7B9" }}>tu viaje?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: "1.15rem",
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.7,
            marginBottom: "48px",
            maxWidth: "520px",
            margin: "0 auto 48px",
          }}
        >
          Da el primer paso hacia una maternidad plena y consciente.
          Agenda tu primera consulta gratuita hoy mismo.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <motion.a
            href="https://wa.me/522226746711"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "18px 40px",
              borderRadius: "50px",
              background: "white",
              color: "#7B2D8B",
              fontWeight: "800",
              fontSize: "17px",
              textDecoration: "none",
              boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
          >
            <MessageCircle size={22} />
            Escríbeme por WhatsApp
          </motion.a>
        </motion.div>

        {/* Phone number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            marginTop: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <Phone size={16} color="rgba(255,255,255,0.7)" />
          <a
            href="tel:+522226746711"
            style={{
              color: "rgba(255,255,255,0.85)",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "17px",
              letterSpacing: "1px",
            }}
          >
            222 674 6711
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            marginTop: "56px",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: "🏆", label: "Certificada", sub: "Fisioterapia Perinatal" },
            { icon: "💜", label: "500+ Mamás", sub: "Atendidas con amor" },
            { icon: "⭐", label: "5.0 Estrellas", sub: "Calificación promedio" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "28px", marginBottom: "6px" }}>{stat.icon}</div>
              <div style={{ fontWeight: "700", color: "white", fontSize: "14px" }}>
                {stat.label}
              </div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "12px", marginTop: "2px" }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
