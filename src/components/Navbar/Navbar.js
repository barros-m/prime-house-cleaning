import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logos/logo-no-background-title-only.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link
          to="home"
          smooth={true}
          duration={500}
        >
          <img src={logo} alt="House Cleaning Prime" className="logo-icon" />
        </Link>
      </div>
      <div className="navbar-menu">
        <ul>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
