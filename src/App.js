import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
    // Get cleaning images from here:  https://unsplash.com/s/photos/cleaning
    // and check this website: https://my.sites.logo.com/preview/6d8cd7005c5e49b689e45cc4c9329570?templateId=1003737&languageCode=en&_gl=1*91hl2q*_gcl_au*MTQ1MTMzNTUyOC4xNjg4NzgwMTY2*_ga*NTg0MjA0MDguMTY4ODc4MDE2Ng..*_ga_8Y782WJ29W*MTY4ODc4MDE2Ni4xLjEuMTY4ODc4MTk1Ny41MC4wLjA.
    return (
        <div className="App">
            <Navbar/>
            <Hero />
            <Footer />
        </div>
    );
}

export default App;
