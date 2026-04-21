import React from 'react';
import { Link } from 'react-router-dom';

export default function IndustriesSSVC() {
  const industries = [
    "Chemicals",
    "Renewable Energy",
    "Auto Component / Auto Ancillaries",
    "Industrial",
    "FMCG / Fast Moving Consumer Durables"
  ];

  return (
    <section id="industries" style={{ position: "relative", width: "100%", display: "flex", flexWrap: "wrap" }}>
      
      {/* Left Column - Content */}
      <div style={{
        flex: "1 1 400px", background: "#55B1A8", padding: "100px 6vw",
        display: "flex", flexDirection: "column", justifyContent: "center", color: "#FFFFFF"
      }}>
        <div style={{ maxWidth: "450px", marginLeft: "auto" }}>
          
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ width: "30px", height: "30px", background: "rgba(255,255,255,0.8)", borderRadius: "4px", position: "absolute" }}></div>
            <h5 style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700,
              letterSpacing: "1.5px", textTransform: "uppercase", margin: 0,
              color: "#1A114D", position: "relative", marginLeft: "10px"
            }}>
              OUR AREAS OF EXPERTISE
            </h5>
          </div>

          <h2 style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
            fontSize: "clamp(32px, 4vw, 42px)", margin: "0 0 40px", lineHeight: 1.2
          }}>
            Industries We<br />Service
          </h2>

          <div style={{ 
            display: "flex", flexDirection: "column", gap: "24px",
            maxHeight: "300px", overflowY: "auto", paddingRight: "20px",
            borderRight: "4px solid rgba(255,255,255,0.3)",
            marginBottom: "40px"
          }}>
            <style dangerouslySetInnerHTML={{__html: `
              .ind-list::-webkit-scrollbar { width: 6px; }
              .ind-list::-webkit-scrollbar-track { background: rgba(255,255,255,0.1); border-radius: 4px; }
              .ind-list::-webkit-scrollbar-thumb { background: #FFFFFF; border-radius: 4px; }
            `}} />
            <div className="ind-list" style={{ display: "flex", flexDirection: "column", gap: "28px", maxHeight: "100%", overflowY: "auto", paddingRight: "20px" }}>
              {industries.map((ind, i) => (
                <div key={i} style={{ 
                  fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 700, 
                  color: i === 0 ? "#1A114D" : "#FFFFFF", // first one highlighted
                  borderBottom: i === 0 ? "1px solid rgba(26,17,77,0.3)" : "1px solid rgba(255,255,255,0.2)",
                  paddingBottom: "16px", transition: "color 0.2s"
                }}>
                  {ind}
                </div>
              ))}
            </div>
          </div>

          <Link to="/industries" style={{
            background: "#1A114D", color: "#FFFFFF", padding: "12px 32px",
            fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 700,
            textDecoration: "none", display: "inline-block", borderRadius: "4px",
            transition: "background 0.3s"
          }}
          onMouseEnter={e => e.target.style.background = "#261970"}
          onMouseLeave={e => e.target.style.background = "#1A114D"}
          >
            VIEW ALL
          </Link>

        </div>
      </div>

      {/* Right Column - Image Placeholder */}
      <div style={{
        flex: "1 1 500px", background: "linear-gradient(135deg, #A6E3E9, #f4efea)",
        position: "relative", minHeight: "500px", display: "flex", alignItems: "flex-end",
        overflow: "hidden"
      }}>
        {/* Abstract Chemistry / Lab Illustration */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.8 }}>
          <svg viewBox="0 0 400 400" width="80%" height="80%">
            <rect x="100" y="200" width="40" height="150" rx="20" fill="#E8F4F3" stroke="#55B1A8" strokeWidth="4" />
            <rect x="105" y="250" width="30" height="90" rx="15" fill="#7CD5CE" opacity="0.6" />
            
            <rect x="160" y="150" width="40" height="200" rx="20" fill="#E8F4F3" stroke="#55B1A8" strokeWidth="4" />
            <rect x="165" y="220" width="30" height="120" rx="15" fill="#1A114D" opacity="0.1" />

            <circle cx="260" cy="270" r="60" fill="#E8F4F3" stroke="#55B1A8" strokeWidth="4" />
            <path d="M260 210 L260 150" stroke="#55B1A8" strokeWidth="8" />
            <rect x="250" y="140" width="20" height="10" fill="#1A114D" />
            <path d="M205 285 Q260 350 315 285 Z" fill="#7CD5CE" opacity="0.6" />

            {/* Bubble accents */}
            <circle cx="120" cy="280" r="5" fill="#FFFFFF" />
            <circle cx="180" cy="250" r="4" fill="#FFFFFF" />
            <circle cx="175" cy="230" r="8" fill="#FFFFFF" />
            <circle cx="250" cy="290" r="12" fill="#FFFFFF" opacity="0.5" />
          </svg>
        </div>

        {/* Gradient Overlay for Text */}
        <div style={{ 
          position: "absolute", bottom: 0, left: 0, right: 0, height: "50%",
          background: "linear-gradient(to top, rgba(85, 40, 60, 0.9) 0%, rgba(85, 40, 60, 0) 100%)",
          display: "flex", alignItems: "flex-end", padding: "40px"
        }}>
          <h3 style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "28px", fontWeight: 700,
            color: "#FFFFFF", margin: 0
          }}>
            Chemicals Industry
          </h3>
          <div style={{ marginLeft: "20px", flex: 1, height: "1px", background: "rgba(255,255,255,0.2)", marginBottom: "14px" }}></div>
        </div>
      </div>

    </section>
  );
}
