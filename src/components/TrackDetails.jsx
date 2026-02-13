import { useParams, useNavigate } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Home } from 'lucide-react';
import Footer from './Footer';
import '../styles/track-details.css';

const TrackDetails = () => {
  const { track } = useParams();
  const navigate = useNavigate();
  useScrollToTop();

  const softwareThemes = [
    { sr: 1, category: 'Generative AI & Autonomous Systems', description: 'Develop intelligent software systems that can generate content, make decisions, and operate autonomously with minimal human intervention.' },
    { sr: 2, category: 'Quantum Computing Applications (Software Perspective)', description: 'Build software applications, simulators, or hybrid models that demonstrate real-world problem solving using quantum or quantum-inspired computing.' },
    { sr: 3, category: 'Digital Twins for Industry & Infrastructure', description: 'Create virtual replicas of physical systems to monitor, simulate, optimize, and predict performance of industrial or infrastructure assets.' },
    { sr: 4, category: 'Digital Governance & e-Public Services', description: 'Develop digital platforms that enhance government service delivery, citizen engagement, transparency, and administrative efficiency' },
    { sr: 5, category: 'EdTech 5.0 – Personalized & Immersive Learning', description: 'Propose technology-driven learning solutions that adapt to individual learners using AI, analytics, and immersive technologies.' },
    { sr: 6, category: 'GameTech & Serious Games for Impact', description: 'Build games or interactive simulations aimed at education, training, awareness, and social or behavioural impact' },
    { sr: 7, category: 'System Smart Supply Chain & Logistics Intelligence', description: 'Create data-driven software solutions to optimize logistics, forecasting, traceability, and supply chain efficiency' },
    { sr: 8, category: 'AR/VR Solutions', description: 'Develop immersive augmented or virtual reality applications for education, training, healthcare, industry, or social impact.' },
    { sr: 9, category: 'Cyber Security', description: 'Design and develop a comprehensive and extensible e-application fuzzing framework that automates the discovery and security testing of key web application components.' },
    { sr: 10, category: 'Blockchain Technology', description: 'Develop a secure, technology-enabled digital platform for creating, managing, and enforcing assured contractual agreements among stakeholders across diverse sectors.' }
  ];

  const hardwareThemes = [
    { sr: 1, category: 'Smart Resource Optimization System', description: 'Design a hardware-based system to monitor and optimize the usage of energy, water, materials, or fuel in industrial, institutional, or domestic applications.' },
    { sr: 2, category: 'Affordable Automation for Small-Scale Industries', description: 'Develop a low-cost automated or semi-automated hardware solution to improve productivity, quality, or safety in small-scale or cottage industries.' },
    { sr: 3, category: 'Smart Safety and Monitoring Device', description: 'Create a hardware solution that enhances safety, security, or hazard detection in workplaces, laboratories, construction sites, or public environments.' },
    { sr: 4, category: 'Sustainable and Green Technology Solution', description: 'Design an eco-friendly hardware prototype focusing on renewable energy, waste reduction, recycling, or environmental monitoring.' },
    { sr: 5, category: 'Smart Infrastructure and Built Environment', description: 'Develop a hardware-enabled system for smart buildings, smart campuses, roads, or infrastructure monitoring' },
    { sr: 6, category: 'Assistive Technology for Health and Accessibility', description: 'Build a hardware-based assistive device supporting healthcare, elderly care, or differently-abled individuals.' },
    { sr: 7, category: 'Smart Agriculture and Food Processing System', description: 'Design a hardware solution to enhance agricultural productivity, food processing efficiency, quality control, or storage.' },
    { sr: 8, category: 'Predictive Maintenance and Fault Detection', description: 'Develop a system capable of detecting faults or predicting maintenance requirements in machines, structures, or equipment.' },
    { sr: 9, category: 'Smart Mobility and Transportation Solution', description: 'Create an innovative hardware model to improve transportation safety, efficiency, or monitoring in ground or aerial systems' },
    { sr: 10, category: 'Digital-Physical Integration for Business Applications', description: 'Design a hardware–software integrated solution for inventory management, logistics, operational tracking, or business process optimization.' }
  ];

  const isSoftware = track === 'software';
  const themes = isSoftware ? softwareThemes : hardwareThemes;

  return (
    <div className="track-details-page">
      {/* Background Effects */}
      <div className="track-bg-effects">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      {/* Home Button */}
      <button
        onClick={() => navigate('/')}
        className="track-home-button"
        title="Back to Home"
      >
        <Home size={24} />
      </button>

      <div className="track-details-container">
        {/* Header */}
        <div className="track-details-header">
          <div className={`track-badge ${isSoftware ? 'software' : 'hardware'}`}>
            {isSoftware ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="20" height="20">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="20" height="20">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            )}
            <span>{isSoftware ? 'Software' : 'Hardware'} Track</span>
          </div>

          <h1 className={`track-title ${isSoftware ? 'software-gradient' : 'hardware-gradient'}`}>
            {isSoftware ? 'Software Edition' : 'Hardware Edition'}
          </h1>

          <div className="track-prize-info">
            <span className="prize-label">Prize Pool:</span>
            <span className="prize-amount">₹1,00,000</span>
            <span className="prize-breakdown">1st: ₹50K &bull; 2nd: ₹30K &bull; 3rd: ₹20K</span>
          </div>

          <p className="track-duration">
            {isSoftware 
              ? '⏱️ 36 hours of intense coding and innovation' 
              : '⏱️ 42 hours to build and prototype your solution'}
          </p>
        </div>

        {/* Theme Cards Grid */}
        <div className="track-themes-grid">
          {themes.map((theme, index) => (
            <div
              key={index}
              className={`track-theme-card ${isSoftware ? 'software-card' : 'hardware-card'}`}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              data-aos-once="true"
            >
              <div className="track-theme-number">
                <span>{String(theme.sr).padStart(2, '0')}</span>
              </div>
              <div className="track-theme-content">
                <h3 className="track-theme-title">{theme.category}</h3>
                <p className="track-theme-description">{theme.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="track-back-section">
          <button className="track-back-btn" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TrackDetails;
