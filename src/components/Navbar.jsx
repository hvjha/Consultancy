import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/data";

export default function Navbar({ onNavigate, activeView }) {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const NAV_MENU = [
    { label: "Home", id: "home" },
    { label: "About", id: "about", dropdown: [
      { label: "About Company", id: "about" },
      { label: "Management Team", id: "about" } // Temp route to about
    ]},
    { label: "Services", id: "services", dropdown: [
      { label: "Our Services", id: "services", arrow: true },
      { label: "Industries We Service", id: "services" }, // Temp route to services
      { label: "Functional Roles", id: "services" } // Temp route to services
    ]}
  ];
  
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
          {NAV_MENU.map((item) => {
            const isActive = activeView === item.id;
            const isHovered = hoveredNav === item.id;
            
            return (
              <div 
                key={item.id} 
                onMouseEnter={() => setHoveredNav(item.id)}
                onMouseLeave={() => setHoveredNav(null)}
                style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
              >
                <a href={`#${item.id}`}
                  style={{
                    color: isActive ? "#1A114D" : "#55B1A8", fontSize: "14px", fontWeight: 700,
                    textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
                    textTransform: "uppercase", transition: "color 0.2s", display: "flex", alignItems: "center", gap: "6px"
                  }}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate(item.id);
                    }
                  }}
                  onMouseEnter={e => e.target.style.color = "#1A114D"}
                  onMouseLeave={e => e.target.style.color = isActive ? "#1A114D" : "#55B1A8"}
                >
                  {item.label}
                  {item.dropdown && (
                    <span style={{ fontSize: "12px", transform: isHovered ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                      ↓
                    </span>
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.dropdown && isHovered && (
                  <div style={{
                    position: "absolute", top: "100%", left: "-20px",
                    background: "#5EB1A7", // Teal background
                    minWidth: "240px",
                    borderRadius: "0 0 12px 12px",
                    padding: "16px 24px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    zIndex: 200,
                    display: "flex", flexDirection: "column"
                  }}>
                    {item.dropdown.map((dropItem, idx) => (
                      <div 
                        key={idx}
                        onClick={() => {
                          if (onNavigate) onNavigate(dropItem.id);
                          setHoveredNav(null);
                        }}
                        style={{
                          padding: "16px 0",
                          borderBottom: idx !== item.dropdown.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none",
                          color: "rgba(255,255,255,0.95)",
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "14px",
                          fontWeight: 500,
                          cursor: "pointer",
                          display: "flex", justifyContent: "space-between", alignItems: "center",
                          transition: "color 0.2s"
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = "#FFFFFF"}
                        onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.95)"}
                      >
                        {dropItem.label}
                        {dropItem.arrow && <span style={{ fontSize: "16px", fontWeight: 700 }}>›</span>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
        
      {/* Call to action Button */}
      <div>
        <a href="#contact" style={{
          background: activeView === 'contact' ? "#1A114D" : "#55B1A8", 
          color: "#FFFFFF", padding: "12px 28px",
          fontSize: "14px", textTransform: "uppercase",
          textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
          transition: "background 0.2s", borderRadius: "4px", display: "inline-block"
        }}
        onClick={(e) => {
          if (onNavigate) {
            e.preventDefault();
            onNavigate('contact');
          }
        }}
        onMouseEnter={e => e.target.style.background = "#44A096"}
        onMouseLeave={e => e.target.style.background = activeView === 'contact' ? "#1A114D" : "#55B1A8"}
        >Contact Us</a>
      </div>
    </nav>
  );
}

