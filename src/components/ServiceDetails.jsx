import React, { useState } from 'react';

export default function ServiceDetails({ initialTab = 'mapping' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  const tabs = [
    { id: 'mapping', title: 'Organizational Mapping' },
    { id: 'assessment', title: 'Executive Assessment' },
    { id: 'strategy', title: 'Leadership Strategy' },
    { id: 'search', title: 'Executive Search & Acquisition' },
    { id: 'governance', title: 'Corporate Governance' }
  ];

  const contentMap = {
    search: {
      header: "Executive Search Service",
      subtext: "Enhance your executive recruitment process to secure high-caliber leaders and drive organizational excellence.",
      details: (
        <>
          <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "28px", color: "#55B1A8", marginBottom: "20px" }}>Executive Search Service</h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#1A114D", lineHeight: 1.7, marginBottom: "24px", fontWeight: 500 }}>
            Our executive search service is designed to support clients in sourcing top-tier executive talent. Let our experienced research team map the market and identify key individuals.
          </p>
          <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "20px", color: "#55B1A8", marginBottom: "12px" }}>Strategic Alignment</h4>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#4A5568", lineHeight: 1.7, marginBottom: "20px" }}>
            We work closely with your board and senior management to understand your strategic direction and pinpoint leaders who align not only with your goals but also with your organizational culture.
          </p>
          <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "20px", color: "#55B1A8", marginBottom: "12px" }}>Confidential Sourcing</h4>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#4A5568", lineHeight: 1.7, marginBottom: "20px" }}>
            Our proprietary methodology ensures total confidentiality while pursuing high-impact candidates who may not be actively seeking new opportunities.
          </p>
        </>
      )
    },
    mapping: {
      header: "Organizational Mapping",
      subtext: "Optimize organizational structure, roles, and processes to enhance efficiency, productivity, and employee satisfaction",
      details: (
        <>
          <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "28px", color: "#55B1A8", marginBottom: "20px", fontWeight: 700 }}>Organizational Mapping</h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#1A114D", lineHeight: 1.7, marginBottom: "24px", fontWeight: 500 }}>
            The organizational mapping service provided by our firm offers a comprehensive view of the talent landscape, enabling organizations to make informed decisions regarding their hiring strategies. Here are the key elements and benefits of our mapping service:
          </p>

          <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", color: "#55B1A8", marginBottom: "8px", fontWeight: 500 }}>Holistic View of Talent Landscape</h4>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#1A114D", lineHeight: 1.6, marginBottom: "20px", opacity: 0.9 }}>
            Our mapping service provides a holistic view of the current talent landscape. We utilize in-depth market intelligence and conduct a confidential analysis of talent pools to assess the suitability of available talent. This enables organizations to understand the talent market, identify potential candidates, and gauge the availability and quality of talent before making hiring decisions.
          </p>

          <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", color: "#55B1A8", marginBottom: "8px", fontWeight: 500 }}>Functional, Business Unit, and Sectoral Analysis</h4>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#1A114D", lineHeight: 1.6, marginBottom: "20px", opacity: 0.9 }}>
            We offer coverage of various dimensions, including functional areas, business units, and sectors. Our mapping service provides detailed analyses of talent within these specific areas, allowing clients to gain insights into the talent pool's composition, strengths, and areas of expertise. This information helps organizations align their hiring strategies with the specific talent requirements of their industry and functional needs.
          </p>

          <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", color: "#55B1A8", marginBottom: "8px", fontWeight: 500 }}>Market Insight for Compensation</h4>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#1A114D", lineHeight: 1.6, marginBottom: "20px", opacity: 0.9 }}>
            By understanding what competitors are paying for similar jobs, skills, and locations, organizations can gain valuable market insights. This information helps them assess the external competitiveness of their compensation packages, including fixed and variable pay components. It also allows organizations to review and adjust their compensation and employee benefits policies to attract and retain top talent.
          </p>

          <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", color: "#55B1A8", marginBottom: "8px", fontWeight: 500 }}>Neutral Reference for Analysis</h4>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#1A114D", lineHeight: 1.6, marginBottom: "20px", opacity: 0.9 }}>
            Our mapping service provides a neutral reference point that supports any analysis conducted independently by organizations. This unbiased perspective helps organizations validate their own findings and decisions, providing an additional layer of confidence and credibility.
          </p>

          <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", color: "#55B1A8", marginBottom: "8px", fontWeight: 500 }}>Market Analysis for Success Assessment</h4>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#1A114D", lineHeight: 1.6, marginBottom: "20px", opacity: 0.9 }}>
            Our mapping service also provides market analysis and information to assess the likelihood of success in a full search process. By understanding the talent landscape, organizations can evaluate the feasibility and potential outcomes of their search efforts. This information helps organizations make informed decisions and allocate resources effectively.
          </p>
        </>
      )
    },
    assessment: {
      header: "Executive Assessment",
      subtext: "Make informed decisions about talent development, succession planning, and leadership effectiveness.",
      details: (
        <>
          <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "28px", color: "#55B1A8", marginBottom: "20px" }}>Executive Assessment</h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#1A114D", lineHeight: 1.7, marginBottom: "24px", fontWeight: 500 }}>
            Utilize comprehensive assessment tools to objectively evaluate leadership potential and performance metrics of critical executives.
          </p>
          <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "20px", color: "#55B1A8", marginBottom: "12px" }}>Data-Driven Competency Checks</h4>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#4A5568", lineHeight: 1.7, marginBottom: "20px" }}>
            We implement scientifically backed competency frameworks seamlessly tailored to your organization's contextual demands, allowing for an incredibly insightful and non-biased evaluation process.
          </p>
        </>
      )
    },
    strategy: {
      header: "Leadership Strategy",
      subtext: "Empower your organization with visionary leaders who drive transformative growth and stability.",
      details: (
        <>
          <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "28px", color: "#55B1A8", marginBottom: "20px" }}>Leadership Strategy</h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#1A114D", lineHeight: 1.7, marginBottom: "24px", fontWeight: 500 }}>
            Building the next generation of executives requires profound insight and systematic development. We partner with clients to evaluate their bench strength.
          </p>
          <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "20px", color: "#55B1A8", marginBottom: "12px" }}>Future-Proofing Leadership</h4>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#4A5568", lineHeight: 1.7, marginBottom: "20px" }}>
            By focusing on core cultural pillars and emerging industry trends, our leadership strategy creates an enduring framework for continuous organizational growth and resilience.
          </p>
        </>
      )
    },
    governance: {
      header: "Corporate Governance",
      subtext: "Expert advisory services to ensure alignment, accountability, and strategic foresight at the highest levels.",
      details: (
        <>
          <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "28px", color: "#55B1A8", marginBottom: "20px" }}>Corporate Governance</h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#1A114D", lineHeight: 1.7, marginBottom: "24px", fontWeight: 500 }}>
            Guiding boards to sustainable performance through transparency and structured insight.
          </p>
          <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "20px", color: "#55B1A8", marginBottom: "12px" }}>Board Optimization</h4>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#4A5568", lineHeight: 1.7, marginBottom: "20px" }}>
            We help establish strong operational mandates and governance models that mitigate risk, improve stakeholder communications, and foster robust decision-making.
          </p>
        </>
      )
    }
  };

  const currentData = contentMap[activeTab];

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      
      {/* Top Banner Area */}
      <section style={{
        background: "linear-gradient(135deg, #7CD5CE, #55B1A8)",
        padding: "160px 6vw 80px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Placeholder Graphic mimicking people/charts behind text */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: 0.15, pointerEvents: "none" }}>
          <img src="data:image/svg+xml;utf8,<svg viewBox='0 0 800 400' xmlns='http://www.w3.org/2000/svg'><circle cx='400' cy='200' r='180' fill='%231A114D'/><rect x='200' y='100' width='300' height='200' fill='%23ffffff'/><circle cx='600' cy='150' r='40' fill='%23ffffff'/></svg>" alt="abstract" width="800" />
        </div>

        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
            fontSize: "clamp(36px, 5vw, 48px)", color: "#FFFFFF",
            margin: "0 0 16px", letterSpacing: "1px"
          }}>
            {currentData.header}
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#FFFFFF",
            maxWidth: "700px", margin: "0 auto 40px", lineHeight: 1.6, opacity: 0.95
          }}>
            {currentData.subtext}
          </p>

          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700,
            color: "#FFFFFF", letterSpacing: "1px", opacity: 0.8
          }}>
            <span style={{ cursor: "pointer" }} onClick={() => window.location.hash = "#"}>HOME</span> 
            <span style={{ margin: "0 8px" }}>·</span> 
            <span style={{ cursor: "pointer" }} onClick={() => window.location.hash = "#services"}>SERVICES</span> 
            <span style={{ margin: "0 8px" }}>·</span> 
            <span>{currentData.header.toUpperCase()}</span>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .details-container {
          display: flex;
          gap: 60px;
          align-items: flex-start;
        }
        .details-content {
          flex: 1 1 0%;
        }
        .details-sidebar {
          flex: 0 0 350px;
        }
        @media (max-width: 900px) {
          .details-container {
            flex-direction: column-reverse;
            gap: 40px;
          }
          .details-sidebar {
            flex: auto;
            width: 100%;
            position: relative !important;
            top: 0 !important;
          }
        }
      `}} />

      {/* Main Content Area */}
      <section className="details-container" style={{
        maxWidth: "1200px", margin: "0 auto", padding: "80px 6vw"
      }}>
        
        {/* Left Side: Detailed Copy */}
        <div className="details-content">
          {currentData.details}
        </div>

        {/* Right Side: Tab Menu */}
        <div className="details-sidebar">
          <div style={{
            background: "#F8F5F1", borderRadius: "8px", padding: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.03)", position: "sticky", top: "120px"
          }}>
            
            {tabs.map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    width: "100%", padding: "20px 24px", margin: "0 0 8px 0",
                    background: isActive ? "#55B1A8" : "transparent",
                    color: isActive ? "#FFFFFF" : "#55B1A8",
                    border: "none", borderRadius: "6px",
                    fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 700,
                    cursor: "pointer", transition: "all 0.3s",
                    textAlign: "left"
                  }}
                  onMouseEnter={e => {
                    if (!isActive) e.currentTarget.style.background = "rgba(85,177,168,0.1)";
                  }}
                  onMouseLeave={e => {
                    if (!isActive) e.currentTarget.style.background = "transparent";
                  }}
                >
                  {tab.title}
                  
                  {/* Custom Radio-style Icon */}
                  <div style={{
                    width: "16px", height: "16px", borderRadius: "50%",
                    border: isActive ? "2px solid #FFFFFF" : "2px solid rgba(85,177,168,0.4)",
                    display: "flex", justifyContent: "center", alignItems: "center"
                  }}>
                    {isActive && <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#1A114D" }} />}
                  </div>
                </button>
              );
            })}
            
          </div>
        </div>
      </section>

    </div>
  );
}
