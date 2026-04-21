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
        <div className="marquee-content" style={{ display: "flex", gap: "80px", alignItems: "center", paddingRight: "80px" }}>
          {COMPANY_LOGOS.map((logo, i) => (
            <div key={i} style={{
              background: "transparent", padding: "16px 0",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "20px", color: "#1A114D",
              display: "flex", justifyContent: "center", alignItems: "center", gap: "12px",
              whiteSpace: "nowrap",
            }}>
              {logo.domain && (
                <img 
                  src={`https://www.google.com/s2/favicons?domain=${logo.domain}&sz=64`} 
                  alt={logo.name + " logo"} 
                  style={{ width: "28px", height: "28px", objectFit: "contain", borderRadius: "4px" }} 
                  onError={(e) => { e.target.style.display = 'none'; }} 
                />
              )}
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
        <div className="marquee-content" style={{ display: "flex", gap: "80px", alignItems: "center", paddingRight: "80px" }}>
          {COMPANY_LOGOS.map((logo, i) => (
            <div key={`copy-${i}`} style={{
              background: "transparent", padding: "16px 0",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "20px", color: "#1A114D",
              display: "flex", justifyContent: "center", alignItems: "center", gap: "12px",
              whiteSpace: "nowrap",
            }}>
              {logo.domain && (
                <img 
                  src={`https://www.google.com/s2/favicons?domain=${logo.domain}&sz=64`} 
                  alt={logo.name + " logo"} 
                  style={{ width: "28px", height: "28px", objectFit: "contain", borderRadius: "4px" }} 
                  onError={(e) => { e.target.style.display = 'none'; }} 
                />
              )}
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
