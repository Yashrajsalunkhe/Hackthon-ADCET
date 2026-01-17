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
                  Hosted by <span className="highlight-primary">Annasaheb Dange College of Engineering & Technology, Ashta</span> (An Empowered Autonomous Institute), this hackathon is your golden ticket to transform bold ideas into impactful solutions.
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
                    Join us for a <strong>72-hour innovation marathon</strong> focused on <span className="highlight-accent">Sustainable Development Goals (SDGs)</span> and <span className="highlight-accent">Viksit Bharat</span> themes. Team up with brilliant minds, tackle real-world challenges, and push the boundaries of technology!
                  </p>
                </div>

                <div className="editions-wrapper">
                  <div className="edition-badge software-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    <span>Software Edition</span>
                  </div>
                  <div className="edition-badge hardware-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <span>Hardware Edition</span>
                  </div>
                </div>

                <div className="college-info-cta" style={{ marginTop: '2rem', textAlign: 'center' }}>
                  <button 
                    onClick={() => navigate('/college-info')}
                    className="college-info-button"
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      padding: '1rem 2rem',
                      borderRadius: '50px',
                      border: 'none',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span>To Know More About ADCET</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
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
