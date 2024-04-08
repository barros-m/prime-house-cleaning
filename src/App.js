import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import OurServices from "./components/OurServices/OurServices";
import './assets/fonts/fonts.css';
import { FiMessageSquare } from "react-icons/fi";

function App() {
    // Get cleaning images from here:  https://unsplash.com/s/photos/cleaning
    // and check this website: https://my.sites.logo.com/preview/6d8cd7005c5e49b689e45cc4c9329570?templateId=1003737&languageCode=en&_gl=1*91hl2q*_gcl_au*MTQ1MTMzNTUyOC4xNjg4NzgwMTY2*_ga*NTg0MjA0MDguMTY4ODc4MDE2Ng..*_ga_8Y782WJ29W*MTY4ODc4MDE2Ni4xLjEuMTY4ODc4MTk1Ny41MC4wLjA.
    
    const handleSmsClick = () => {
        window.open('sms:+15616746458?body=Hi%2C%20I%E2%80%99m%20interested%20in%20learning%20more%20about%20your%20cleaning%20services%20and%20getting%20a%20free%20estimate.%20Thank%20you%21', '_blank');
    };
    
    

    return (
        <div className="App">
            <Navbar/>
            <Hero />
            <div id="about-us">
                <AboutMe/>
            </div>
            <div id="our-services">
                <OurServices/>
            </div>
            
            <Footer />
            <button className="whatsapp-button" onClick={handleSmsClick}>
                <FiMessageSquare />
            </button>
        </div>
    );
}

export default App;
