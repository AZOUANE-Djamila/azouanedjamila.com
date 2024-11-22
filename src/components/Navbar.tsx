import React, { useState } from 'react';
import '../styles/navbar.scss';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>
      
      <div className={`menu ${menuActive ? 'active' : ''}`}>
        <div className="menu-item"><a href="/">Home</a></div>
        <div className="menu-item"><a href="/experiences">Experiences</a></div>
        <div className="menu-item"><a href="/projects">Projects</a></div>
        <div className="menu-item"><a href="/contact">Contact</a></div>
      </div>

      <button className="burger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
