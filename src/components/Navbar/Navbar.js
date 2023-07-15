import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/images/logos/logo-no-background-title-only.png';

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      toggleMobileMenu();
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const scrollThreshold = windowHeight / 2;

      const opacity = 1 - (scrollPosition / scrollThreshold);
      setNavbarVisible(opacity > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
        <div className='navbar-content'>
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="navbar-menu">
                <li className="menu-item" onClick={() => scrollToSection('about-us')}>About Us</li>
                <li className="menu-item" onClick={() => scrollToSection('our-services')}>Services</li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;
