import { useState, useEffect } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-02-05T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

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

                {/* Countdown Timer */}
                <div className="countdown-section">
                  <div className="countdown-header">
                    <svg className="clock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>Registration ends In:</span>
                  </div>
                  <div className="countdown-boxes">
                    <div className="countdown-box box-cyan">
                      <div className="countdown-value">{timeLeft.days}</div>
                      <div className="countdown-label">Days</div>
                    </div>
                    <div className="countdown-box box-purple">
                      <div className="countdown-value">{timeLeft.hours}</div>
                      <div className="countdown-label">Hours</div>
                    </div>
                    <div className="countdown-box box-pink">
                      <div className="countdown-value">{timeLeft.minutes}</div>
                      <div className="countdown-label">Minutes</div>
                    </div>
                    <div className="countdown-box box-orange">
                      <div className="countdown-value">{timeLeft.seconds}</div>
                      <div className="countdown-label">Seconds</div>
                    </div>
                  </div>
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
