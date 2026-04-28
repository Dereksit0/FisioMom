import Navbar from "@/components/ui/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { MapPin, Phone, Mail, Heart } from "lucide-react";
import Hero from "@/components/sections/Hero";
import AboutProgram from "@/components/sections/AboutProgram";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import Modalities from "@/components/sections/Modalities";
import Schedule from "@/components/sections/Schedule";
import CommunityVideos from "@/components/sections/CommunityVideos";
import FAQ from "@/components/sections/FAQ";
import Location from "@/components/sections/Location";
import CTAFinal from "@/components/sections/CTAFinal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutProgram />
        <Benefits />
        <Testimonials />
        <Modalities />
        <Schedule />
        <CommunityVideos />
        <FAQ />
        <Location />
        <CTAFinal />
      </main>
      <footer
        style={{
          background: "#0f0f1a",
          color: "white",
          padding: "80px 24px 40px",
          borderTop: "1px solid rgba(200,162,200,0.1)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "48px", marginBottom: "64px" }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #7B2D8B, #C8A2C8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Heart size={16} color="white" fill="white" />
              </div>
              <span style={{ fontFamily: "var(--font-playfair), serif", fontWeight: "700", fontSize: "22px", color: "white" }}>Fisio Mom</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontSize: "15px", maxWidth: "300px" }}>
              Acompañándote en el viaje más importante de tu vida con fisioterapia especializada y mucho amor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "24px", color: "#C8A2C8" }}>Explora</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Programa", "Beneficios", "Testimonios", "Horarios", "Comunidad", "FAQ"].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "14px", transition: "color 0.3s ease" }}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "24px", color: "#C8A2C8" }}>Contacto</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
              <li style={{ display: "flex", gap: "12px", alignItems: "center", color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
                <MapPin size={16} color="#C8A2C8" /> Puebla, México
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "center", color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
                <Phone size={16} color="#C8A2C8" /> 222 674 6711
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "center", color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
                <Mail size={16} color="#C8A2C8" /> hola@fisiomom.com
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "24px", color: "#C8A2C8" }}>Síguenos</h4>
            <div style={{ display: "flex", gap: "12px" }}>
              {["Instagram", "Facebook", "TikTok"].map(social => (
                <a key={social} href="#" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", textDecoration: "none", transition: "all 0.3s ease" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600" }}>{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "32px", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>
            © {new Date().getFullYear()} <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: "600" }}>Fisio Mom – Yoali Marín</span>. Todos los derechos reservados.
          </p>
        </div>
      </footer>
      <WhatsAppButton />
    </>
  );
}
