export default function Footer() {
  return (
    <footer style={{ background: "#050403", padding: "80px 6vw 40px", borderTop: "1px solid rgba(200,168,130,0.1)" }}>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "60px",
        marginBottom: "80px"
      }}>
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", color: "#C8A882", letterSpacing: "0.04em", marginBottom: "24px" }}>
            SSV<span style={{ color: "#fff", fontWeight: 300 }}>Staff Solutions</span>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(245,239,230,0.4)", lineHeight: 1.7 }}>
            A premier management consultancy building the next generation of industry leaders.
          </p>
        </div>
        
        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#F5EFE6", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "24px", fontWeight: 700 }}>Practices</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {["Strategy & Growth", "Digital Transformation", "Financial Advisory", "Operations", "People & Culture"].map(item => (
              <a key={item} href={`#services`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(245,239,230,0.5)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#C8A882"} onMouseLeave={e => e.target.style.color = "rgba(245,239,230,0.5)"}
              >{item}</a>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#F5EFE6", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "24px", fontWeight: 700 }}>Firm</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {["About Us", "Leadership", "Careers", "Insights", "Newsroom"].map(item => (
              <a key={item} href={`#`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(245,239,230,0.5)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#C8A882"} onMouseLeave={e => e.target.style.color = "rgba(245,239,230,0.5)"}
              >{item}</a>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#F5EFE6", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "24px", fontWeight: 700 }}>Global Offices</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(245,239,230,0.5)" }}>London</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(245,239,230,0.5)" }}>New York</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(245,239,230,0.5)" }}>Singapore</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(245,239,230,0.5)" }}>Dubai</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px", paddingTop: "40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(245,239,230,0.3)" }}>
          © {new Date().getFullYear()} SSV Staff Solutions. All rights reserved.
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="#" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(245,239,230,0.3)", textDecoration: "none" }}>Privacy Policy</a>
          <a href="#" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(245,239,230,0.3)", textDecoration: "none" }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
