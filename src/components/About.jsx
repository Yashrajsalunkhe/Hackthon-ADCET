import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('');

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

  const openModal = (track) => {
    setSelectedTrack(track);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTrack('');
  };

  return (
    <section className="back_about twinkle_back not-selectable" id="about" data-section="about">
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <div className="container abo-pat">
        <div data-aos="fade-down" data-aos-once="true">
          {/* HEADING */}
          <div className="heading not-selectable">
            <h1 className="heading-shadow not-selectable">ABOUT</h1>
            <h2 className="heading-small" style={{ color: '#ffffff' }}>
              {['A', 'B', 'O', 'U', 'T'].map((letter, index) => (
                <div key={index} style={{ overflow: 'hidden' }}>
                  <div style={{ transform: 'translateY(0%)', willChange: 'auto' }}>{letter}</div>
                </div>
              ))}
            </h2>
          </div>
          {/* end of heading */}

          <div className="about-content-wrapper">
            <div className="about-main-content" data-aos="fade-up" data-aos-once="true" data-aos-duration="800">
              <div className="about-intro-card">
                <div className="intro-badge">
                  <span className="badge-dot"></span>
                  Season 3 • 2026
                </div>
                <h3 className="welcome-title">Welcome, Innovators and Change-Makers!</h3>
                <div className="intro-divider"></div>
                
                <p className="about-para-enhanced">
                  Introducing <span className="highlight-primary">ADCET HACKATHON – SEASON 3</span>, where boundless creativity meets game-changing innovation! <span className="highlight-secondary">Fostering Innovation for a Brighter Tomorrow</span>.
                </p>
                
                <p className="about-para-enhanced">
                  For a quarter of a century, <span className="highlight-primary">Annasaheb Dange College of Engineering & Technology (ADCET), Ashta</span>, has been a beacon of academic excellence and innovation. Established in 1999, ADCET has consistently strived for excellence, producing generations of skilled professionals and contributing to the advancement of technology and society.
                </p>
                
                <p className="about-para-enhanced">
                  ADCET Hackathon Season 3 is a flagship innovation event aimed at nurturing creativity, problem-solving, and entrepreneurial thinking among students. Aligned with the <span className="highlight-accent">United Nations' Sustainable Development Goals (SDGs)</span> and the Hon'ble Prime Minister's vision of <span className="highlight-accent">Viksit Bharat-2047</span>, participants develop technology-driven solutions for a self-reliant, inclusive, and sustainable India.
                </p>
                
                <div className="event-highlight-box">
                  <div className="event-date-wrapper">
                    <svg className="calendar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span className="event-date">12th – 14th March 2026</span>
                  </div>
                  <p className="event-description">
                    Join us for a <strong>48-hour innovation marathon</strong> where participants ideate, design, and implement innovative solutions addressing real-world challenges such as sustainable agriculture, clean energy, smart cities, healthcare accessibility, quality education, and more. This hackathon serves as a platform to transform ideas into impactful solutions!
                  </p>
                  
                  <div style={{marginTop: '20px', padding: '15px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '10px', borderLeft: '3px solid #667eea'}}>
                    <p style={{margin: 0, fontSize: '0.95rem', lineHeight: '1.6'}}>
                      <strong style={{color: '#667eea'}}>Key Details:</strong><br/>
                      📍 <strong>Location:</strong> ADCET, Ashta, Taluka Walwa, District Sangli, Maharashtra - 416301<br/>
                      👥 <strong>Team Size:</strong> 4-5 Members (At least one girl student mandatory)<br/>
                      🏆 <strong>Prize Pool:</strong> ₹2,00,000 (Software & Hardware tracks)<br/>
                      📋 <strong>Eligibility:</strong> Undergraduate Engineering Students from recognized institutions
                    </p>
                  </div>
                </div>

                <div className="editions-wrapper">
                  <div 
                    className="edition-badge software-badge"
                    onClick={() => openModal('software')}
                    style={{cursor: 'pointer'}}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    <span>Software Edition</span>
                  </div>
                  <div 
                    className="edition-badge hardware-badge"
                    onClick={() => openModal('hardware')}
                    style={{cursor: 'pointer'}}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <span>Hardware Edition</span>
                  </div>
                  <div 
                    className="edition-badge college-badge"
                    onClick={() => navigate('/college-info')}
                    style={{
                      cursor: 'pointer',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                      border: '2px solid #3b82f6',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)';
                      e.currentTarget.style.borderColor = '#2563eb';
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(59, 130, 246, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)';
                      e.currentTarget.style.borderColor = '#3b82f6';
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.4)';
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{color: '#fff', width: '28px', height: '28px'}}>
                      <path strokeWidth="2" d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path strokeWidth="2" d="M2 17l10 5 10-5"></path>
                      <path strokeWidth="2" d="M2 12l10 5 10-5"></path>
                    </svg>
                    <span style={{
                      color: '#fff',
                      fontWeight: '700',
                      fontSize: '16px',
                      textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}>
                      🎓 Know More About ADCET
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Theme Details */}
      {showModal && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            padding: '20px',
            overflow: 'auto'
          }}
          onClick={closeModal}
        >
          <div 
            style={{
              backgroundColor: '#1a1a2e',
              borderRadius: '20px',
              maxWidth: '1200px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              padding: '40px',
              position: 'relative',
              border: '2px solid rgba(102, 126, 234, 0.3)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '24px',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'rotate(0deg)';
              }}
            >
              ×
            </button>

            {/* Header */}
            <div style={{textAlign: 'center', marginBottom: '30px'}}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#fff',
                marginBottom: '10px',
                background: selectedTrack === 'software' 
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {selectedTrack === 'software' ? 'Software Edition' : 'Hardware Edition'}
              </h2>
              <p style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem'}}>
                Prize Pool: ₹1,00,000
              </p>
              <p style={{color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.95rem'}}>
                Winner: ₹50,000 • Runner Up: ₹30,000 • 2nd Runner Up: ₹20,000
              </p>
            </div>

            {/* Theme Table */}
            <div style={{overflowX: 'auto'}}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                color: '#fff'
              }}>
                <thead>
                  <tr style={{
                    background: selectedTrack === 'software' 
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  }}>
                    <th style={{
                      padding: '15px',
                      textAlign: 'left',
                      fontWeight: '600',
                      fontSize: '1.1rem',
                      width: '80px'
                    }}>Sr. No.</th>
                    <th style={{
                      padding: '15px',
                      textAlign: 'left',
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}>Theme Category</th>
                    <th style={{
                      padding: '15px',
                      textAlign: 'left',
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}>Theme Description</th>
                  </tr>
                </thead>
                <tbody>
                  {(selectedTrack === 'software' ? softwareThemes : hardwareThemes).map((theme, index) => (
                    <tr 
                      key={index}
                      style={{
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <td style={{
                        padding: '15px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: selectedTrack === 'software' ? '#667eea' : '#f5576c'
                      }}>
                        {theme.sr}
                      </td>
                      <td style={{
                        padding: '15px',
                        fontSize: '1rem',
                        fontWeight: '600'
                      }}>
                        {theme.category}
                      </td>
                      <td style={{
                        padding: '15px',
                        fontSize: '0.95rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        lineHeight: '1.6'
                      }}>
                        {theme.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div style={{
              marginTop: '30px',
              textAlign: 'center',
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '10px'
            }}>
              <p style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem', margin: 0}}>
                Choose a theme that aligns with your passion and skills to create innovative solutions for a better tomorrow!
              </p>
            </div>
          </div>
        </div>
      )}

      <br /><br />
    </section>
  );
};

export default About;
