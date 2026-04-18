import React from 'react';
import AboutSSVC from '../components/AboutSSVC';
import WorkingPrinciples from '../components/WorkingPrinciples';
import TestimonialsSSVC from '../components/TestimonialsSSVC';
import ContactCTA from '../components/ContactCTA';

function PageHero({ title, breadcrumb }) {
  return (
    <div style={{ background: '#67B7A9', padding: '120px 6vw 60px', textAlign: 'center', color: '#FFF', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.15, display: 'flex', justifyContent: 'center', alignItems: 'center', pointerEvents: 'none' }}>
        <svg viewBox="0 0 800 400" width="100%" height="100%">
          <circle cx="400" cy="200" r="150" fill="#FFFFFF" />
          <path d="M200 300 Q400 100 600 300" stroke="#FFFFFF" strokeWidth="20" fill="none" />
          <rect x="350" y="150" width="100" height="80" rx="10" fill="#1A114D" />
        </svg>
      </div>
      <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(34px, 4vw, 48px)', fontWeight: 700, margin: 0, position: 'relative', zIndex: 1 }}>{title}</h1>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '1px', opacity: 0.9, marginTop: '20px', position: 'relative', zIndex: 1, textTransform: 'uppercase' }}>
        {breadcrumb}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" breadcrumb={<>HOME <span style={{ margin: '0 6px' }}>_</span> ABOUT</>} />
      <AboutSSVC />
      <WorkingPrinciples />
      <TestimonialsSSVC />
      <ContactCTA />
    </>
  );
}
