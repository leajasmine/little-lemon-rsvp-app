import React, { useState } from 'react';
import logo from './images/Logo.svg';

const Nav = () => { 
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    return (
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>

        {/* mobile navbar */}
          <div className="menu-icon" onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>

        {/* nav items */}
          <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">ABOUT</a>
            </li>
            <li>
              <a href="/">MENU</a>
            </li>
            <li>
              <a href="/">RESERVATIONS</a>
            </li>
            <li>
              <a href="/">ORDER ONLINE</a>
            </li>
            <li>
              <a href="/">LOGIN</a>
            </li>
          </ul>
      </nav>
  );
};

export default Nav;