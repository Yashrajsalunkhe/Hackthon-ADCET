import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

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
                    Join us for an innovation marathon where participants ideate, design, and implement innovative solutions addressing real-world challenges such as sustainable agriculture, clean energy, smart cities, healthcare accessibility, quality education, and more. This hackathon serves as a platform to transform ideas into impactful solutions!
                    <br/><br/>
                    <strong style={{color: '#667eea'}}>Software Track:</strong> 36 hours of intense coding and innovation<br/>
                    <strong style={{color: '#f093fb'}}>Hardware Track:</strong> 42 hours to build and prototype your solution
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
                    onClick={() => navigate('/track/software')}
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
                    onClick={() => navigate('/track/hardware')}
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

      <br /><br />
    </section>
  );
};

export default About;
