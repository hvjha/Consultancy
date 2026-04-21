import React from 'react';

const WorkingPrinciples = () => {
  const principles = [
    {
      num: "01",
      title: "Partnership",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ width: "48px", height: "48px" }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      desc: "SSV is committed to providing dedicated and decisive support. We work closely with management, thoroughly understanding priorities to deliver exceptional services."
    },
    {
      num: "02",
      title: "Integrity",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ width: "48px", height: "48px" }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      desc: "Operating in an environment of complete openness and transparency. We proudly represent our clients and candidates with an unwavering commitment to honesty."
    },
    {
      num: "03",
      title: "Confidentiality",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ width: "48px", height: "48px" }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path>
        </svg>
      ),
      desc: "We place the highest value on protecting sensitive information. Guaranteeing that your confidential objectives are treated with the utmost respect."
    }
  ];

  return (
    <section style={{ position: "relative", backgroundColor: "#1A114D", padding: "120px 20px", overflow: "hidden", color: "#FFF" }}>
      
      {/* Visual Background Elements */}
      <div style={{
        position: "absolute", top: "-10%", left: "-5%", width: "500px", height: "500px",
        borderRadius: "50%", background: "radial-gradient(circle, rgba(85, 177, 168, 0.4) 0%, rgba(85, 177, 168, 0) 70%)",
        pointerEvents: "none"
      }}></div>
      
      <div style={{
        position: "absolute", bottom: "-20%", right: "-10%", width: "600px", height: "600px",
        borderRadius: "50%", background: "radial-gradient(circle, rgba(124, 213, 206, 0.3) 0%, rgba(85, 177, 168, 0) 70%)",
        pointerEvents: "none"
      }}></div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        
        {/* Header Area */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div style={{ 
            display: "inline-flex", alignItems: "center", gap: "8px",
            backgroundColor: "rgba(255, 255, 255, 0.1)", 
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#7CD5CE", padding: "6px 16px", borderRadius: "30px",
            fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px",
            fontFamily: "'DM Sans', sans-serif"
          }}>
            <span style={{ width: "8px", height: "8px", backgroundColor: "#7CD5CE", borderRadius: "50%" }}></span>
            Core Values
          </div>
          <h2 style={{ 
            fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(36px, 5vw, 48px)", 
            fontWeight: 700, marginTop: "24px", color: "#FFFFFF"
          }}>
            Our Working Principles
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#B0B7C3", maxWidth: "600px", margin: "16px auto 0" }}>
            The foundational pillars that guide our methodology, ensuring exceptional executive talent acquisition.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
          {principles.map((p, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: "rgba(255, 255, 255, 0.03)", 
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                padding: "50px 40px",
                position: "relative",
                transition: "all 0.4s ease",
                cursor: "default"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
                e.currentTarget.style.borderColor = "rgba(85, 177, 168, 0.5)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <div style={{ 
                position: "absolute", top: "40px", right: "40px", 
                fontFamily: "'DM Sans', sans-serif", fontSize: "60px", 
                fontWeight: 800, color: "rgba(255, 255, 255, 0.05)",
                lineHeight: 1
              }}>
                {p.num}
              </div>

              <div style={{ 
                width: "80px", height: "80px", borderRadius: "20px", 
                background: "linear-gradient(135deg, #7CD5CE, #55B1A8)",
                display: "flex", justifyContent: "center", alignItems: "center",
                color: "#1A114D", marginBottom: "30px",
                boxShadow: "0 10px 20px rgba(85, 177, 168, 0.3)"
              }}>
                 {p.icon}
              </div>
              
              <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "24px", fontWeight: 700, margin: "0 0 16px", color: "#FFFFFF" }}>
                {p.title}
              </h4>
              
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", lineHeight: 1.7, color: "#B0B7C3", margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingPrinciples;
