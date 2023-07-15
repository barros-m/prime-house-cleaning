import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/images/logos/logo-no-background-title-only.png';

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      if (isMobile) toggleMobileMenu();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
        <div className='navbar-content'>
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            {!isMobile && (
              <ul className="navbar-menu">
                  <li className="menu-item" onClick={() => scrollToSection('about-us')}>About Us</li>
                  <li className="menu-item" onClick={() => scrollToSection('our-services')}>Services</li>
              </ul>
            )}
        </div>
    </nav>
  );
};

export default Navbar;
