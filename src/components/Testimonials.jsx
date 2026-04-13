import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { TESTIMONIALS } from '../data/data';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [ref, visible] = useInView();
  
  return (
    <section id="testimonials" ref={ref} style={{ background: "#F5EFE6", padding: "120px 6vw" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "#C8A882", textTransform: "uppercase", marginBottom: "40px" }}>Client Perspectives</p>
        
        <div style={{ position: "relative", minHeight: "300px" }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{
              position: "absolute", top: 0, left: 0, right: 0,
              opacity: active === i ? 1 : 0, transform: active === i ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s cubic-bezier(0.25, 1, 0.5, 1)", pointerEvents: active === i ? "auto" : "none",
            }}>
              <div style={{ fontSize: "60px", color: t.color, fontFamily: "serif", lineHeight: 0.8, opacity: 0.3, marginBottom: "20px" }}>"</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#1A1208", lineHeight: 1.5, marginBottom: "40px" }}>
                {t.quote}
              </h3>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: t.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 600 }}>
                  {t.initials}
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#1A1208", fontWeight: 700, fontSize: "15px", marginBottom: "2px" }}>{t.name}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#8A7A60", fontSize: "13px" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "40px" }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width: "12px", height: "12px", borderRadius: "50%", background: active === i ? "#C8A882" : "rgba(200,168,130,0.3)",
              border: "none", cursor: "pointer", transition: "all 0.3s"
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
