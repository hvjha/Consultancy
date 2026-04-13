import { useInView } from '../hooks/useInView';

export default function About() {
  const [ref, visible] = useInView();
  return (
    <section id="about" ref={ref} style={{
      background: "#F5EFE6", padding: "120px 6vw",
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center",
    }}>
      <div style={{
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.7s ease",
      }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "#C8A882", textTransform: "uppercase", marginBottom: "20px" }}>
          About SSV
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 3.5vw, 48px)", color: "#1A1208", lineHeight: 1.15, margin: "0 0 24px" }}>
          Trusted partners for<br /><em>enduring impact.</em>
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#5A4E3C", lineHeight: 1.75, marginBottom: "20px" }}>
          Founded in 2012, SSV Consulting has grown from a boutique strategy firm into a full-service advisory practice operating across four continents. We believe the best consulting is a genuine collaboration — not a report delivered and forgotten.
        </p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#5A4E3C", lineHeight: 1.75 }}>
          Our team combines deep sector expertise with an entrepreneurial mindset, bringing both rigour and pragmatism to every engagement.
        </p>
      </div>
      <div style={{
        opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(30px)",
        transition: "all 0.7s ease 0.2s",
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px",
      }}>
        {[
          { label: "Strategy", pct: 95 },
          { label: "Digital", pct: 88 },
          { label: "Finance", pct: 91 },
          { label: "Operations", pct: 84 },
        ].map(({ label, pct }) => (
          <div key={label} style={{ background: "#0C0A08", padding: "32px 28px" }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.15em", color: "#C8A882", textTransform: "uppercase", marginBottom: "20px" }}>{label}</div>
            <div style={{ height: "2px", background: "rgba(200,168,130,0.15)", marginBottom: "8px" }}>
              <div style={{ height: "2px", background: "#C8A882", width: visible ? `${pct}%` : "0%", transition: "width 1.2s ease 0.4s" }} />
            </div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", color: "#F5EFE6" }}>{pct}%</div>
          </div>
        ))}
      </div>
    </section>
  );
}
