import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import WelcomeSection from './components/WelcomeSection';
import AboutSSVC from './components/AboutSSVC';
import WorkingPrinciples from './components/WorkingPrinciples';
import ServicesSSVC from './components/ServicesSSVC';
import ManagementTeam from './components/ManagementTeam';
import IndustriesSSVC from './components/IndustriesSSVC';
import IndustriesPage from './components/IndustriesPage';
import FunctionalRolesPage from './components/FunctionalRolesPage';
import TestimonialsSSVC from './components/TestimonialsSSVC';
import CompanyMarquee from './components/CompanyMarquee';
import ContactSection from './components/ContactSection';
import ContactCTA from './components/ContactCTA';
import ServiceDetails from './components/ServiceDetails';
import Footer from './components/Footer';

function App() {
  const [activeView, setActiveView] = useState('home');
  const [activeTab, setActiveTab] = useState('mapping');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['contact', 'about', 'services', 'servicedetails', 'management', 'industries', 'functional'].includes(hash)) {
        setActiveView(hash);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '' || hash === 'home') {
        setActiveView('home');
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const openServiceDetails = (tabId) => {
    setActiveTab(tabId);
    setActiveView('servicedetails');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navigateToView = (view) => {
    if (view !== 'servicedetails') window.location.hash = '#' + view;
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar onNavigate={navigateToView} activeView={activeView} />
      
      {activeView === 'home' && (
        <>
          <HeroCarousel onNavigateService={openServiceDetails} />
          <div style={{ background: "#FFFFFF", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
            <CompanyMarquee />
          </div>
          <WelcomeSection />
          <AboutSSVC />
          <ServicesSSVC onOpenService={openServiceDetails} />
          <IndustriesSSVC />
          <TestimonialsSSVC />
        </>
      )}

      {activeView === 'about' && (
        <>
          <div style={{ background: "#67B7A9", padding: "120px 6vw 60px", textAlign: "center", color: "#FFF", position: "relative", overflow: "hidden" }}>
             {/* Abstract light graphic in background similar to screenshot 1 */}
             <div style={{ position: "absolute", inset: 0, opacity: 0.15, display: "flex", justifyContent: "center", alignItems: "center", pointerEvents: "none" }}>
               <svg viewBox="0 0 800 400" width="100%" height="100%">
                 <circle cx="400" cy="200" r="150" fill="#FFFFFF" />
                 <path d="M200 300 Q400 100 600 300" stroke="#FFFFFF" strokeWidth="20" fill="none" />
                 <rect x="350" y="150" width="100" height="80" rx="10" fill="#1A114D" />
               </svg>
             </div>
             <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 700, margin: 0, position: "relative", zIndex: 1 }}>About</h1>
             <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", opacity: 0.9, marginTop: "20px", position: "relative", zIndex: 1, textTransform: "uppercase" }}>
               HOME <span style={{ margin: "0 6px" }}>_</span> ABOUT
             </div>
          </div>
          <AboutSSVC />
          <WorkingPrinciples />
          <TestimonialsSSVC />
          <ContactCTA onNavigate={navigateToView} />
        </>
      )}

      {activeView === 'services' && (
        <>
          <div style={{ background: "#67B7A9", padding: "120px 6vw 60px", textAlign: "center", color: "#FFF", position: "relative", overflow: "hidden" }}>
             {/* Abstract light graphic in background */}
             <div style={{ position: "absolute", inset: 0, opacity: 0.15, display: "flex", justifyContent: "center", alignItems: "center", pointerEvents: "none" }}>
               <svg viewBox="0 0 800 400" width="100%" height="100%">
                 <circle cx="400" cy="200" r="150" fill="#FFFFFF" />
                 <path d="M200 300 Q400 100 600 300" stroke="#FFFFFF" strokeWidth="20" fill="none" />
                 <rect x="350" y="150" width="100" height="80" rx="10" fill="#1A114D" />
               </svg>
             </div>
             <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 700, margin: 0, position: "relative", zIndex: 1 }}>Our Services</h1>
             <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", opacity: 0.9, marginTop: "20px", position: "relative", zIndex: 1, textTransform: "uppercase" }}>
               HOME <span style={{ margin: "0 6px" }}>_</span> SERVICES
             </div>
          </div>
          <ServicesSSVC onOpenService={openServiceDetails} />
          <TestimonialsSSVC />
          <ContactCTA onNavigate={navigateToView} />
        </>
      )}

      {activeView === 'management' && (
        <ManagementTeam />
      )}

      {activeView === 'industries' && (
        <>
          <IndustriesPage />
          <TestimonialsSSVC />
          <ContactCTA onNavigate={navigateToView} />
        </>
      )}

      {activeView === 'functional' && (
        <>
          <FunctionalRolesPage />
          <TestimonialsSSVC />
          <ContactCTA onNavigate={navigateToView} />
        </>
      )}

      {activeView === 'servicedetails' && (
        <>
          <ServiceDetails initialTab={activeTab} key={activeTab} />
          <TestimonialsSSVC />
          <ContactCTA onNavigate={navigateToView} />
        </>
      )}

      {activeView === 'contact' && (
        <ContactSection />
      )}
      <Footer />
    </div>
  );
}

export default App;
