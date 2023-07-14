import React from 'react';
import './OurServices.css';

const OurServices = () => {
  return (
    <section className="our-services">
      <h2>Our Services</h2>
      <div className="service">
        <h3>General Cleaning</h3>
        <p>Bathroom, Floor Ceiling fan cleaning</p>
      </div>
      <div className="service">
        <h3>Kitchen Cleaning</h3>
        <p>Dusting, Vacuuming, Empty Trash, Bed make-up</p>
      </div>
      <div className="service">
        <h3>Move-in, Move-out Cleaning</h3>
        <p>Before and after party</p>
      </div>
      <div className="service">
        <h3>One-Time Cleaning</h3>
        <p>Customized cleaning for special occasions</p>
      </div>
    </section>
  );
};

export default OurServices;
