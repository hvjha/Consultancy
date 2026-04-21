import React from 'react';
import { Link } from 'react-router-dom';

const TopArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ 
      background: "linear-gradient(to right, #409F95, #55B1A8, #5BBDB4)", 
      position: "relative",
      color: "#FFFFFF",
      fontFamily: "'DM Sans', sans-serif"
    }}>
      
      {/* Background elegant pattern (optional subtle waves or noise) */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        opacity: 0.05, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 50%), radial-gradient(circle at 0% 100%, #1A114D 0%, transparent 50%)"
      }}></div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 6vw", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "60px",
          marginBottom: "60px"
        }}>
          
          {/* Column 1: Company Info */}
          <div style={{ flex: "2", minWidth: "300px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "20px", lineHeight: 1.4 }}>
              SSV Staff Solutions Pvt. Ltd.
            </h3>
            <p style={{ fontSize: "14px", lineHeight: 1.6, opacity: 0.9, marginBottom: "24px", maxWidth: "400px" }}>
              We are the preferred executive search firm for leading organizations and multinational corporations operating in the Indian market.
            </p>
            <div style={{ fontSize: "12px", opacity: 0.8, lineHeight: 1.8, marginBottom: "32px", fontFamily: "monospace" }}>
              CIN: U74140DL2010PTC200720<br />
              UDYAM Reg. No: UDYAM-DL-10-0010229
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" }}>
              <span style={{ fontSize: "14px", fontWeight: 700 }}>Are we connected?</span>
              <a href="#" style={{ color: "#FFF", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#1A114D"} onMouseLeave={e => e.target.style.color = "#FFF"}>
                <LinkedInIcon />
              </a>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", fontSize: "13px", fontWeight: 500 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <PhoneIcon /> +91 95824 39149
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <MailIcon /> info@ssvstaffsolutions.com
              </div>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "24px" }}>Useful Links</h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {[
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Industries", path: "/industries" },
                { label: "Functional Roles", path: "/functional" },
                { label: "Contact", path: "/contact" }
              ].map(link => (
                <Link key={link.label} to={link.path} style={{ 
                  color: "#FFFFFF", opacity: 0.8, textDecoration: "none", fontSize: "14px", transition: "opacity 0.2s, transform 0.2s", display: "inline-block"
                }}
                onMouseEnter={e => { e.target.style.opacity = "1"; e.target.style.transform = "translateX(5px)"; }}
                onMouseLeave={e => { e.target.style.opacity = "0.8"; e.target.style.transform = "translateX(0)"; }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Location */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "24px" }}>Location</h4>
            <div style={{ fontSize: "14px", lineHeight: 1.8, opacity: 0.9 }}>
              <strong style={{ fontWeight: 600 }}>Registered Office</strong><br />
              Diwan Mohalla, Sarvodya colony,<br />
              Khangar Gali Patna City,<br />
              Patna, Bihar - 800008
            </div>
          </div>

        </div>

        {/* Bottom Bar Container */}
        <div style={{ 
          borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "32px",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px",
          fontSize: "12px", opacity: 0.8
        }}>
          <div>
            © {new Date().getFullYear()} SSV Staff Solutions Pvt. Ltd. All Rights Reserved.
          </div>
          <div style={{ display: "flex", gap: "24px", fontWeight: 500 }}>
            <a href="#" style={{ color: "#FFF", textDecoration: "none", transition: "opacity 0.2s" }} onMouseEnter={e => e.target.style.opacity="1"} onMouseLeave={e => e.target.style.opacity="0.8"}>Privacy Policy</a>
            <a href="#" style={{ color: "#FFF", textDecoration: "none", transition: "opacity 0.2s" }} onMouseEnter={e => e.target.style.opacity="1"} onMouseLeave={e => e.target.style.opacity="0.8"}>Disclaimer</a>
          </div>
        </div>
      </div>

      {/* Floating Scroll To Top Button */}
      <button 
        onClick={scrollToTop}
        style={{
          position: "absolute", bottom: "40px", right: "6vw",
          background: "#3E2723", color: "#FFF", border: "none",
          width: "48px", height: "64px", borderRadius: "4px",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px",
          cursor: "pointer", transition: "background 0.3s, transform 0.2s", zIndex: 10
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "#1A114D"; e.currentTarget.style.transform = "translateY(-4px)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "#3E2723"; e.currentTarget.style.transform = "translateY(0)"; }}
        aria-label="Scroll to top"
      >
        <TopArrowIcon />
        <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1px" }}>TOP</span>
      </button>

    </footer>
  );
}
