import React from 'react';
import { FUNCTIONAL_ROLES } from '../data/data';

export default function FunctionalRolesPage() {
  return (
    <section style={{ paddingBottom: "100px", background: "#fcfcff" }}>
      {/* Hero Header matching the Industries layout */}
      <div style={{ background: "#67B7A9", padding: "120px 6vw 60px", textAlign: "center", color: "#FFF", position: "relative", overflow: "hidden" }}>
         {/* Abstract light graphic in background */}
         <div style={{ position: "absolute", inset: 0, opacity: 0.15, display: "flex", justifyContent: "center", alignItems: "center", pointerEvents: "none" }}>
           <svg viewBox="0 0 800 400" width="100%" height="100%">
             <circle cx="400" cy="200" r="150" fill="#FFFFFF" />
             <path d="M200 300 Q400 100 600 300" stroke="#FFFFFF" strokeWidth="20" fill="none" />
             <rect x="350" y="150" width="100" height="80" rx="10" fill="#1A114D" />
           </svg>
         </div>
         <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 700, margin: 0, position: "relative", zIndex: 1 }}>
           Functional Roles
         </h1>
         <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", opacity: 0.9, marginTop: "20px", position: "relative", zIndex: 1, textTransform: "uppercase" }}>
           HOME <span style={{ margin: "0 6px" }}>_</span> SERVICES <span style={{ margin: "0 6px" }}>_</span> FUNCTIONAL ROLES
         </div>
      </div>

      {/* Grid of Functional Roles */}
      <div style={{ padding: "80px 6vw" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "30px",
          maxWidth: "1280px",
          margin: "0 auto"
        }}>
          {FUNCTIONAL_ROLES.map((role) => (
            <div key={role.id} style={{
              display: "flex", flexDirection: "column",
              borderRadius: "12px", overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              background: "#FFFFFF",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-8px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
                <img 
                  src={role.bgImage} 
                  alt={role.name}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
                />
              </div>
              <div style={{ 
                background: "#5EB1A7", 
                padding: "20px 24px",
                display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "90px"
              }}>
                <h4 style={{ 
                  fontFamily: "'DM Sans', sans-serif", 
                  fontSize: "18px", fontWeight: 700, 
                  color: "#FFFFFF", margin: "0 0 5px 0", lineHeight: 1.3
                }}>
                  {role.name}
                </h4>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px", color: "rgba(255,255,255,0.9)", margin: 0, lineHeight: 1.4
                }}>
                  {role.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
