import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    const phoneNumber = '561-674-6458';

    const handleCallButtonClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <section className="about-me">
            <div class="section-content">
                <div className="about-content">
                    <div className='block-title'>About Us</div>
                    <p>
                    At House Cleaning Prime, we understand that your time is valuable. With our dedicated cleaning professional, we offer a personalized and detailed approach to meet your cleaning needs. Our expertise and meticulous attention to detail ensure that your home is spotless and welcoming, giving you the freedom to focus on what matters most.
                    </p>
                </div>
                <div className="contact-info">
                    <div className='block-title'>Contact Information</div>
                    <p><strong>Languages:</strong> Portuguese, English, Spanish</p>
                    <p onClick={handleCallButtonClick}><strong>Phone Number:</strong>+1 (561) 674-6458<span style={{marginLeft: '15px', color: 'red'}}>Free Estimate</span></p>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;
