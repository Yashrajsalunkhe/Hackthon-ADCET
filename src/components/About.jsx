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

          <div className="about-section" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="col-lg-5 align-self-center" data-aos="zoom-in" data-aos-once="true">
              <br />
              <h3>Welcome, Innovators and Change-Makers!</h3>
              <br />
              <p className="about-para">
                Introducing <span>ADCET HACKATHON – SEASON 3</span>, where boundless creativity meets game-changing
                innovation! <span>Fostering Innovation for a Brighter Tomorrow</span>.
                Hosted by <span>Annasaheb Dange College of Engineering & Technology, Ashta</span>
                (An Empowered Autonomous Institute), this hackathon is your golden ticket to transform bold ideas into impactful solutions.
                <br /><br />
                Join us on <span>12th – 14th March 2026</span> for a 72-hour innovation marathon focused on
                <span> Sustainable Development Goals (SDGs)</span> and <span>Viksit Bharat</span> themes.
                Team up with brilliant minds, tackle real-world challenges, and push the boundaries of technology!
                <br /><br />
                Available in both <span>Software Edition</span> and <span>Hardware Edition</span>.
              </p>

              <div className="icon-container">
                <div className="icon-man">
                  <span className="center">
                    <lord-icon
                      src="https://cdn.lordicon.com/srupsmbe.json"
                      trigger="loop"
                      colors="primary:#ffffff,secondary:#ffffff"
                      style={{ width: '70px', height: '70px' }}
                    ></lord-icon>
                  </span>
                  <p>300+ Hackers</p>
                </div>

                <div className="icon-projects">
                  <span className="center">
                    <lord-icon
                      src="https://cdn.lordicon.com/ogjpwrxe.json"
                      trigger="loop"
                      colors="primary:#ffffff,secondary:#ffffff"
                      style={{ width: '70px', height: '70px' }}
                    ></lord-icon>
                  </span>
                  <p>60+ Projects</p>
                </div>

                <div className="icon-projects">
                  <span className="center">
                    <lord-icon
                      src="https://cdn.lordicon.com/vttzorhw.json"
                      trigger="loop"
                      delay="1500"
                      state="in-reveal"
                      colors="primary:#ffffff,secondary:#ffffff"
                      style={{ width: '70px', height: '70px' }}
                    ></lord-icon>
                  </span>
                  <p>8 Prizes</p>
                </div>

                <div className="icon-projects">
                  <span className="center">
                    <lord-icon
                      src="https://cdn.lordicon.com/ytklkgsc.json"
                      trigger="loop"
                      delay="1500"
                      state="in-reveal"
                      colors="primary:#ffffff,secondary:#ffffff"
                      style={{ width: '70px', height: '70px' }}
                    ></lord-icon>
                  </span>
                  <p>Prize Pool - ₹ 2,00,000 <br />
                    Team Size: 4-5 Members
                  </p>
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
