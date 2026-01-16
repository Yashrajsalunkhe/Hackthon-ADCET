const Hero = () => {
  return (
    <section className="back_home twinkle_back not-selectable" id="home" data-section="hero">
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <div className="hero" data-aos="zoom-in" data-aos-once="true">
        <div className="container-home">
          <div>
            <div className="cont">
              <h1 className="anton-sc-regular heading-pec not-selectable" id="heading-pec" style={{color: 'white'}}>
                ADCET HACKATHON
                <span className="outline anton-sc-regular">    3.0</span>
                <span className="CLH anton-sc-regular">Fostering Innovation for a Brighter Tomorrow</span>
              </h1>
            </div>
            <div className="home_contents">
              <div className="intro-excerpt">
                <p className="hero-buttons">
                  <a 
                    href="https://unstop.com/o/JqtI3zk?lb=nJ8grDyO&utm_medium=Share&utm_source=pravimor65229&utm_campaign=Online_coding_challenge" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary me-2 back"
                    style={{backgroundColor: 'rgb(214, 214, 189)', color: 'black'}}
                  >
                    Register for Hackathon
                  </a>
                  
                </p>
                
                <div className="date-con">
                  <p className="anton-sc-regular not-selectable" id="hero-sub">
                    March 12-14, 2026
                  </p>
                  <p className="anton-sc-regular not-selectable" id="hero-sub">
                    72-hr Hackathon in Ashta, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
