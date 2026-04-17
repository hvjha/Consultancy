import React from 'react';
import { COMPANY_LOGOS } from '../data/data';

export default function CompanyMarquee() {
  return (
    <section style={{ 
      background: "transparent", 
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
              background: "transparent", padding: "16px 32px",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "20px", color: "#1A114D",
              display: "flex", justifyContent: "center", alignItems: "center",
              width: "200px", whiteSpace: "nowrap",
            }}>
              {logoText}
            </div>
          ))}
        </div>
        <div className="marquee-content" style={{ display: "flex", gap: "60px", alignItems: "center", paddingRight: "60px" }}>
          {COMPANY_LOGOS.map((logoText, i) => (
            <div key={`copy-${i}`} style={{
              background: "transparent", padding: "16px 32px",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "20px", color: "#1A114D",
              display: "flex", justifyContent: "center", alignItems: "center",
              width: "200px", whiteSpace: "nowrap",
            }}>
              {logoText}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
