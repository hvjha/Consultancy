import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Card1Illustration = () => (
  <svg viewBox="0 0 300 250" width="100%" height="100%" style={{ background: "linear-gradient(to bottom, #7CD5CE, #A6E3E9)" }}>
    {/* Abstract corporate hiring scene */}
    <rect x="40" y="50" width="220" height="130" rx="8" fill="#1A114D" />
    <circle cx="100" cy="115" r="30" fill="#FFFFFF" opacity="0.2" />
    <path d="M85 130 C85 110, 115 110, 115 130" fill="#FFFFFF" />
    <circle cx="100" cy="100" r="12" fill="#FFFFFF" />
    <rect x="150" y="80" width="80" height="8" rx="4" fill="#FFFFFF" opacity="0.5" />
    <rect x="150" y="100" width="60" height="8" rx="4" fill="#FFFFFF" opacity="0.5" />
    <rect x="150" y="120" width="70" height="8" rx="4" fill="#FFFFFF" opacity="0.5" />
    <rect x="50" y="200" width="200" height="10" rx="5" fill="#fcfcfc" />
    <circle cx="230" cy="180" r="20" fill="#FFB703" />
    <circle cx="280" cy="40" r="40" fill="#FFB703" opacity="0.3" />
  </svg>
);

const Card2Illustration = () => (
  <svg viewBox="0 0 300 250" width="100%" height="100%" style={{ background: "linear-gradient(to bottom, #7CD5CE, #E0F2E9)" }}>
    {/* Abstract charts and ideas */}
    <rect x="120" y="60" width="120" height="150" rx="5" fill="#FFFFFF" />
    <circle cx="180" cy="110" r="35" fill="#FFB703" opacity="0.8" />
    <path d="M180 145 L180 180" stroke="#1A114D" strokeWidth="6" />
    <rect x="160" y="180" width="40" height="10" rx="2" fill="#1A114D" />
    <circle cx="80" cy="180" r="45" fill="#C4B5FD" opacity="0.8" />
    <path d="M80 180 L110 160 L80 135" stroke="#FFFFFF" strokeWidth="4" fill="none" />
    <path d="M110 200 A 30 30 0 0 1 140 180" stroke="#1A114D" strokeWidth="8" fill="none" />
  </svg>
);

const Card3Illustration = () => (
  <svg viewBox="0 0 300 250" width="100%" height="100%" style={{ background: "linear-gradient(to bottom, #7CD5CE, #A78BFA)" }}>
    {/* Abstract puzzle lightbulb */}
    <circle cx="150" cy="120" r="70" fill="#FFB703" />
    <path d="M150 50 L150 190 M80 120 L220 120" stroke="#FFFFFF" strokeWidth="4" opacity="0.5" />
    <rect x="120" y="195" width="60" height="25" rx="5" fill="#1A114D" />
    <rect x="135" y="225" width="30" height="10" rx="3" fill="#1A114D" />
    <rect x="60" y="160" width="20" height="60" fill="#FCA5A5" />
    <circle cx="100" cy="160" r="15" fill="#1A114D" />
  </svg>
);

const ScaleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18M5 10l7-5 7 5M5 10c0 3.866 3.134 7 7 7s7-3.134 7-7"/>
  </svg>
);

const MappingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 22c0-4.418 3.582-8 8-8s8 3.582 8 8" />
  </svg>
);

const AssessmentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const StrategyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3 6 6 1-4.5 4.5 1 6-5.5-3.5-5.5 3.5 1-6L3 9l6-1 3-6z"/>
  </svg>
);

const GovernanceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

const Card4Illustration = () => (
  <svg viewBox="0 0 300 250" width="100%" height="100%" style={{ background: "linear-gradient(to bottom, #7CD5CE, #FFD166)" }}>
    <circle cx="150" cy="125" r="80" fill="#FFFFFF" opacity="0.3" />
    <path d="M100 150 L150 70 L200 150 Z" fill="#1A114D" />
    <circle cx="150" cy="50" r="15" fill="#EF476F" />
  </svg>
);

const Card5Illustration = () => (
  <svg viewBox="0 0 300 250" width="100%" height="100%" style={{ background: "linear-gradient(to bottom, #7CD5CE, #118AB2)" }}>
    <rect x="80" y="80" width="140" height="90" rx="10" fill="#FFFFFF" opacity="0.8" />
    <line x1="100" y1="110" x2="200" y2="110" stroke="#1A114D" strokeWidth="4" />
    <line x1="100" y1="130" x2="180" y2="130" stroke="#1A114D" strokeWidth="4" />
    <circle cx="200" cy="60" r="30" fill="#06D6A0" opacity="0.9" />
  </svg>
);

const ServiceCard = ({ id, title, desc, icon, bgElement, onOpenService }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div 
      style={{
        flex: "1 1 21%", minWidth: "280px", maxWidth: "350px",
        height: "420px", position: "relative",
        borderRadius: "12px", overflow: "hidden",
        boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        transition: "transform 0.4s ease",
        transform: isHovered ? "translateY(-10px)" : "translateY(0)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Graphic Area */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: "60px", background: "#E8F4F3" }}>
        {bgElement}
      </div>

      {/* Floating Info Box (Default State) */}
      <div style={{
        position: "absolute", bottom: "40px", left: "10%", right: "10%",
        background: "#FFFFFF", padding: "24px", borderRadius: "12px",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.05)",
        textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        opacity: isHovered ? 0 : 1, pointerEvents: isHovered ? "none" : "auto",
        zIndex: 5
      }}>
        <div style={{
           width: "48px", height: "48px", borderRadius: "50%",
           background: "#F8F5F1", display: "flex", justifyContent: "center", alignItems: "center",
           marginBottom: "16px"
        }}>
          {icon}
        </div>
        <h4 style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 700,
          color: "#55B1A8", margin: 0, lineHeight: 1.4
        }}>
          {title}
        </h4>
      </div>
      
      {/* "MORE DETAILS" text underneath white box */}
      <div style={{
        position: "absolute", bottom: "16px", width: "100%", textAlign: "center",
        opacity: isHovered ? 0 : 1, transition: "opacity 0.3s ease"
      }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700, color: "#55B1A8", letterSpacing: "1px" }}>MORE DETAILS</span>
      </div>

      {/* Hover State Info Box */}
      <div style={{
        position: "absolute", bottom: "16px", left: "10%", right: "10%",
        height: "172px", background: "#55B1A8",
        borderRadius: "12px", overflow: "hidden",
        display: "flex", flexDirection: "column",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: isHovered ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
        opacity: isHovered ? 1 : 0,
        pointerEvents: isHovered ? "auto" : "none",
        zIndex: 10
      }}>
        <div style={{ padding: "16px", flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#FFFFFF",
            lineHeight: 1.6, margin: 0, textAlign: "center", fontWeight: 500
          }}>
            {desc}
          </p>
        </div>
        <a href="#services" style={{
          background: "#1A114D", color: "#FFFFFF", padding: "14px",
          textAlign: "center", textDecoration: "none",
          fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 700,
          display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
          transition: "background 0.2s"
        }}
        onClick={(e) => { 
          e.preventDefault(); 
          if(onOpenService) onOpenService(id); 
          else navigate(`/services/${id}`);
        }}
        onMouseEnter={e => e.target.style.background = "#261970"}
        onMouseLeave={e => e.target.style.background = "#1A114D"}
        >
          &rarr; MORE DETAILS
        </a>
      </div>
    </div>
  );
};

export default function ServicesSSVC({ onOpenService }) {
  const services = [
    {
      id: "search",
      title: "Talent Acquisition",
      desc: "Securing top-tier talent for global markets via a streamlined, data-driven approach.",
      icon: <ScaleIcon />,
      bgElement: <Card1Illustration />
    },
    {
      id: "mapping",
      title: "Organizational Mapping",
      desc: "Optimize organizational structure, roles, and processes for continuous business growth.",
      icon: <MappingIcon />,
      bgElement: <Card2Illustration />
    },
    {
      id: "assessment",
      title: "Executive Assessment",
      desc: "Make informed decisions about talent development, succession planning, and leadership effectiveness.",
      icon: <AssessmentIcon />,
      bgElement: <Card3Illustration />
    }
  ];

  return (
    <section id="services" style={{ 
      background: "#fcfcff", padding: "120px 6vw", position: "relative",
      overflow: "hidden"
    }}>
      
      {/* Background abstract layout elements */}
      <div style={{ position: "absolute", top: "10%", right: "15%", width: "80px", height: "80px", borderRadius: "50%", background: "#F4EFEA", zIndex: 0 }}></div>
      <div style={{ position: "absolute", top: "15%", left: "10%", width: "60px", height: "60px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", zIndex: 0 }}>
         {Array(16).fill(0).map((_, i) => <div key={i} style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#EAEAEA" }} />)}
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto 60px" }}>
          <div style={{ display: "inline-block", position: "relative" }}>
             <h5 style={{
               fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700,
               letterSpacing: "1.5px", color: "#1A114D", textTransform: "uppercase", marginBottom: "16px",
               position: "relative", zIndex: 2
             }}>
               RANGE OF SERVICES
             </h5>
             <div style={{ position: "absolute", top: "-10px", left: "-10px", width: "30px", height: "30px", background: "#F4EFEA", borderRadius: "4px", zIndex: 1 }}></div>
          </div>
          
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
            fontSize: "clamp(32px, 4vw, 42px)", color: "#55B1A8", margin: "0 0 24px", lineHeight: 1.2
          }}>
            Our Comprehensive Offerings
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#666",
            lineHeight: 1.6, margin: 0
          }}>
            Designed to support our clients in attracting and selecting top executive talent, gaining market insights, and making informed hiring decisions to drive organizational success.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
          {services.map((svc, idx) => (
            <ServiceCard key={idx} {...svc} onOpenService={onOpenService} />
          ))}
        </div>
      </div>
    </section>
  );
}
