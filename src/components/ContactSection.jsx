import React, { useState } from 'react';
import { COMPANY_LOGOS } from '../data/data';
import SEO from './SEO';

const DocumentIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#55B1A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const BannerIllustration = () => (
  <svg viewBox="0 0 1000 300" style={{ 
    position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", 
    height: "100%", width: "1000px", minWidth: "100%", opacity: 0.15, pointerEvents: "none" 
  }}>
     <path d="M200,300 C200,200 400,200 600,300" fill="none" stroke="#fff" strokeWidth="4"/>
     <circle cx="500" cy="150" r="100" fill="#fff"/>
     <rect x="420" y="80" width="160" height="180" rx="8" fill="#fff"/>
     <rect x="350" y="140" width="80" height="120" rx="6" fill="#fff"/>
     <circle cx="200" cy="80" r="40" fill="#fff"/>
     <circle cx="800" cy="120" r="60" fill="#fff"/>
     <path d="M800,300 C800,200 900,100 1000,100" fill="none" stroke="#fff" strokeWidth="8"/>
  </svg>
);

const WorldMapWatermark = () => (
  <svg 
    viewBox="0 0 1000 500" 
    style={{
      position: "absolute", top: 0, left: 0, width: "100%", height: "100%", 
      opacity: 0.05, pointerEvents: "none", zIndex: 0, objectFit: "cover"
    }}
  >
    <path d="M150,100 Q200,80 250,150 T200,250 T100,200 Z" fill="#3E2723" />
    <path d="M300,50 Q400,20 450,100 T350,200 T280,120 Z" fill="#3E2723" />
    <path d="M500,80 Q600,40 700,90 T650,250 T520,180 Z" fill="#3E2723" />
    <path d="M750,100 Q850,70 900,150 T800,300 T720,200 Z" fill="#3E2723" />
    <path d="M250,280 Q300,250 350,350 T280,450 T200,360 Z" fill="#3E2723" />
    <path d="M550,250 Q600,220 650,320 T580,400 T500,300 Z" fill="#3E2723" />
  </svg>
);

export default function ContactSection() {
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaChecked) {
      alert("Please confirm you are not a robot.");
      return;
    }
    if (!formData.name) {
      alert("Please enter your name.");
      return;
    }
    
    const subject = encodeURIComponent("New Contact Request from " + formData.name);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:ajha25770@gmail.com?subject=${subject}&body=${body}`;
    // Optional: reset form
    setFormData({ name: '', phone: '', email: '', message: '' });
    setCaptchaChecked(false);
  };

  return (
    <section id="contact" style={{ background: "#FAFAFA", padding: 0 }}>
      <SEO title="Contact Us" description="Get in touch with SSV Staff Solutions for your executive recruitment needs." />
      {/* Banner Area (Image 1) */}
      <div style={{
        background: "#67B7A9", height: "320px", display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center", position: "relative", overflow: "hidden"
      }}>
        <BannerIllustration />
        <h1 style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 700,
          color: "#FFFFFF", zIndex: 1, margin: "0 0 20px 0"
        }}>
          Get In Touch
        </h1>
        <div style={{
          position: "absolute", bottom: "30px", left: "6vw",
          fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700,
          color: "#FFFFFF", letterSpacing: "1px", opacity: 0.9, zIndex: 1
        }}>
          HOME <span style={{ margin: "0 6px" }}>_</span> GET IN TOUCH
        </div>
      </div>

      {/* Form Area (Image 2) */}
      <div style={{ 
        maxWidth: "1200px", margin: "0 auto", padding: "80px 6vw", 
        display: "flex", flexWrap: "wrap", gap: "60px", justifyContent: "space-between" 
      }}>
        
        {/* Left Column: Details */}
        <div style={{ flex: "1 1 350px", paddingTop: "20px" }}>
          <div style={{ 
            fontSize: "11px", fontWeight: 700, fill: "#1A114D", color: "#1A114D", 
            letterSpacing: "1px", marginBottom: "12px",
            display: "flex", alignItems: "center"
          }}>
            {/* Folder tab design hint as seen on mock */}
            <div style={{ 
              background: "#EBE3DC", padding: "6px 12px", borderRadius: "4px 4px 0 0",
              marginRight: "6px"
            }}>REACH OUT TO US</div>
          </div>
          
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, 
            color: "#67B7A9", margin: "0 0 40px 0", letterSpacing: "-0.5px"
          }}>
            Communication details
          </h2>

          <div style={{ display: "flex", gap: "24px" }}>
            <div style={{ opacity: 0.9, position: "relative", top: "4px" }}>
              <DocumentIcon />
              {/* Optional tiny pencil SVG or shadow element could go here */}
            </div>
            <div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#67B7A9", marginBottom: "16px", borderLeft: "2px solid #1A114D", paddingLeft: "12px", lineHeight: "1" }}>
                Call or Email
              </div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#1A114D", marginBottom: "8px" }}>
                +91 95824 39149
              </div>
              <div style={{ fontSize: "13px", fontWeight: 500, color: "#1A114D" }}>
                info@ssvstaffsolutions.com
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form Box */}
        <div style={{ flex: "1 1 450px" }}>
          <div style={{
            background: "#FFFFFF", padding: "48px 40px", borderRadius: "4px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.06)"
          }}>
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#67B7A9", margin: "0 0 30px 0", fontFamily: "'DM Sans', sans-serif" }}>
              Ready to Connect? Write to us!
            </h3>
            
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <input 
                  type="text" name="name" value={formData.name} onChange={handleInputChange} 
                  placeholder="Your Name *" required
                  style={{ flex: "1 1 calc(50% - 10px)", padding: "14px", border: "1px solid #EEEEEE", borderRadius: "2px", fontSize: "13px", fontFamily: "'DM Sans', sans-serif", color: "#333", outline: "none" }} 
                />
                <input 
                  type="text" name="phone" value={formData.phone} onChange={handleInputChange} 
                  placeholder="Phone" 
                  style={{ flex: "1 1 calc(50% - 10px)", padding: "14px", border: "1px solid #EEEEEE", borderRadius: "2px", fontSize: "13px", fontFamily: "'DM Sans', sans-serif", color: "#333", outline: "none" }} 
                />
              </div>
              <input 
                type="email" name="email" value={formData.email} onChange={handleInputChange} 
                placeholder="Email Address" 
                style={{ padding: "14px", border: "1px solid #EEEEEE", borderRadius: "2px", fontSize: "13px", fontFamily: "'DM Sans', sans-serif", color: "#333", outline: "none" }} 
              />
              <textarea 
                name="message" value={formData.message} onChange={handleInputChange} 
                placeholder="Type Your Message..." rows="4" 
                style={{ padding: "14px", border: "1px solid #EEEEEE", borderRadius: "2px", fontSize: "13px", fontFamily: "'DM Sans', sans-serif", color: "#333", resize: "vertical", outline: "none" }} 
              />
              
              {/* Fake reCAPTCHA */}
              <div style={{
                border: "1px solid #EBEBEB", background: "#F9F9F9", borderRadius: "3px", padding: "12px 16px",
                display: "inline-flex", alignItems: "center", justifyContent: "space-between", width: "100%", maxWidth: "300px", marginBottom: "8px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                   <div 
                     onClick={() => setCaptchaChecked(!captchaChecked)}
                     style={{ 
                       width: "26px", height: "26px", 
                       border: captchaChecked ? "2px solid #009E5F" : "2px solid #C1C1C1", 
                       background: "#FFFFFF", borderRadius: "2px", cursor: "pointer",
                       display: "flex", justifyContent: "center", alignItems: "center",
                       transition: "all 0.2s"
                     }}>
                       {captchaChecked && <span style={{ color: "#009E5F", fontWeight: 900, fontSize: "18px", marginTop: "-2px" }}>✓</span>}
                   </div>
                   <span style={{ fontSize: "13px", color: "#555", fontWeight: 500 }}>I'm not a robot</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/120px-RecaptchaLogo.svg.png" alt="reCAPTCHA" width="30" style={{ opacity: 0.8 }} />
                </div>
              </div>

              <button type="submit" style={{
                background: "#67B7A9", color: "#FFFFFF", border: "none", padding: "18px",
                fontSize: "12px", fontWeight: 700, letterSpacing: "1px", cursor: "pointer",
                borderRadius: "2px", transition: "background 0.3s, transform 0.2s"
              }}
              onMouseEnter={e => { e.target.style.background = "#56A395"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.target.style.background = "#67B7A9"; e.target.style.transform = "translateY(0)"; }}
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* Map, Logos Bar, and Office Address Background elements */}
      <div style={{ background: "#EBE1D7", position: "relative", overflow: "hidden", fontFamily: "'DM Sans', sans-serif" }}>
         {/* Top Grid of Boxed Logos sliding as an infinite carousel */}
         <div style={{ 
           borderTop: "1px solid rgba(62, 39, 35, 0.05)", 
           borderBottom: "1px solid rgba(62, 39, 35, 0.1)",
           overflow: "hidden", display: "flex", alignItems: "center"
         }}>
           <div className="marquee-container" style={{ display: "flex", width: "max-content" }}>
             {/* Original Set */}
             <div className="marquee-content" style={{ display: "flex" }}>
               {COMPANY_LOGOS.map((logo, idx) => (
                 <div key={`logo-1-${idx}`} style={{ 
                   width: "240px", height: "100px", 
                   borderRight: "1px solid rgba(62, 39, 35, 0.05)", 
                   display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" 
                 }}>
                    <div style={{ 
                      background: "#FFFFFF", padding: "10px 16px", borderRadius: "2px", 
                      boxShadow: "0 2px 4px rgba(0,0,0,0.02)", fontSize: "12px", fontWeight: 800, 
                      color: "#1A114D", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", width: "100%" 
                    }}>
                      {logo.domain && (
                        <img 
                          src={`https://www.google.com/s2/favicons?domain=${logo.domain}&sz=64`} 
                          alt={logo.name + " logo"} 
                          style={{ width: "20px", height: "20px", objectFit: "contain", borderRadius: "4px" }} 
                          onError={(e) => { e.target.style.display = 'none'; }} 
                        />
                      )}
                      <span>{logo.name}</span>
                    </div>
                 </div>
               ))}
             </div>
             {/* Duplicated Set for Infinite Loop */}
             <div className="marquee-content" style={{ display: "flex" }}>
               {COMPANY_LOGOS.map((logo, idx) => (
                 <div key={`logo-2-${idx}`} style={{ 
                   width: "240px", height: "100px", 
                   borderRight: "1px solid rgba(62, 39, 35, 0.05)", 
                   display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" 
                 }}>
                    <div style={{ 
                      background: "#FFFFFF", padding: "10px 16px", borderRadius: "2px", 
                      boxShadow: "0 2px 4px rgba(0,0,0,0.02)", fontSize: "12px", fontWeight: 800, 
                      color: "#1A114D", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", width: "100%" 
                    }}>
                      {logo.domain && (
                        <img 
                          src={`https://www.google.com/s2/favicons?domain=${logo.domain}&sz=64`} 
                          alt={logo.name + " logo"} 
                          style={{ width: "20px", height: "20px", objectFit: "contain", borderRadius: "4px" }} 
                          onError={(e) => { e.target.style.display = 'none'; }} 
                        />
                      )}
                      <span>{logo.name}</span>
                    </div>
                 </div>
               ))}
             </div>
           </div>
         </div>

         {/* Map and Address Area */}
         <div style={{ position: "relative", padding: "80px 20px 100px" }}>
            <WorldMapWatermark />
            <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1, display: "flex", justifyContent: "center" }}>
               <div style={{ 
                 background: "#FFFFFF", width: "100%", maxWidth: "600px", 
                 padding: "40px", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" 
               }}>
                  <h4 style={{ color: "#67B7A9", fontSize: "16px", fontWeight: 700, marginBottom: "16px" }}>
                    Registered Office
                  </h4>
                  <div style={{ color: "#1A114D", fontSize: "13px", lineHeight: 1.8, fontWeight: 500 }}>
                    Diwan Mohalla, Sarvodya colony,<br />
                    Khangar Gali Patna City,<br />
                    Patna, Bihar - 800008
                  </div>
               </div>
            </div>
         </div>
      </div>
      
    </section>
  );
}
