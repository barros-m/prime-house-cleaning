import React from 'react';
import logo from '../../assets/images/logos/logo-no-background-title-only.png';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;