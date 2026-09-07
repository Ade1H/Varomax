import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css'; // Import the CSS file

export default function Navbar({ cartCount }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <NavLink 
        to="/" 
        className="logo" 
        onClick={closeMenu}
      >
        <img 
          src="/loogo.png" 
          alt="Varomax Logo" 
        />
      </NavLink>

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
          Home
        </NavLink>
        
        <NavLink 
          to="/vs-viagra" 
          className={({ isActive }) => isActive ? 'active' : ''}
          onClick={closeMenu}
        >
          Varomax vs Viagra
        </NavLink>
        
        <NavLink 
          to="/shop" 
          className={({ isActive }) => isActive ? 'active' : ''}
          onClick={closeMenu}
        >
          Shop
        </NavLink>
        
        <NavLink 
          to="/checkout" 
          className={({ isActive }) => isActive ? 'active' : ''}
          onClick={closeMenu}
        >
          Checkout
        </NavLink>
        
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? 'active' : ''}
          onClick={closeMenu}
        >
          About
        </NavLink>
      </div>

      {/* Cart Button */}
      <NavLink 
        to="/Cart" 
        className="cart"
        onClick={closeMenu}
      >
        🛒 Cart ({cartCount})
      </NavLink>
    </nav>
  );
}