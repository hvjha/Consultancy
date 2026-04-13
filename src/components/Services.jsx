import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { SERVICES } from '../data/data';

export default function Services() {
  const [ref, visible] = useInView();
  const scrollRef = useRef(null);

  const scrollLeft = () => { if(scrollRef.current) scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' }); };
  const scrollRight = () => { if(scrollRef.current) scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' }); };

  return (
    <section id="services" ref={ref} style={{ background: "#0C0A08", padding: "120px 6vw" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "72px", flexWrap: "wrap", gap: "24px" }}>
        <div style={{ maxWidth: "560px" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "#C8A882", textTransform: "uppercase", marginBottom: "16px" }}>What We Do</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 3.5vw, 48px)", color: "#F5EFE6", lineHeight: 1.15, margin: 0 }}>
            Six practices,<br /><em style={{ color: "#C8A882" }}>one mission.</em>
          </h2>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <button onClick={scrollLeft} style={{
            background: "transparent", border: "1px solid rgba(200,168,130,0.4)", borderRadius: "50%",
            width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            color: "#C8A882", transition: "all 0.3s ease"
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(200,168,130,0.1)"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >←</button>
          <button onClick={scrollRight} style={{
            background: "transparent", border: "1px solid rgba(200,168,130,0.4)", borderRadius: "50%",
            width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            color: "#C8A882", transition: "all 0.3s ease"
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(200,168,130,0.1)"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >→</button>
        </div>
      </div>
      <div 
        ref={scrollRef}
        style={{
          display: "flex", gap: "24px", overflowX: "auto", scrollSnapType: "x mandatory",
          paddingBottom: "24px", scrollbarWidth: "none", msOverflowStyle: "none"
        }}
        className="hide-scroll"
      >
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scroll::-webkit-scrollbar { display: none; }
        `}} />
        {SERVICES.map((s, i) => (
          <div key={i} style={{
            flex: "0 0 auto", width: "min(100%, 360px)",
            scrollSnapAlign: "start",
            background: "#141008", padding: "44px 36px", border: "1px solid rgba(200,168,130,0.1)",
            opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s, background 0.3s ease`,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#1D170C"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#141008"; }}
          >
            <div style={{ fontSize: "24px", color: "#C8A882", marginBottom: "20px", fontFamily: "monospace" }}>{s.icon}</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "#F5EFE6", margin: "0 0 12px", fontWeight: 600 }}>{s.title}</h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(245,239,230,0.6)", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
            <div style={{ marginTop: "28px", display: "flex", alignItems: "center", gap: "8px", color: "#C8A882", fontSize: "12px", letterSpacing: "0.1em", fontFamily: "'DM Sans', sans-serif", textTransform: "uppercase" }}>
              Learn more <span style={{ fontSize: "16px" }}>→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
