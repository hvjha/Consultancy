import React from 'react';
import CompanyMarquee from './CompanyMarquee';

export default function ContactCTA({ onNavigate }) {
  return (
    <section>
      {/* Upper CTA Area */}
      <div style={{
        position: "relative",
        background: "linear-gradient(135deg, #7CD5CE, #A6E3E9)",
        padding: "100px 6vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        textAlign: "center"
      }}>
        
        {/* Faint Abstract Background Arrow Graphic */}
        <svg style={{ position: "absolute", top: 0, right: "10%", opacity: 0.1, pointerEvents: "none" }} width="400" height="400" viewBox="0 0 400 400" fill="none">
           <path d="M50 50 L150 150 L250 50 L350 350 L200 350 Z" fill="#1A114D" />
           <path d="M250 150 L350 350 L250 350 Z" fill="#55B1A8" />
           {/* Downward thick arrow shape mimicking screenshot */}
           <path d="M100 0 L200 150 L150 200 L300 350 L250 400 L100 250 L150 200 L0 50 Z" fill="#FFFFFF" />
        </svg>

        <h2 style={{
          fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
          fontSize: "clamp(28px, 4vw, 40px)", color: "#FFFFFF",
          lineHeight: 1.3, maxWidth: "700px", margin: "0 0 32px",
          position: "relative", zIndex: 2
        }}>
          Are you looking for exceptional executives to drive your organization forward?
        </h2>

        <a href="#contact" style={{
          background: "#1A114D", color: "#FFFFFF", padding: "16px 40px",
          fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 700,
          textDecoration: "none", borderRadius: "4px", position: "relative", zIndex: 2,
          transition: "background 0.3s, transform 0.2s"
        }}
        onClick={(e) => {
          if (onNavigate) {
            e.preventDefault();
            onNavigate('contact');
          }
        }}
        onMouseEnter={e => { e.target.style.background = "#261970"; e.target.style.transform = "translateY(-2px)"; }}
        onMouseLeave={e => { e.target.style.background = "#1A114D"; e.target.style.transform = "translateY(0)"; }}
        >
          CONTACT US
        </a>
      </div>

      {/* Integrate the existing robust marquee component at the bottom */}
      <div style={{ background: "linear-gradient(to bottom, #A6E3E9, #FFFFFF)", paddingBottom: "60px" }}>
        <CompanyMarquee />
      </div>
    </section>
  );
}
