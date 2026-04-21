import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import CompanyLogo from '../assets/Companylogo.jpeg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [hoveredSubNav, setHoveredSubNav] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close mobile menu on route change / resize
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, []);

  const NAV_MENU = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about', icon: '↑', dropdown: [
      { label: 'About Company', path: '/about', icon: '↗' },
      { label: 'Management Team', path: '/management', icon: '↗' },
    ]},
    { label: 'Services', path: '/services', icon: '↑', dropdown: [
      { label: 'Our Services', path: '/services', icon: '↗', subDropdown: [
        { label: 'Talent Acquisition', path: '/services/search' },
        { label: 'Organizational Mapping', path: '/services/mapping' },
        { label: 'Executive Assessment', path: '/services/assessment' }
      ]},
      { label: 'Industries We Service', path: '/industries', icon: '↗' },
      { label: 'Functional Roles', path: '/functional', icon: '↗' },
    ]},
  ];

  const closeAll = () => { setHoveredNav(null); setHoveredSubNav(null); };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.98)' : '#FFFFFF',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
        transition: 'all 0.4s ease',
        padding: '0 6vw',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '80px',
      }}>
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src={CompanyLogo} alt="SSV Staff Solution" style={{ height: '50px', objectFit: 'contain' }} />
        </Link>

        {/* Desktop Nav Links */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {NAV_MENU.map((item) => (
            <div
              key={item.path + item.label}
              onMouseEnter={() => setHoveredNav(item.label)}
              onMouseLeave={() => { setHoveredNav(null); setHoveredSubNav(null); }}
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
            >
              <NavLink
                to={item.path}
                end={item.path === '/'}
                style={({ isActive }) => ({
                  color: isActive ? '#1A114D' : '#55B1A8',
                  fontSize: '14px', fontWeight: 700,
                  textDecoration: 'none', fontFamily: "'DM Sans', sans-serif",
                  textTransform: 'uppercase', transition: 'color 0.2s',
                  display: 'flex', alignItems: 'center', gap: '6px'
                })}
                onMouseEnter={e => e.currentTarget.style.color = '#1A114D'}
                onMouseLeave={e => e.currentTarget.style.color = ''}
              >
                {item.label}
                {item.icon && <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.icon}</span>}
              </NavLink>

              {/* Level 1 Dropdown */}
              {item.dropdown && hoveredNav === item.label && (
                <div style={{
                  position: 'absolute', top: '100%', left: '-20px',
                  background: '#5EB1A7',
                  minWidth: '260px',
                  borderRadius: '0 0 12px 12px',
                  padding: '16px 24px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  zIndex: 200,
                  display: 'flex', flexDirection: 'column'
                }}>
                  {item.dropdown.map((dropItem, idx) => (
                    <div
                      key={idx}
                      style={{ position: 'relative' }}
                      onMouseEnter={() => setHoveredSubNav(dropItem.label)}
                      onMouseLeave={() => setHoveredSubNav(null)}
                    >
                      <div
                        onClick={() => { navigate(dropItem.path); closeAll(); }}
                        style={{
                          padding: '16px 0',
                          borderBottom: idx !== item.dropdown.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                          color: 'rgba(255,255,255,0.95)',
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '14px', fontWeight: 500,
                          cursor: 'pointer',
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          transition: 'color 0.2s'
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.95)'}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {dropItem.icon && <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{dropItem.icon}</span>}
                          <span>{dropItem.label}</span>
                        </div>
                        {dropItem.subDropdown && <span style={{ fontSize: '16px', fontWeight: 700 }}>›</span>}
                      </div>

                      {/* Level 2 Sub-Dropdown */}
                      {dropItem.subDropdown && hoveredSubNav === dropItem.label && (
                        <div style={{
                          position: 'absolute', top: '0px', left: '100%', marginLeft: '8px',
                          background: '#5EB1A7',
                          minWidth: '260px',
                          borderRadius: '12px',
                          padding: '16px 24px',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                          zIndex: 201,
                          display: 'flex', flexDirection: 'column'
                        }}>
                          {dropItem.subDropdown.map((subItem, sIdx) => (
                            <div
                              key={sIdx}
                              onClick={() => { navigate(subItem.path); closeAll(); }}
                              style={{
                                padding: '16px 0',
                                borderBottom: sIdx !== dropItem.subDropdown.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                                color: 'rgba(255,255,255,0.95)',
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: '14px', fontWeight: 500,
                                cursor: 'pointer',
                                transition: 'color 0.2s'
                              }}
                              onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
                              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.95)'}
                            >
                              {subItem.label}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA Button (desktop) */}
        <div className="nav-desktop">
          <NavLink to="/contact" style={({ isActive }) => ({
            background: isActive ? '#1A114D' : '#55B1A8',
            color: '#FFFFFF', padding: '12px 28px',
            fontSize: '14px', textTransform: 'uppercase',
            textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
            transition: 'background 0.2s', borderRadius: '4px', display: 'inline-block'
          })}
          onMouseEnter={e => e.currentTarget.style.background = '#44A096'}
          onMouseLeave={e => e.currentTarget.style.background = ''}
          >Contact Us</NavLink>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer',
            padding: '8px', flexDirection: 'column', gap: '5px'
          }}
        >
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#1A114D', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#1A114D', transition: 'all 0.3s', opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#1A114D', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div style={{
        position: 'fixed', top: '80px', left: 0, right: 0,
        background: '#5EB1A7',
        zIndex: 99,
        maxHeight: mobileOpen ? '100vh' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s ease',
        boxShadow: mobileOpen ? '0 8px 24px rgba(0,0,0,0.12)' : 'none'
      }}>
        <div style={{ padding: '16px 24px 32px' }}>
          {NAV_MENU.map((item) => (
            <div key={item.label}>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
              }}>
                <span
                  onClick={() => { if (!item.dropdown) { navigate(item.path); setMobileOpen(false); } else { setMobileExpanded(mobileExpanded === item.label ? null : item.label); } }}
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', fontWeight: 700, color: '#FFFFFF', cursor: 'pointer', textTransform: 'uppercase' }}
                >
                  {item.label}
                </span>
                {item.dropdown && (
                  <span
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    style={{ color: '#FFFFFF', fontSize: '20px', cursor: 'pointer', padding: '0 8px' }}
                  >
                    {mobileExpanded === item.label ? '−' : '+'}
                  </span>
                )}
              </div>
              {/* Mobile sub-items */}
              {item.dropdown && mobileExpanded === item.label && (
                <div style={{ paddingLeft: '20px' }}>
                  {item.dropdown.map((dropItem, idx) => (
                    <div key={idx}>
                      <div
                        onClick={() => { if (!dropItem.subDropdown) { navigate(dropItem.path); setMobileOpen(false); setMobileExpanded(null); } else { setMobileExpanded(mobileExpanded === dropItem.label ? item.label : dropItem.label); } }}
                        style={{
                          padding: '12px 0',
                          borderBottom: '1px solid rgba(255,255,255,0.1)',
                          color: 'rgba(255,255,255,0.9)',
                          fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: 500,
                          cursor: 'pointer',
                          display: 'flex', justifyContent: 'space-between'
                        }}
                      >
                        <span>{dropItem.label}</span>
                        {dropItem.subDropdown && <span style={{ color: '#FFFFFF', fontSize: '14px' }}>{mobileExpanded === dropItem.label ? '−' : '+'}</span>}
                      </div>
                      {/* Mobile level 2 */}
                      {dropItem.subDropdown && mobileExpanded === dropItem.label && (
                        <div style={{ paddingLeft: '16px' }}>
                          {dropItem.subDropdown.map((sub, sIdx) => (
                            <div
                              key={sIdx}
                              onClick={() => { navigate(sub.path); setMobileOpen(false); setMobileExpanded(null); }}
                              style={{
                                padding: '10px 0',
                                borderBottom: '1px solid rgba(255,255,255,0.08)',
                                color: 'rgba(255,255,255,0.85)',
                                fontFamily: "'DM Sans', sans-serif", fontSize: '13px',
                                cursor: 'pointer'
                              }}
                            >
                              {sub.label}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setMobileOpen(false)}
            style={{ display: 'block', marginTop: '24px', background: '#1A114D', color: '#FFFFFF', padding: '16px', textAlign: 'center', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '14px', textDecoration: 'none', borderRadius: '6px', textTransform: 'uppercase' }}
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}
