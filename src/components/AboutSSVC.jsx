import React from 'react';

const AboutIllustration = () => (
  <svg viewBox="0 0 500 350" width="100%" height="100%">
    {/* Abstract representation of the illustration in the screenshot */}
    <rect x="0" y="50" width="500" height="300" fill="#E8F1F2" rx="20" />
    <path d="M100 250 Q150 150 250 250 T400 150" stroke="#FFB703" strokeWidth="8" fill="none" opacity="0.3" />
    <circle cx="250" cy="250" r="120" fill="#FFFFFF" opacity="0.5" />
    {/* People placeholders at computers */}
    <rect x="80" y="160" width="80" height="60" rx="5" fill="#1A114D" />
    <rect x="100" y="220" width="40" height="10" fill="#55B1A8" />
    <circle cx="120" cy="120" r="25" fill="#FFB703" />

    <rect x="340" y="160" width="80" height="60" rx="5" fill="#1A114D" />
    <rect x="360" y="220" width="40" height="10" fill="#55B1A8" />
    <circle cx="380" cy="120" r="25" fill="#d90429" />
    
    <rect x="60" y="230" width="380" height="15" fill="#55B1A8" />
    <rect x="90" y="245" width="10" height="100" fill="#666" />
    <rect x="400" y="245" width="10" height="100" fill="#666" />
  </svg>
);

export default function AboutSSVC() {
  return (
    <section id="about" style={{ background: "#FFFFFF", padding: "100px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "stretch" }}>
        
        {/* Left Column */}
        <div style={{ flex: 1, minWidth: "340px", display: "flex", flexDirection: "column" }}>
          <div style={{ background: "#F4EFEA", borderRadius: "10px", padding: "20px", display: "flex", justifyContent: "center" }}>
            <AboutIllustration />
          </div>
          <div style={{
            background: "#55B1A8", color: "#FFFFFF", padding: "40px",
            borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px",
            textAlign: "center"
          }}>
            <div style={{ marginBottom: "20px" }}>
              <svg width="40" height="40" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.184 1.991-.518 2.896m-6.643 5.4c1.07.6 2.296 1.026 3.6 1.2M16 11l4-4m0 0l4 4m-4-4v10"/>
              </svg>
            </div>
            <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 700, lineHeight: 1.5, marginBottom: "30px" }}>
              Our accomplished leaders bring a wealth of expertise and experience to our organization
            </h4>
            <a href="#visionary" style={{
              display: "inline-block", background: "#1A114D", color: "#FFFFFF",
              padding: "14px 28px", textDecoration: "none", fontSize: "13px",
              fontWeight: 700, fontFamily: "'DM Sans', sans-serif", borderRadius: "4px"
            }}>
              OUR VISIONARY LEADERS &rarr;
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ flex: 1, minWidth: "340px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h5 style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700,
            letterSpacing: "1.5px", color: "#666", textTransform: "uppercase", marginBottom: "16px"
          }}>
            ABOUT SSVC
          </h5>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
            fontSize: "clamp(34px, 4vw, 44px)", color: "#55B1A8", margin: "0 0 24px", lineHeight: 1.1
          }}>
            Discovering Executives.<br />Building Success.
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#1A114D",
            lineHeight: 1.7, marginBottom: "40px"
          }}>
            At SSVC, we are dedicated to providing exceptional services in the field of executive search and talent acquisition. With a strong reputation built over 16 years, we have become a trusted partner for leading Indian and multinational companies in India.
          </p>

          <a href="#more" style={{
            color: "#55B1A8", fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px", fontWeight: 700, letterSpacing: "1px",
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px",
            marginBottom: "50px"
          }}>
            MORE ABOUT US &rarr;
          </a>

          {/* Quote Bubble */}
          <div style={{
            background: "#F4EFEA", borderRadius: "0 40px 40px 40px", padding: "40px",
            position: "relative", borderLeft: "4px solid #1A114D"
          }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 700,
              color: "#55B1A8", margin: 0, lineHeight: 1.6
            }}>
              We strive to be the preferred executive search partner for our clients, delivering outstanding results and contributing to their success
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
