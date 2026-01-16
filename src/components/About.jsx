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

          <div className="about-modern-section">
            {/* Main Content Card */}
            <div className="about-content-card" data-aos="fade-up" data-aos-once="true">
              <div className="about-intro">
                <h3 className="about-title">Welcome, Innovators and Change-Makers!</h3>
                <div className="about-highlight">
                  <span className="highlight-text">ADCET HACKATHON – SEASON 3</span>
                  <p className="highlight-tagline">Fostering Innovation for a Brighter Tomorrow</p>
                </div>
              </div>

              <div className="about-description">
                <p>
                  Where boundless creativity meets game-changing innovation! 
                  Hosted by <span className="accent-text">Annasaheb Dange College of Engineering & Technology, Ashta</span>
                  {' '}(An Empowered Autonomous Institute), this hackathon is your golden ticket to transform bold ideas into impactful solutions.
                </p>
                
                <div className="about-details-grid">
                  <div className="detail-item" data-aos="zoom-in" data-aos-delay="100">
                    <div className="detail-icon">📅</div>
                    <div className="detail-content">
                      <h4>Event Date</h4>
                      <p>12th – 14th March 2026</p>
                      <span className="detail-sub">72-hour innovation marathon</span>
                    </div>
                  </div>

                  <div className="detail-item" data-aos="zoom-in" data-aos-delay="200">
                    <div className="detail-icon">🎯</div>
                    <div className="detail-content">
                      <h4>Focus Themes</h4>
                      <p>SDGs & Viksit Bharat</p>
                      <span className="detail-sub">Real-world challenges</span>
                    </div>
                  </div>

                  <div className="detail-item" data-aos="zoom-in" data-aos-delay="300">
                    <div className="detail-icon">💡</div>
                    <div className="detail-content">
                      <h4>Two Editions</h4>
                      <p>Software & Hardware</p>
                      <span className="detail-sub">Choose your track</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="about-stats-section" data-aos="fade-up" data-aos-delay="400">
              <h3 className="stats-title">By The Numbers</h3>
              <div className="stats-grid">
                <div className="stat-card">
                  <lord-icon
                    src="https://cdn.lordicon.com/srupsmbe.json"
                    trigger="loop"
                    colors="primary:#DC143C,secondary:#FFD700"
                    style={{ width: '80px', height: '80px' }}
                  ></lord-icon>
                  <div className="stat-number">300+</div>
                  <div className="stat-label">Hackers</div>
                </div>

                <div className="stat-card">
                  <lord-icon
                    src="https://cdn.lordicon.com/ogjpwrxe.json"
                    trigger="loop"
                    colors="primary:#DC143C,secondary:#FFD700"
                    style={{ width: '80px', height: '80px' }}
                  ></lord-icon>
                  <div className="stat-number">60+</div>
                  <div className="stat-label">Projects</div>
                </div>

                <div className="stat-card">
                  <lord-icon
                    src="https://cdn.lordicon.com/vttzorhw.json"
                    trigger="loop"
                    delay="1500"
                    state="in-reveal"
                    colors="primary:#DC143C,secondary:#FFD700"
                    style={{ width: '80px', height: '80px' }}
                  ></lord-icon>
                  <div className="stat-number">8</div>
                  <div className="stat-label">Prizes</div>
                </div>

                <div className="stat-card stat-card-highlight">
                  <lord-icon
                    src="https://cdn.lordicon.com/ytklkgsc.json"
                    trigger="loop"
                    delay="1500"
                    state="in-reveal"
                    colors="primary:#DC143C,secondary:#FFD700"
                    style={{ width: '80px', height: '80px' }}
                  ></lord-icon>
                  <div className="stat-number">₹2,00,000</div>
                  <div className="stat-label">Prize Pool</div>
                  <div className="stat-sub">Team Size: 4-5 Members</div>
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
