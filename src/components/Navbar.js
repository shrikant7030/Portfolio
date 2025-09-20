import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`} id={expandNavbar ? 'open' : 'close'}>
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          Shrikant Goski
        </Link>
        
        <button 
          className="toggleButton"
          onClick={() => setExpandNavbar((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <ReorderIcon />
        </button>
        
        <div className="links">
          <Link 
            to="/" 
            className={isActive('/') ? 'active' : ''}
          >
            Home
          </Link>
          <Link 
            to="/Projects" 
            className={isActive('/Projects') ? 'active' : ''}
          >
            Projects
          </Link>
          <Link 
            to="/Experience" 
            className={isActive('/Experience') ? 'active' : ''}
          >
            Experience
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;