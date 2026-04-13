import { useInView } from '../hooks/useInView';

export default function Contact() {
  const [ref, visible] = useInView();
  return (
    <section id="contact" ref={ref} style={{ background: "#0C0A08", padding: "120px 6vw", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", left: "-10%", bottom: "-10%",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,168,130,0.06) 0%, transparent 70%)", pointerEvents: "none"
      }} />
      <div style={{
        maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "80px",
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease",
      }}>
        <div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "#C8A882", textTransform: "uppercase", marginBottom: "20px" }}>Start a Conversation</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 3.5vw, 48px)", color: "#F5EFE6", lineHeight: 1.15, margin: "0 0 24px" }}>
            The next era of your business <em>starts here.</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "rgba(245,239,230,0.5)", lineHeight: 1.7, marginBottom: "40px" }}>
            Whether you're facing unprecedented disruption or aggressively pursuing growth, we're ready to partner.
          </p>
          <div>
            <div style={{ marginBottom: "24px" }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.15em", color: "#C8A882", textTransform: "uppercase", marginBottom: "8px" }}>Global Headquarters</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#F5EFE6", fontSize: "15px" }}>Level 42, The Leadenhall Building<br/>122 Leadenhall Street<br/>London, EC3V 4AB</div>
            </div>
            <div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.15em", color: "#C8A882", textTransform: "uppercase", marginBottom: "8px" }}>Direct Enquiries</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#F5EFE6", fontSize: "15px" }}>partnerships@ssvconsulting.com<br/>+44 (0) 20 7946 0882</div>
            </div>
          </div>
        </div>
        
        <form onSubmit={e => e.preventDefault()} style={{ background: "#141008", padding: "48px", border: "1px solid rgba(200,168,130,0.15)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}>
            <input placeholder="First Name" style={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "12px 0", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontSize: "14px", outline: "none" }} />
            <input placeholder="Last Name" style={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "12px 0", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontSize: "14px", outline: "none" }} />
          </div>
          <div style={{ marginBottom: "24px" }}>
            <input placeholder="Company Email" type="email" style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "12px 0", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontSize: "14px", outline: "none" }} />
          </div>
          <div style={{ marginBottom: "24px" }}>
            <input placeholder="Organisation Name" style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "12px 0", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontSize: "14px", outline: "none" }} />
          </div>
          <div style={{ marginBottom: "40px" }}>
            <textarea placeholder="How can we help?" rows={3} style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "12px 0", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontSize: "14px", outline: "none", resize: "none" }} />
          </div>
          <button style={{
            width: "100%", background: "#C8A882", color: "#0C0A08", padding: "16px 0", border: "none",
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.1em",
            textTransform: "uppercase", cursor: "pointer", transition: "background 0.2s"
          }}
          onMouseEnter={e => e.target.style.background = "#e0c09a"}
          onMouseLeave={e => e.target.style.background = "#C8A882"}
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
