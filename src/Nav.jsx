import React from 'react';
import './nav.css';
import checs from './assets/checs.png';

const Nav = ({ scrollToSection }) => {
  return (
    <nav id="nav">
      <a onClick={() => scrollToSection('home')}><img src={checs} alt="Logo" className="checs" /></a>
      <a onClick={() => scrollToSection('home')}>Home</a>

      <a onClick={() => scrollToSection('about')}>About</a>
      <a onClick={() => scrollToSection('infrastructure')}>Infrastructure</a>
      <a onClick={() => scrollToSection('services')}>Services</a>
      <a onClick={() => scrollToSection('contact')}>Contact</a>
    </nav>
  );
};

export default Nav;
