import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/logos/logo-no-background-title-only.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li className="menu-item">Services</li>
        <li className="menu-item">About Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
