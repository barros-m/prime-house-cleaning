import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section className="about-me">
            <div class="section-content">
                <div className="about-content">
                    <h2>About Us</h2>
                    <p>
                    At House Cleaning Prime, we understand that life can get busy. That's why we're here to help! Too busy to clean? We can do it for you. 
                    Our professional cleaning services are designed to take the stress out of maintaining a clean and tidy home. With our team of experienced 
                    cleaners, state-of-the-art equipment, and attention to detail, we'll ensure that your home sparkles and shines. Sit back, relax, and let 
                    us handle the cleaning while you focus on what matters most to you. Discover the convenience and quality of House Cleaning Prime today!
                    </p>
                </div>
                <div className="contact-info">
                <h2>Contact Information</h2>
                <p><strong>Name:</strong> Silvana</p>
                <p><strong>Languages:</strong> Portuguese, English, Spanish</p>
                <p><strong>Phone Number:</strong> +1 (561) 674-6458</p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
