import React from 'react';
import './Hero.css';
import cleaningImage from '../../assets/images/cleaning-image.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image" style={{ backgroundImage: `url(${cleaningImage})` }}></div>
      <div className="hero-content">
        <h1 className="slogan">Your Sparkling Clean Home Awaits</h1>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
