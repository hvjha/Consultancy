import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/data';

// More sophisticated Abstract SVG Composition for Graphics
const HeroGraphic = ({ layout }) => (
  <div style={{
    width: "100%", maxWidth: "550px", aspectRatio: "1/1",
    position: "relative",
    display: "flex", justifyContent: "center", alignItems: "center"
  }}>
    {/* Background Blob/Shape */}
    <div style={{
      position: "absolute",
      width: "80%", height: "80%",
      background: layout === 'image-left' ? "linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)" : "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)",
      borderRadius: layout === 'image-left' ? "40% 60% 70% 30% / 40% 50% 60% 50%" : "60% 40% 30% 70% / 60% 30% 70% 40%",
      transition: "border-radius 8s ease-in-out alternate infinite",
      animation: "blobBounce 10s infinite alternate"
    }} />

    {/* Floating Glassmorphism Card 1 */}
    <div style={{
      position: "absolute", top: "10%", left: "10%",
      width: "50%", height: "40%",
      background: "rgba(255, 255, 255, 0.4)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderRadius: "16px",
      border: "1px solid rgba(255, 255, 255, 0.8)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      padding: "20px", display: "flex", flexDirection: "column", gap: "10px",
      transform: "translateY(0px)",
      animation: "floatSlow 6s ease-in-out infinite"
    }}>
       <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#55B1A8" }} />
       <div style={{ width: "80%", height: "8px", borderRadius: "4px", background: "#ddd" }} />
       <div style={{ width: "60%", height: "8px", borderRadius: "4px", background: "#ddd" }} />
    </div>

    {/* Floating Glassmorphism Card 2 */}
    <div style={{
      position: "absolute", bottom: "10%", right: "10%",
      width: "45%", height: "35%",
      background: "rgba(255, 255, 255, 0.5)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderRadius: "16px",
      border: "1px solid rgba(255, 255, 255, 0.8)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      padding: "20px", display: "flex", flexDirection: "column", gap: "10px",
      transform: "translateY(0px)",
      animation: "floatSlow 5s ease-in-out infinite reverse"
    }}>
       <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <div style={{ width: "30%", height: "24px", borderRadius: "4px", background: "#FF5E5B" }} />
          <div style={{ width: "70%", height: "12px", borderRadius: "4px", background: "#eee" }} />
       </div>
       <div style={{ width: "100%", height: "40px", borderRadius: "8px", background: "#eee", marginTop: "auto" }} />
    </div>
    
    <style>{`
      @keyframes blobBounce {
        0% { transform: scale(1) translate(0, 0); }
        50% { transform: scale(1.05) translate(10px, -15px); }
        100% { transform: scale(0.95) translate(-10px, 15px); }
      }
      @keyframes floatSlow {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0px); }
      }
      .slide-content-enter {
        opacity: 0;
        transform: translateY(30px);
      }
      .slide-content-active {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      }
    `}</style>
  </div>
);

export default function HeroCarousel({ onNavigateService }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); // slightly longer for reading
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ position: "relative", width: "100%", overflow: "hidden", minHeight: "100vh", display: "flex", background: "#fcfcff" }}>
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        const isImageLeft = slide.layout === 'image-left';

        return (
          <div key={slide.id} style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: isActive ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            pointerEvents: isActive ? "auto" : "none",
            zIndex: isActive ? 1 : 0
          }}>
            {/* Dynamic Backgrounds */}
            <div style={{ position: "absolute", left: 0, width: "100%", height: "100%", background: "radial-gradient(circle at 20% 50%, rgba(85, 177, 168, 0.05) 0%, rgba(255,255,255,0) 60%)", zIndex: -1 }}></div>
            <div style={{ position: "absolute", right: 0, width: "100%", height: "100%", background: "radial-gradient(circle at 80% 50%, rgba(255, 94, 91, 0.03) 0%, rgba(255,255,255,0) 60%)", zIndex: -1 }}></div>

            <div style={{
              width: "100%", maxWidth: "1280px", margin: "0 auto",
              display: "flex", flexDirection: isImageLeft ? "row" : "row-reverse",
              alignItems: "center", justifyContent: "space-between",
              padding: "80px 6vw 0", // header offset
              gap: "4vw"
            }}>
              
              {/* Graphic Side */}
              <div 
                className={isActive ? "slide-content-active" : "slide-content-enter"}
                style={{ 
                  flex: 1, display: "flex", justifyContent: "center",
                  transitionDelay: "0.2s" // Stagger animation
                }}>
                <HeroGraphic layout={slide.layout} />
              </div>

              {/* Text Side */}
              <div 
                className={isActive ? "slide-content-active" : "slide-content-enter"}
                style={{ 
                  flex: 1,
                  display: "flex", flexDirection: "column", alignItems: "flex-start",
                  transitionDelay: "0.1s" // Text enters slightly before graphic
                }}>
                <div style={{
                  display: "inline-block",
                  padding: "6px 16px",
                  background: "rgba(85, 177, 168, 0.1)",
                  borderRadius: "30px",
                  marginBottom: "24px"
                }}>
                  <h4 style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: "12px",
                    fontWeight: 800, letterSpacing: "1.5px",
                    color: "#55B1A8", textTransform: "uppercase", margin: 0
                  }}>
                    {slide.title}
                  </h4>
                </div>
                
                <h1 style={{
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 800,
                  fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1.15,
                  color: "#1A114D", margin: "0 0 24px",
                  letterSpacing: "-1px"
                }}>
                  {slide.heading}
                </h1>
                
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(16px, 1.5vw, 18px)",
                  color: "#5f6c82", lineHeight: 1.6, marginBottom: "40px",
                  maxWidth: "90%"
                }}>
                  {slide.desc}
                </p>
                
                <a href="#more" style={{
                  background: "linear-gradient(135deg, #55B1A8 0%, #44A096 100%)", 
                  color: "#FFFFFF", padding: "16px 36px",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "15px",
                  textDecoration: "none", borderRadius: "8px",
                  boxShadow: "0 8px 20px rgba(85, 177, 168, 0.3)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  display: "inline-block"
                }}
                onClick={(e) => { e.preventDefault(); if (onNavigateService) onNavigateService(slide.tabId); }}
                onMouseEnter={e => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow = "0 12px 24px rgba(85, 177, 168, 0.4)";
                }}
                onMouseLeave={e => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 8px 20px rgba(85, 177, 168, 0.3)";
                }}
                >
                  {slide.buttonText}
                </a>
              </div>

            </div>
          </div>
        );
      })}

      {/* Slide Indicators */}
      <div style={{
        position: "absolute", bottom: "40px", left: "6vw", // Align with left edge of content
        display: "flex", gap: "10px", zIndex: 10
      }}>
        {HERO_SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrentSlide(i)} style={{
            width: i === currentSlide ? "36px" : "10px", 
            height: "10px", 
            borderRadius: "10px",
            background: i === currentSlide ? "#55B1A8" : "rgba(26, 17, 77, 0.2)",
            border: "none", cursor: "pointer", transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)"
          }} aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
