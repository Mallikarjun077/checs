import React, { useState } from 'react';
import './nav.css';
import checs from './assets/checs.png';

const Nav = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="nav">
      <div className="nav-left">
        <img src={checs} alt="Logo" className="checs" />
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; 
        </div>
      </div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a onClick={() => scrollToSection('home')}>Home</a>
        <a onClick={() => scrollToSection('about')}>About</a>
        <a onClick={() => scrollToSection('infrastructure')}>Infrastructure</a>
        <a onClick={() => scrollToSection('services')}>Services</a>
        <a onClick={() => scrollToSection('contact')}>Contact</a>
      </div>
    </nav>
  );
};

export default Nav;
