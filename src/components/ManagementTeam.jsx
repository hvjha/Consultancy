import React from 'react';

const TEAM_MEMBERS = [
  {
    name: "Purnima Kajla",
    title: "Director & Founder",
    bio: "16+ years of entrepreneurial experience responsible for leading the company's vision, driving its business growth\n\nBefore that, she spent ten years at Henkel as a founding member of a new line of acoustic products for industrial, automotive, and consumer durable applications. Worked on job rotations in Germany, France, Korea & Australia as a part of a Technology transfer assignment. Post-graduation from IIT Delhi.",
    imagePath: "purnima_placeholder.jpg"
  },
  {
    name: "Ankita Paliwal",
    title: "Head Operations",
    bio: "Heading the service delivery that brings the full potential of SSVC to our clients. Her role as Head of Operations is to ensure client success. Ankita brings in close to 15 years of experience and has a successful track record to help the organization grow existing businesses and accelerate new businesses. Responsible for managing the delivery of all services that improve customer value and ROI. Self-starter with strong interpersonal skills.\n\nAnkita Paliwal holds a masters degree in Human Resources.",
    imagePath: "ankita_placeholder.jpg"
  }
];

export default function ManagementTeam() {
  return (
    <section>
      {/* Hero Header matching screenshot 1 */}
      <div style={{ background: "#67B7A9", padding: "120px 6vw 60px", textAlign: "center", color: "#FFF", position: "relative", overflow: "hidden" }}>
         {/* Abstract light graphic in background */}
         <div style={{ position: "absolute", inset: 0, opacity: 0.15, display: "flex", justifyContent: "center", alignItems: "center", pointerEvents: "none" }}>
           <svg viewBox="0 0 800 400" width="100%" height="100%">
             <circle cx="400" cy="200" r="150" fill="#FFFFFF" />
             <path d="M200 300 Q400 100 600 300" stroke="#FFFFFF" strokeWidth="20" fill="none" />
             <rect x="350" y="150" width="100" height="80" rx="10" fill="#1A114D" />
           </svg>
         </div>
         <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 700, margin: 0, position: "relative", zIndex: 1 }}>Meet Our Team</h1>
         <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", opacity: 0.9, marginTop: "20px", position: "relative", zIndex: 1, textTransform: "uppercase" }}>
           HOME <span style={{ margin: "0 6px" }}>_</span> ABOUT <span style={{ margin: "0 6px" }}>_</span> MEET OUR TEAM
         </div>
      </div>

      <div style={{ padding: "80px 20px", background: "#FFFFFF", textAlign: "center" }}>
        {/* Section Titles */}
        <div style={{ 
          display: "inline-flex", alignItems: "center", gap: "8px",
          backgroundColor: "#F4EFEA", color: "#1A114D", padding: "6px 16px", borderRadius: "4px",
          fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px",
          fontFamily: "'DM Sans', sans-serif", marginBottom: "20px"
        }}>
          OUR LEADERSHIP TEAM
        </div>
        <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, color: "#55B1A8", margin: "0 0 16px" }}>
          Board of Directors & Senior Executives
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#1A114D", maxWidth: "700px", margin: "0 auto 60px" }}>
          Our accomplished leaders bring a wealth of expertise and experience to our organization
        </p>

        {/* Team Members Grid */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px", maxWidth: "1000px", margin: "0 auto" }}>
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} style={{ 
              flex: "1 1 350px", 
              maxWidth: "400px", 
              display: "flex", flexDirection: "column", alignItems: "center",
              background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.05)",
              borderRadius: "12px", overflow: "hidden", paddingBottom: "30px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
            }}>
              
              {/* Photo Placeholder mimicking screenshot 2 aspect ratio */}
              <div style={{ 
                width: "100%", height: "350px", background: "#E8F1F2", 
                position: "relative", overflow: "hidden", marginBottom: "30px",
                display: "flex", justifyContent: "center", alignItems: "flex-end"
              }}>
                 {/* Silhouette placeholder */}
                 <svg width="200" height="250" viewBox="0 0 200 250" fill="none">
                    <circle cx="100" cy="80" r="50" fill="#B0B7C3" />
                    <path d="M20 250 Q100 130 180 250" fill="#B0B7C3" />
                 </svg>
                 {/* Gradient Vignette overlay seen in screenshot 2 */}
                 <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle, transparent 40%, rgba(255,255,255,0.7) 100%)" }}></div>
              </div>

              <div style={{ padding: "0 30px", width: "100%", boxSizing: "border-box" }}>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "20px", fontWeight: 700, color: "#55B1A8", margin: "0 0 6px" }}>
                  {member.name}
                </h3>
                <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 700, color: "#1A114D", margin: "0 0 20px" }}>
                  {member.title}
                </h4>
                
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#666", lineHeight: 1.6, textAlign: "center" }}>
                  {member.bio.split('\n\n').map((paragraph, i) => (
                    <p key={i} style={{ margin: "0 0 12px" }}>{paragraph}</p>
                  ))}
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
