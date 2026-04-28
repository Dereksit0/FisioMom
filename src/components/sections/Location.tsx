"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation, Phone, Mail } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
} as const;

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="ubicacion"
      ref={ref}
      style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #fff 0%, #fdf6ff 100%)",
        position: "relative",
      }}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
          className="location-grid"
        >
          {/* Text Content */}
          <motion.div variants={fadeInUp}>
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
              <MapPin size={14} color="#7B2D8B" />
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#7B2D8B" }}>
                Encuéntranos
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "700",
                color: "#1a1a2e",
                marginBottom: "24px",
                lineHeight: 1.2
              }}
            >
              Nuestra ubicación
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#6a6a8a", marginBottom: "40px", lineHeight: 1.7 }}>
              Te esperamos en un espacio diseñado para tu comodidad y la de tu bebé en el corazón de Puebla.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(123,45,139,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Navigation size={18} color="#7B2D8B" style={{ margin: "auto" }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: "700", fontSize: "16px", color: "#1a1a2e", marginBottom: "4px" }}>Dirección</h4>
                  <p style={{ fontSize: "15px", color: "#6a6a8a" }}>Puebla, Pue. México</p>
                  <p style={{ fontSize: "13px", color: "#aaaacc", marginTop: "4px" }}>(Contáctanos para la dirección exacta)</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(123,45,139,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone size={18} color="#7B2D8B" style={{ margin: "auto" }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: "700", fontSize: "16px", color: "#1a1a2e", marginBottom: "4px" }}>Teléfono</h4>
                  <p style={{ fontSize: "15px", color: "#6a6a8a" }}>222 674 6711</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(123,45,139,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Mail size={18} color="#7B2D8B" style={{ margin: "auto" }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: "700", fontSize: "16px", color: "#1a1a2e", marginBottom: "4px" }}>Email</h4>
                  <p style={{ fontSize: "15px", color: "#6a6a8a" }}>hola@fisiomom.com</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/522226746711"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "48px",
                padding: "16px 32px",
                borderRadius: "50px",
                background: "linear-gradient(135deg, #7B2D8B, #9b3dab)",
                color: "white",
                fontWeight: "700",
                fontSize: "16px",
                textDecoration: "none",
                boxShadow: "0 8px 25px rgba(123,45,139,0.25)",
              }}
            >
              ¿Cómo llegar?
            </a>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            variants={fadeInUp}
            style={{
              height: "500px",
              background: "rgba(200,162,200,0.1)",
              borderRadius: "32px",
              border: "1px solid rgba(200,162,200,0.2)",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 20px 50px rgba(123,45,139,0.1)",
            }}
          >
            {/* 
              To add a real Google Map:
              1. Go to Google Maps, find your location
              2. Click 'Share' -> 'Embed a map'
              3. Copy the 'src' from the iframe and replace the one below
            */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120612.01633519124!2d-98.2831248924082!3d19.03333331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0ed3f54817d%3A0x6739a813871f3085!2sPuebla%2C%20Pue.!5e0!3m2!1ses-419!2smx!4v1714340000000!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.5) contrast(1.2) opacity(0.8)" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 992px) {
          .location-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
