import Navbar from "@/components/ui/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import AboutProgram from "@/components/sections/AboutProgram";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import Modalities from "@/components/sections/Modalities";
import Schedule from "@/components/sections/Schedule";
import CommunityVideos from "@/components/sections/CommunityVideos";
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
        <CTAFinal />
      </main>
      <footer
        style={{
          background: "#0f0f1a",
          color: "rgba(255,255,255,0.5)",
          textAlign: "center",
          padding: "28px 24px",
          fontSize: "14px",
          borderTop: "1px solid rgba(200,162,200,0.1)",
        }}
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <span style={{ color: "#C8A2C8", fontWeight: "600" }}>Fisio Mom – Yoali Marín</span>.
          Todos los derechos reservados.
        </p>
        <p style={{ marginTop: "6px" }}>
          Puebla, México ·{" "}
          <a
            href="tel:+522226746711"
            style={{ color: "#C8A2C8", textDecoration: "none" }}
          >
            222 674 6711
          </a>
        </p>
      </footer>
      <WhatsAppButton />
    </>
  );
}
