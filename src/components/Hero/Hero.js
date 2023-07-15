import React from 'react';
import './Hero.css';
import cleaningImage from '../../assets/images/cleaning-crew.jpg';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="slogan">Too busy to clean?<br/>We can do it for you.</h1>
        <p className="subtitle">Weekly | Bi-weekly | Monthly | One-Time Cleaning Services</p>
        <div className='button-group'>
          <button className="cta-button">Email Us</button>
        </div>
        
      </div>
      <div className="hero-image">
        <img src={cleaningImage} alt="Cleaning" />
      </div>
    </section>
  );
};

export default Hero;
