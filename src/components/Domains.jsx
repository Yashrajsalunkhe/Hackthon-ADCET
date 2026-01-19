const Domains = () => {
  const handleOpenPDF = (filename) => {
    const pdfPath = `/theme/${filename}`;
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="domains" className="twinkle_back container not-selectable" data-section="domains">
      <section className="back_domains">
        <div className="background-container">
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>
        <br />
        <div data-aos="fade-down" data-aos-once="true">
          <div className="heading">
            <h1 className="heading-shadow not-selectable">THEMES</h1>
            <h2 className="heading-small not-selectable" style={{color: '#ffffff'}}>
              {['T', 'H', 'E', 'M', 'E', 'S'].map((letter, index) => (
                <div key={index} style={{overflow: 'hidden'}}>
                  <div style={{transform: 'translateY(0%)', willChange: 'auto'}}>{letter}</div>
                </div>
              ))}
            </h2>
          </div>
          <h2 className="dom_p" style={{color: '#ffffff'}}>
            Choose a problem statement based on the themes below. <br/>
            Solutions can involve Software, Hardware, or a combination of both. <br/>
            <span style={{fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: '10px', display: 'inline-block'}}>
              Download detailed problem statements by clicking on the theme cards below
            </span>
          </h2>

          <div className="cool-domains-container">
            {/* Theme 1: Viksit Bharat */}
            <div className="domain-card-minimal">
              <div className="domain-image-container">
                <img src="/images/Domains/Viksit Bharat- -2047 goals.png" alt="Viksit Bharat" />
                <div className="domain-overlay">
                  <h3>Viksit Bharat</h3>
                  <p>Developed India - Building Tomorrow's Nation</p>
                  <a 
                    className="select-domain-btn"
                    href="https://viksitindia.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore Theme
                  </a>
                </div>
              </div>
            </div>

            {/* Clean Separator */}
            <div className="domain-separator">
              <div className="separator-line"></div>
              <span className="separator-text">OR</span>
              <div className="separator-line"></div>
            </div>

            {/* Theme 2: Sustainable Development Goals */}
            <div className="domain-card-minimal">
              <div className="domain-image-container">
                <img src="/images/Domains/sdg goals.png" alt="Sustainable Development Goals" />
                <div className="domain-overlay">
                  <h3>Sustainable Development Goals (SDGs)</h3>
                  <p>Creating Solutions for a Sustainable Future</p>
                  <a
                    className="select-domain-btn"
                    
                    href="https://sdgs.un.org/goals"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore Theme
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Domains;
