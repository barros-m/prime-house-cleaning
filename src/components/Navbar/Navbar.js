import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/logos/logo-no-background-title-only.png';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className='navbar-content'>
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="navbar-menu">
                <li className="menu-item">About Us</li>
                <li className="menu-item">Services</li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;
