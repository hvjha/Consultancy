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
      background: scrolled ? "rgba(255,255,255,0.98)" : "#FFFFFF",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,0,0,0.05)" : "none",
      transition: "all 0.4s ease",
      padding: "0 6vw",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: "80px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "60px" }}>
        {/* Brand Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Custom SSVC Logo */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" stroke="#55B1A8" strokeWidth="4" />
            <path d="M12 25 L20 12 L28 25" stroke="#1A114D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 20 h8" stroke="#1A114D" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "22px", color: "#666", fontWeight: 700, lineHeight: 1 }}>
              SSVC
            </span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", color: "#888", letterSpacing: "1px", marginTop: "2px" }}>
              STAFF SOLUTION
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          {["Home", "About", "Services"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              color: l === "Home" ? "#1A114D" : "#55B1A8", fontSize: "14px", fontWeight: 700,
              textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
              textTransform: "uppercase", transition: "color 0.2s", display: "flex", alignItems: "center", gap: "4px"
            }}
            onMouseEnter={e => e.target.style.color = "#1A114D"}
            onMouseLeave={e => e.target.style.color = l === "Home" ? "#1A114D" : "#55B1A8"}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
        
      {/* Call to action Button */}
      <div>
        <a href="#contact" style={{
          background: "#55B1A8", color: "#FFFFFF", padding: "12px 28px",
          fontSize: "14px", textTransform: "uppercase",
          textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
          transition: "background 0.2s", borderRadius: "4px", display: "inline-block"
        }}
        onMouseEnter={e => e.target.style.background = "#44A096"}
        onMouseLeave={e => e.target.style.background = "#55B1A8"}
        >Contact Us</a>
      </div>
    </nav>
  );
}

