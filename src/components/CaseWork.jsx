import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { CASE_STUDIES } from '../data/data';

export default function CaseWork() {
  const [ref, visible] = useInView();
  const scrollRef = useRef(null);

  const scrollLeft = () => { if(scrollRef.current) scrollRef.current.scrollBy({ left: -600, behavior: 'smooth' }); };
  const scrollRight = () => { if(scrollRef.current) scrollRef.current.scrollBy({ left: 600, behavior: 'smooth' }); };

  return (
    <section id="work" ref={ref} style={{ background: "#F5EFE6", padding: "120px 6vw" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "72px", flexWrap: "wrap", gap: "24px" }}>
        <div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "#C8A882", textTransform: "uppercase", marginBottom: "16px" }}>Our Work</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 3.5vw, 48px)", color: "#1A1208", margin: 0 }}>
            Featured Case Studies.
          </h2>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <button onClick={scrollLeft} style={{
            background: "transparent", border: "1px solid rgba(26,18,8,0.2)", borderRadius: "50%",
            width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            color: "#1A1208", transition: "all 0.3s ease"
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(26,18,8,0.05)"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >←</button>
          <button onClick={scrollRight} style={{
            background: "transparent", border: "1px solid rgba(26,18,8,0.2)", borderRadius: "50%",
            width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            color: "#1A1208", transition: "all 0.3s ease"
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(26,18,8,0.05)"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >→</button>
        </div>
      </div>
      <div 
        ref={scrollRef}
        style={{ 
          display: "flex", gap: "40px", overflowX: "auto", scrollSnapType: "x mandatory",
          paddingBottom: "24px", scrollbarWidth: "none", msOverflowStyle: "none"
        }}
        className="hide-scroll"
      >
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scroll::-webkit-scrollbar { display: none; }
        `}} />
        {CASE_STUDIES.map((study, i) => (
          <div key={i} style={{
            flex: "0 0 auto", width: "min(100%, 750px)",
            scrollSnapAlign: "start",
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px",
            alignItems: "center",
            background: "#fff", padding: "32px", borderRadius: "16px", border: "1px solid rgba(26,18,8,0.05)",
            opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: `all 0.6s ease ${i * 0.15}s`,
          }}>
            <div style={{
              width: "100%", aspectRatio: "16/9", background: study.color, borderRadius: "8px",
              display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
              overflow: "hidden"
            }}>
                <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "linear-gradient(#C8A882 1px, transparent 1px), linear-gradient(90deg, #C8A882 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <span style={{ fontFamily: "'Playfair Display', serif", color: "#C8A882", fontSize: "24px", opacity: 0.5, fontStyle: "italic", zIndex: 1 }}>{study.client}</span>
            </div>
            <div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#8A7A60", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>{study.client}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", color: "#1A1208", margin: "0 0 16px" }}>{study.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#5A4E3C", lineHeight: 1.7, margin: "0 0 24px" }}>{study.desc}</p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#C8A882", borderBottom: "1px solid #C8A882", paddingBottom: "4px", fontSize: "12px", letterSpacing: "0.1em", fontFamily: "'DM Sans', sans-serif", textTransform: "uppercase", cursor: "pointer" }}>
                Read Case Study <span style={{ fontSize: "16px" }}>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
