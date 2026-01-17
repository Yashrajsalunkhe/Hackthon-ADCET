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
                    Annasaheb Dange College of Engineering and Technology
                  </p>
                  <p className="anton-sc-regular not-selectable" id="hero-sub" style={{fontSize: '0.9em', marginTop: '-10px'}}>
                    Ashta, Taluka Walwa, District Sangli, Maharashtra - 416301
                  </p>
                </div>

                {/* Countdown Timer */}
                <div className="countdown-section-clean">
                  <div className="countdown-header-clean">
                    <span>Registration ends In:</span>
                  </div>
                  <div className="countdown-display-clean">
                    <div className="time-unit-clean">
                      <div className="time-digits-wrapper">
                        {String(timeLeft.days).padStart(2, '0').split('').map((digit, index) => (
                          <div className="time-value-wrapper" key={`days-${index}`}>
                            <div className="time-value-clean" key={`${timeLeft.days}-${index}`}>{digit}</div>
                          </div>
                        ))}
                      </div>
                      <div className="time-label-clean">Days</div>
                    </div>
                    <div className="time-separator-clean">:</div>
                    <div className="time-unit-clean">
                      <div className="time-digits-wrapper">
                        {String(timeLeft.hours).padStart(2, '0').split('').map((digit, index) => (
                          <div className="time-value-wrapper" key={`hours-${index}`}>
                            <div className="time-value-clean" key={`${timeLeft.hours}-${index}`}>{digit}</div>
                          </div>
                        ))}
                      </div>
                      <div className="time-label-clean">Hours</div>
                    </div>
                    <div className="time-separator-clean">:</div>
                    <div className="time-unit-clean">
                      <div className="time-digits-wrapper">
                        {String(timeLeft.minutes).padStart(2, '0').split('').map((digit, index) => (
                          <div className="time-value-wrapper" key={`minutes-${index}`}>
                            <div className="time-value-clean" key={`${timeLeft.minutes}-${index}`}>{digit}</div>
                          </div>
                        ))}
                      </div>
                      <div className="time-label-clean">Minutes</div>
                    </div>
                    <div className="time-separator-clean">:</div>
                    <div className="time-unit-clean">
                      <div className="time-digits-wrapper">
                        {String(timeLeft.seconds).padStart(2, '0').split('').map((digit, index) => (
                          <div className="time-value-wrapper" key={`seconds-${index}`}>
                            <div className="time-value-clean" key={`${timeLeft.seconds}-${index}`}>{digit}</div>
                          </div>
                        ))}
                      </div>
                      <div className="time-label-clean">Seconds</div>
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
