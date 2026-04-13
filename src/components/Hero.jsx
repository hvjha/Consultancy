import heroGraphic from '../assets/hero-graphic.png';
import { STATS } from '../data/data';

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", padding: "0 6vw",
      background: "#0C0A08",
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative grid lines */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(200,168,130,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,130,0.04) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        pointerEvents: "none",
      }} />
      {/* Glow accent */}
      <div style={{
        position: "absolute", right: "-10%", top: "10%",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,168,130,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ 
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px",
        alignItems: "center", position: "relative", zIndex: 1, 
        width: "100%", maxWidth: "1200px", margin: "0 auto", paddingBottom: "80px"
      }}>
        <div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.25em",
            color: "#C8A882", textTransform: "uppercase", marginBottom: "28px",
            display: "flex", alignItems: "center", gap: "10px",
          }}>
            <span style={{ display: "inline-block", width: "32px", height: "1px", background: "#C8A882" }} />
            Management & Strategy Consultancy
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: "clamp(42px, 5vw, 72px)", lineHeight: 1.05,
            color: "#F5EFE6", margin: "0 0 28px", letterSpacing: "-0.01em",
          }}>
            Transform<br />
            <span style={{ color: "#C8A882", fontStyle: "italic" }}>Complexity</span><br />
            Into Clarity.
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "17px", color: "rgba(245,239,230,0.6)",
            lineHeight: 1.7, maxWidth: "480px", marginBottom: "44px",
          }}>
            We partner with ambitious organisations to solve their most consequential challenges — from strategy to execution.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="#services" style={{
              background: "#C8A882", color: "#0C0A08", padding: "15px 36px",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "13px",
              letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.target.style.background = "#e0c09a"}
            onMouseLeave={e => e.target.style.background = "#C8A882"}
            >Our Services</a>
            <a href="#about" style={{
              border: "1px solid rgba(200,168,130,0.4)", color: "#C8A882",
              padding: "15px 36px", fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500, fontSize: "13px", letterSpacing: "0.1em",
              textTransform: "uppercase", textDecoration: "none", transition: "border-color 0.2s",
            }}
            onMouseEnter={e => e.target.style.borderColor = "#C8A882"}
            onMouseLeave={e => e.target.style.borderColor = "rgba(200,168,130,0.4)"}
            >Our Story</a>
          </div>
        </div>
        
        {/* Right side image */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ 
            position: "relative", width: "100%", maxWidth: "500px", aspectRatio: "4/5",
            borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(200,168,130,0.2)"
          }}>
            <div style={{ 
              position: "absolute", inset: 0, 
              background: "linear-gradient(to top right, rgba(12,10,8,0.8), transparent)", 
              zIndex: 1, pointerEvents: "none" 
            }}></div>
            <img 
              src={heroGraphic} 
              alt="Strategy Consulting Abstract" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
            {/* Minimalist floating element */}
            <div style={{ 
              position: "absolute", bottom: "30px", left: "-20px", zIndex: 2,
              background: "rgba(12,10,8,0.7)", backdropFilter: "blur(12px)", 
              border: "1px solid rgba(200,168,130,0.3)", padding: "16px 24px",
              display: "flex", alignItems: "center", gap: "16px"
            }}>
              <div style={{ width: "8px", height: "8px", background: "#C8A882", borderRadius: "50%" }}></div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#F5EFE6", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Future proofing<br/><span style={{ color: "#C8A882" }}>the enterprise</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        display: "flex", borderTop: "1px solid rgba(200,168,130,0.12)",
        background: "rgba(255,255,255,0.02)",
      }}>
        {STATS.map((s, i) => (
          <div key={i} style={{
            flex: 1, padding: "28px 0", textAlign: "center",
            borderRight: i < STATS.length - 1 ? "1px solid rgba(200,168,130,0.12)" : "none",
          }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", color: "#C8A882", marginBottom: "4px" }}>{s.value}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: "rgba(245,239,230,0.4)", textTransform: "uppercase" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
