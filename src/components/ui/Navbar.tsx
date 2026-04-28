"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Programa", href: "#programa" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Horarios", href: "#horarios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(255,255,255,0.95)"
          : "rgba(255,255,255,0.0)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(123,45,139,0.12)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200,162,200,0.2)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link
          href="#hero"
          onClick={() => handleNavClick("#hero")}
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
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
            }}
          >
            <Heart size={18} color="white" fill="white" />
          </div>
          <div>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: "700",
                fontSize: "20px",
                color: "#7B2D8B",
                lineHeight: 1,
              }}
            >
              Fisio Mom
            </span>
            <p style={{ fontSize: "10px", color: "#C8A2C8", fontWeight: 500, margin: 0 }}>
              Yoali Marín
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "4px", alignItems: "center" }} className="hidden-mobile">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: activeSection === link.href.slice(1) ? "600" : "500",
                color: activeSection === link.href.slice(1) ? "#7B2D8B" : "#4a4a6a",
                background:
                  activeSection === link.href.slice(1)
                    ? "rgba(123,45,139,0.08)"
                    : "transparent",
                transition: "all 0.2s ease",
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/522226746711"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: "12px",
              padding: "10px 20px",
              background: "linear-gradient(135deg, #7B2D8B, #9b3dab)",
              color: "white",
              borderRadius: "25px",
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(123,45,139,0.3)",
            }}
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "#7B2D8B",
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(200,162,200,0.3)",
            padding: "16px 24px 24px",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "12px 0",
                fontSize: "16px",
                fontWeight: "500",
                color: activeSection === link.href.slice(1) ? "#7B2D8B" : "#4a4a6a",
                borderBottom: "1px solid rgba(200,162,200,0.15)",
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/522226746711"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              marginTop: "16px",
              padding: "14px",
              background: "linear-gradient(135deg, #7B2D8B, #9b3dab)",
              color: "white",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "600",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Contactar por WhatsApp
          </a>
        </div>
      )}

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
