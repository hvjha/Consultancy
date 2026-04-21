import React from 'react';
import { WELCOME_FEATURES } from '../data/data';

// A simple SVG placeholder for Welcome Graphic
const WelcomeGraphic = () => (
  <svg viewBox="0 0 500 400" width="100%" height="100%">
    {/* Colored curved paths matching the concept */}
    <path d="M50 350 Q 150 250 250 350 T 450 150" fill="none" stroke="#FFB703" strokeWidth="12" />
    <path d="M50 150 Q 200 150 250 250 T 450 350" fill="none" stroke="#d90429" strokeWidth="12" />
    <path d="M100 400 Q 250 300 200 100 T 400 50" fill="none" stroke="#8A2BE2" strokeWidth="12" />
    <path d="M50 50 Q 100 250 300 200 T 450 250" fill="none" stroke="#55B1A8" strokeWidth="12" />
    <path d="M350 400 Q 300 150 200 200 T 50 250" fill="none" stroke="#444" strokeWidth="12" strokeDasharray="10, 5" />
    
    {/* Abstract people standing around */}
    <circle cx="150" cy="220" r="10" fill="#1A114D" />
    <rect x="145" y="235" width="10" height="25" fill="#1A114D" />
    
    <circle cx="280" cy="180" r="10" fill="#d90429" />
    <rect x="275" y="195" width="10" height="25" fill="#d90429" />

    <circle cx="420" cy="130" r="10" fill="#FFB703" />
    <rect x="415" y="145" width="10" height="25" fill="#FFB703" />

    <circle cx="80" cy="130" r="10" fill="#55B1A8" />
    <rect x="75" y="145" width="10" height="25" fill="#55B1A8" />
  </svg>
);

export default function WelcomeSection() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "80px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        
        <h5 style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700,
          letterSpacing: "1.5px", color: "#666", textTransform: "uppercase", marginBottom: "16px"
        }}>
          Welcome to SSV Staff Solution
        </h5>
        
        <h2 style={{
          fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
          fontSize: "clamp(32px, 3vw, 42px)", color: "#55B1A8", margin: "0 0 16px"
        }}>
          Your Dynamic Executive Talent Acquisition Partner
        </h2>
        
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#1A114D",
          maxWidth: "800px", margin: "0 auto 60px", lineHeight: 1.6
        }}>
          We are the preferred executive search firm for leading organizations in India and multinational corporations operating in the Indian market.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "60px", textAlign: "left" }}>
          
          <div style={{ flex: 1, minWidth: "300px" }}>
            <WelcomeGraphic />
          </div>
          
          <div style={{ flex: 1, minWidth: "300px" }}>
            <h3 style={{
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
               fontSize: "32px", color: "#55B1A8", marginBottom: "20px"
            }}>
              Discover Your Next Executive on SSV
            </h3>
            
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#1A114D",
              lineHeight: 1.6, marginBottom: "40px"
            }}>
              SSV is your premier destination for hiring top executive talent. Whether you're seeking a visionary CEO, a strategic CFO, or a dynamic executive leader, SSV has the resources and expertise to find the perfect match for your organization.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
              {WELCOME_FEATURES.map((feature, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "50%", background: "#F4EFEA",
                    display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0
                  }}>
                    <svg width="24" height="24" fill="none" stroke="#55B1A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={feature.iconPath} />
                    </svg>
                  </div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 700,
                    color: "#55B1A8"
                  }}>
                    {feature.title}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
