import React from 'react';
import { COMPANY_LOGOS } from '../data/data';

export default function CompanyMarquee() {
  return (
    <section style={{ 
      background: "#55B1A8", 
      padding: "30px 0", 
      overflow: "hidden", 
      display: "flex", 
      alignItems: "center" 
    }}>
      <div className="marquee-container" style={{
        display: "flex",
        width: "max-content",
      }}>
        {/* We render the logos twice to create a seamless infinite loop */}
        <div className="marquee-content" style={{ display: "flex", gap: "60px", alignItems: "center", paddingRight: "60px" }}>
          {COMPANY_LOGOS.map((logoText, i) => (
            <div key={i} style={{
              background: "#FFFFFF", padding: "16px 32px",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "20px", color: "#1A114D",
              display: "flex", justifyContent: "center", alignItems: "center",
              minWidth: "160px", whiteSpace: "nowrap", borderRadius: "2px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}>
              {logoText}
            </div>
          ))}
        </div>
        <div className="marquee-content" style={{ display: "flex", gap: "60px", alignItems: "center", paddingRight: "60px" }}>
          {COMPANY_LOGOS.map((logoText, i) => (
            <div key={`copy-${i}`} style={{
              background: "#FFFFFF", padding: "16px 32px",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "20px", color: "#1A114D",
              display: "flex", justifyContent: "center", alignItems: "center",
              minWidth: "160px", whiteSpace: "nowrap", borderRadius: "2px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}>
              {logoText}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
