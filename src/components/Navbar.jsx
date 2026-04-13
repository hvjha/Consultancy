import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(12,10,8,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(200,168,130,0.15)" : "none",
      transition: "all 0.4s ease",
      padding: "0 6vw",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: "68px",
    }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#C8A882", letterSpacing: "0.04em" }}>
        SSV<span style={{ color: "#fff", fontWeight: 300 }}>Staff Solutions</span>
      </div>
      <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
        {NAV_LINKS.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{
            color: "rgba(255,255,255,0.7)", fontSize: "13px", letterSpacing: "0.12em",
            textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
            textTransform: "uppercase", transition: "color 0.2s",
          }}
          onMouseEnter={e => e.target.style.color = "#C8A882"}
          onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.7)"}
          >{l}</a>
        ))}
        <a href="#contact" style={{
          background: "#C8A882", color: "#0C0A08", padding: "9px 22px",
          fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase",
          textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
          transition: "background 0.2s",
        }}
        onMouseEnter={e => e.target.style.background = "#e0c09a"}
        onMouseLeave={e => e.target.style.background = "#C8A882"}
        >Book a Call</a>
      </div>
    </nav>
  );
}
