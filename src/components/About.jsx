const About = () => {
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
