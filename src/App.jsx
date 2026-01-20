import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Glimpse from './components/Glimpse';
import Domains from './components/Domains';
import Prizes from './components/Prizes';
import Timeline from './components/Timeline';
import Rules from './components/Rules';
import Sponsors from './components/Sponsors';
import Partnership from './components/Partnership';
import Team from './components/Team';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CollegeInfo from './components/CollegeInfo';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/timeline-modern.css';
import './styles/about-modern.css';
import './styles/about-enhanced.css';
import './styles/about-redesign.css';
import './styles/rules.css';
import './styles/navbar.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Preloader
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.style.transition = '1s ease';
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 1000);
      }, 1000);
    }
  }, []);

  return (
    <div className="App">
      <div id="preloader"></div>
      <Routes>
        <Route path="/college-info" element={<CollegeInfo />} />
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Glimpse />
            <Domains />
            <Prizes />
            <Timeline />
            <Rules />
            <Sponsors />
            <Partnership />
            <Team />
            <Contact />
            <FAQ />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
