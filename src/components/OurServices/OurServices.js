import React from 'react';
import './OurServices.css';
import cleaningImage1 from '../../assets/images/our_services_images/moving.jpg';
import cleaningImage2 from '../../assets/images/our_services_images/kitchen.jpg';
import cleaningImage3 from '../../assets/images/our_services_images/cleaning-crew-2.jpg';

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="our-service-content">
        <div className="service">
          <div className="service-image">
            <img src={cleaningImage3} alt="General Cleaning" />
          </div>
          <div className="service-group" id="hire-us">
            <h2>Why hire us?</h2>
            <p>
            Why compromise on cleanliness? With House Cleaning Prime, you can trust in the expertise of our experienced professional cleaner. From meticulous move-in and move-out cleaning to post-party cleanup, we handle it all with precision and care. Enjoy the convenience of a clean home without the hassle. Discover the exceptional service of House Cleaning Prime today!
            </p>
          </div>
        </div>
        <h2 className='b-20'>Our services</h2>
        <div className="service">
          <div className="service-group">
            <div className="service-details">
              <div className="service-block">
                <h3>Kitchen Cleaning</h3>
                <p>Dusting, Vacuuming, Empty Trash, Bed make-up</p>
              </div>
            </div>
            <div className="service-details">
              <div className="service-block">
                <h3>One-Time Cleaning</h3>
                <p>Customized cleaning for special occasions</p>
              </div>
            </div>
          </div>
          <div className="service-image">
            <img src={cleaningImage2} alt="Kitchen Cleaning" />
          </div>
        </div>
        <div className="service">
          <div className="service-image">
            <img src={cleaningImage1} alt="Kitchen Cleaning" />
          </div>
          <div className="service-group">
            <div className="service-details">
              <div className="service-block">
                <h3>General Cleaning</h3>
                <p>Bathroom, Floor Ceiling fan cleaning</p>
              </div>
            </div>
            <div className="service-details">
              <div className="service-block">
                <h3>Move-in, Move-out Cleaning</h3>
                <p>Before and after party</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
