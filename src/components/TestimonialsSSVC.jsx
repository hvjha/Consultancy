import React from 'react';

const QuoteIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40">
    <path d="M 0 0 L 40 0 L 40 40 C 40 40, 40 0, 0 0" fill="transparent" /> 
    {/* It looks like a ribbon or just a corner box */}
    <rect x="0" y="0" width="40" height="40" fill="#55B1A8" borderBottomLeftRadius="20px" style={{ rx: 0, ry: 0, borderBottomLeftRadius: 20 }} />
    <path d="M 12 24 L 16 16 L 20 16 L 16 24 Z M 22 24 L 26 16 L 30 16 L 26 24 Z" fill="#FFFFFF" />
  </svg>
);

const CornerQuote = () => (
  <div style={{
    position: "absolute", top: 0, right: 0,
    width: "48px", height: "48px", background: "#55B1A8",
    borderBottomLeftRadius: "24px",
    display: "flex", alignItems: "center", justifyContent: "center"
  }}>
    <span style={{ color: "#FFFFFF", fontSize: "36px", fontFamily: "serif", lineHeight: 0, marginTop: "24px", marginLeft: "4px" }}>"</span>
  </div>
);

const TestimonialCard = ({ author, role, company, review }) => (
  <div style={{
    flex: "0 0 400px", minHeight: "220px", background: "#FFFFFF",
    borderRadius: "8px", position: "relative", overflow: "hidden",
    padding: "32px", display: "flex", flexDirection: "column",
    boxShadow: "0 4px 15px rgba(0,0,0,0.03)"
  }}>
    <CornerQuote />
    
    <div style={{ marginBottom: "20px", paddingRight: "40px" }}>
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 700, color: "#55B1A8" }}>
        {author}
      </span>
      {role && <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700, color: "#888", marginLeft: "6px", textTransform: "uppercase" }}>{role}</span>}
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#1A114D", marginTop: "4px" }}>
        {company}
      </div>
    </div>
    
    <p style={{
      fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#4A5568",
      lineHeight: 1.6, margin: 0
    }}>
      {review}
    </p>
  </div>
);

export default function TestimonialsSSVC() {
  const testimonials = [
    {
      author: "Akanksha Bhatt,",
      role: "MANAGER HR",
      company: "Mitsui & Co. Ltd",
      review: "Really appreciate the kind of profiles we received for the given position and candidates were well prepared. Thank you for the support."
    },
    {
      author: "HR team",
      role: "",
      company: "CTG chemical Technology group - SRF Ltd, Gurgaon",
      review: "Untiring efforts, excellent way of working, needless to say great team commitment"
    },
    {
      author: "Rahul S,",
      role: "VP OPERATIONS",
      company: "TechNova Solutions",
      review: "The expertise and promptness shown by the team exceeded our expectations, significantly accelerating our strategic hiring process."
    },
    {
      author: "Sneha M.",
      role: "DIRECTOR",
      company: "Global Renewables Inc",
      review: "We found the exact visionary leaders we were looking for. Their understanding of our niche market was truly impressive."
    }
  ];

  // Double the array for smooth endless looping
  const scrollData = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" style={{ background: "#F4EFEA", padding: "100px 0", overflow: "hidden" }}>
      
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 6vw", marginBottom: "40px" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
           <div style={{ width: "24px", height: "24px", background: "rgba(85, 177, 168, 0.1)", borderRadius: "4px", position: "absolute" }}></div>
           <h5 style={{
             fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700,
             letterSpacing: "1px", textTransform: "uppercase", margin: 0,
             color: "#1A114D", position: "relative", marginLeft: "10px"
           }}>
             FIND OUT HOW OUR CLIENTS HAVE BENEFITED FROM PARTNERING WITH US
           </h5>
        </div>
        
        <h2 style={{
          fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
          fontSize: "clamp(32px, 4vw, 42px)", color: "#55B1A8", margin: 0, lineHeight: 1.2
        }}>
          Client Testimonials
        </h2>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-400px * ${testimonials.length} - 24px * ${testimonials.length})); }
        }
        .marquee-container {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scrollMarquee 25s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}} />

      <div style={{
        maxWidth: "1200px", margin: "0 auto", padding: "0 6vw",
        display: "flex", overflow: "hidden", position: "relative"
      }}>
        <div className="marquee-container">
          {scrollData.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>

    </section>
  );
}
