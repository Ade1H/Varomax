import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

export default function Navbar({ cartCount }) {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'th' ? 'en' : 'th';
    i18n.changeLanguage(nextLang);
  };

  return (
    <nav className="navbar">
      {/* Logo with Varomax text */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}>
        <NavLink 
          to="/" 
          className="logo" 
          onClick={closeMenu}
          style={{ padding: 0 }}
        >
          <img 
            src="/loogo.png" 
            alt="Varomax Logo" 
          />
        </NavLink>
        <span style={{
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '1.2rem', // 👈 CHANGED from 0.85rem to 1.2rem
          fontWeight: 600,
          letterSpacing: '1px',
          marginTop: '-8px',
          textTransform: 'uppercase',
          fontFamily: 'inherit'
        }}>
          Varomax
        </span>
      </div>

      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <NavLink 
          to="/Home" 
          className={({ isActive }) => isActive ? 'active' : ''}
          onClick={closeMenu}
        >
          {t('nav.home')}
        </NavLink>
        
        <NavLink 
          to="/vs-viagra" 
          className={({ isActive }) => isActive ? 'active' : ''}
          onClick={closeMenu}
        >
          {t('nav.vsViagra')}
        </NavLink>
        
        <NavLink 
          to="/shop" 
          className={({ isActive }) => isActive ? 'active' : ''}
          onClick={closeMenu}
        >
          {t('nav.shop')}
        </NavLink>
        
        <NavLink 
          to="/checkout" 
          className={({ isActive }) => isActive ? 'active' : ''}
          onClick={closeMenu}
        >
          {t('nav.checkout')}
        </NavLink>
        
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? 'active' : ''}
          onClick={closeMenu}
        >
          {t('nav.about')}
        </NavLink>

        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? 'active' : ''}
          onClick={closeMenu}
        >
          {t('nav.contact')}
        </NavLink>
      </div>

      {/* Right Side Actions (Cart & Language Switcher) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={toggleLanguage}
          style={{
            background: 'transparent',
            border: '1px solid #ccc',
            color: '#333',
            padding: '6px 10px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '14px'
          }}
        >
          {i18n.language === 'th' ? '🇹🇭 TH' : '🇬🇧 EN'}
        </button>

        <NavLink 
          to="/Cart" 
          className="cart"
          onClick={closeMenu}
        >
          <span style={{
            display: 'inline-block',
            fontSize: '1.3rem',
            background: 'linear-gradient(90deg, #076139ff 50%, #1179e9ff 50%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            🛍️
          </span>
          {t('nav.cart')} ({cartCount})
        </NavLink>
      </div>
    </nav>
  );
}