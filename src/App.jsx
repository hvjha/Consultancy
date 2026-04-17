import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import WelcomeSection from './components/WelcomeSection';
import AboutSSVC from './components/AboutSSVC';
import ServicesSSVC from './components/ServicesSSVC';
import IndustriesSSVC from './components/IndustriesSSVC';
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
      if (['contact', 'about', 'services'].includes(hash)) {
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
          <IndustriesSSVC />
          <TestimonialsSSVC />
        </>
      )}

      {activeView === 'about' && (
        <>
          <div style={{ background: "#67B7A9", padding: "120px 6vw 60px", textAlign: "center", color: "#FFF" }}>
             <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 700, margin: 0 }}>About Us</h1>
             <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", opacity: 0.9, marginTop: "20px" }}>
               HOME <span style={{ margin: "0 6px" }}>_</span> ABOUT
             </div>
          </div>
          <AboutSSVC />
        </>
      )}

      {activeView === 'services' && (
        <>
          <div style={{ background: "#67B7A9", padding: "120px 6vw 60px", textAlign: "center", color: "#FFF" }}>
             <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 700, margin: 0 }}>Our Services</h1>
             <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", opacity: 0.9, marginTop: "20px" }}>
               HOME <span style={{ margin: "0 6px" }}>_</span> SERVICES
             </div>
          </div>
          <ServicesSSVC onOpenService={openServiceDetails} />
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
