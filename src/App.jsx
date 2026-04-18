import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Eagerly loaded components (always on home page or critical path)
import HeroCarousel from './components/HeroCarousel';
import WelcomeSection from './components/WelcomeSection';
import AboutSSVC from './components/AboutSSVC';
import ServicesSSVC from './components/ServicesSSVC';
import IndustriesSSVC from './components/IndustriesSSVC';
import TestimonialsSSVC from './components/TestimonialsSSVC';
import CompanyMarquee from './components/CompanyMarquee';
import ContactCTA from './components/ContactCTA';

// Lazy loaded pages (only download when navigated to)
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetailsPage = lazy(() => import('./pages/ServiceDetailsPage'));
const ManagementTeamPage = lazy(() => import('./pages/ManagementTeamPage'));
const IndustriesPage = lazy(() => import('./components/IndustriesPage'));
const FunctionalRolesPage = lazy(() => import('./components/FunctionalRolesPage'));
const ContactSection = lazy(() => import('./components/ContactSection'));

// Loading fallback
function PageLoader() {
  return (
    <div style={{
      minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{
        width: '48px', height: '48px', border: '4px solid #e0e7ef',
        borderTop: '4px solid #55B1A8', borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// Home page — fully inline, zero extra bundle cost
function HomePage() {
  return (
    <>
      <HeroCarousel />
      <div style={{ background: '#FFFFFF', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <CompanyMarquee />
      </div>
      <WelcomeSection />
      <AboutSSVC />
      <ServicesSSVC />
      <IndustriesSSVC />
      <TestimonialsSSVC />
      <ContactCTA />
    </>
  );
}

// Page-level layout with Navbar + Footer always present
function Layout() {
  const location = useLocation();

  // Scroll to top on every route change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:tab" element={<ServiceDetailsPage />} />
          <Route path="/management" element={<ManagementTeamPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/functional" element={<FunctionalRolesPage />} />
          <Route path="/contact" element={<ContactSection />} />
          {/* Catch-all: redirect unknown paths to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
