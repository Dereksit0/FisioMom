"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
} as const;

const videos = [
  { id: 1, title: "Nuestras Clases", src: "/videos/video1.mp4" },
  { id: 2, title: "Progreso Real", src: "/videos/video2.mp4" },
  { id: 3, title: "Momentos Fisio Mom", src: "/videos/video3.mp4" },
];

export default function CommunityVideos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="comunidad"
      ref={ref}
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 100%)",
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
            "radial-gradient(circle at 80% 20%, rgba(200,162,200,0.1) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(244,167,185,0.05) 0%, transparent 40%)",
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
        <motion.div variants={fadeInUp} style={{ textAlign: "center", marginBottom: "80px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              borderRadius: "50px",
              background: "rgba(200,162,200,0.12)",
              border: "1px solid rgba(200,162,200,0.2)",
              marginBottom: "24px",
            }}
          >
            <span style={{ fontSize: "13px", fontWeight: "600", color: "#C8A2C8", textTransform: "uppercase", letterSpacing: "1px" }}>
              Nuestra Comunidad
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "700",
              color: "white",
              marginBottom: "20px",
              lineHeight: 1.1
            }}
          >
            Ustedes
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#8a8aaa", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            Momentos compartidos y el progreso de las mamás que forman parte de esta gran familia.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
            justifyContent: "center",
          }}
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              variants={fadeInUp}
              style={{
                position: "relative",
                aspectRatio: "9/16",
                background: "rgba(0,0,0,0.3)",
                borderRadius: "32px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              >
                <source src={video.src} type="video/mp4" />
                Tu navegador no soporta el tag de video.
              </video>

              {/* Overlay info */}
              <div
                style={{
                  position: "absolute",
                  top: "30px",
                  left: "30px",
                  right: "30px",
                  pointerEvents: "none",
                  zIndex: 2,
                  textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    color: "#C8A2C8",
                    fontWeight: "600",
                    marginBottom: "4px",
                  }}
                >
                  Comunidad
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "white",
                    margin: 0,
                  }}
                >
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
