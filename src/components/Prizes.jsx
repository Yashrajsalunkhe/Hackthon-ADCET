const Prizes = () => {
  const softwarePrizes = [
    { 
      position: 'RUNNER UP', 
      amount: '₹30,000', 
      icon: '🥈',
      tagline: '"Your code debugged itself in fear of losing! Almost legendary status!"',
      cardClass: 'runner-up-card'
    },
    { 
      position: 'CHAMPION', 
      amount: '₹50,000', 
      icon: '🏆',
      tagline: '"You didn\'t just break the code, you broke the competition! 🔥"',
      cardClass: 'champion-card'
    },
    { 
      position: '2ND RUNNER UP', 
      amount: '₹20,000', 
      icon: '🥉',
      tagline: '"Bronze medal but GOLDEN vibes! Your Git commits were fire! 💪"',
      cardClass: 'second-runner-up-card'
    }
  ];

  const hardwarePrizes = [
    { 
      position: 'RUNNER UP', 
      amount: '₹30,000', 
      icon: '🥈',
      tagline: '"Your circuits were LIT! Silver today, solder legend tomorrow! ⚡"',
      cardClass: 'runner-up-card'
    },
    { 
      position: 'CHAMPION', 
      amount: '₹50,000', 
      icon: '🏆',
      tagline: '"From breadboards to BOSS moves! You just Ctrl+Alt+Won! 🎯"',
      cardClass: 'champion-card'
    },
    { 
      position: '2ND RUNNER UP', 
      amount: '₹20,000', 
      icon: '🥉',
      tagline: '"Third place? Your resistors clearly had ZERO resistance to winning! 🤖"',
      cardClass: 'second-runner-up-card'
    }
  ];

  return (
    <section className="twinkle_back not-selectable" id="prizes" data-section="prizepool">
      <section className="back_prices">
        <div className="background-container">
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>

        <br />
        <div data-aos="fade-down" data-aos-once="true">
          <div className="heading">
            <h1 className="heading-shadow not-selectable">PRIZES</h1>
            <h2 className="heading-small not-selectable" style={{color: '#ffffff'}}>
              {['P', 'R', 'I', 'Z', 'E', 'S'].map((letter, index) => (
                <div key={index} style={{overflow: 'hidden'}}>
                  <div style={{transform: 'translateY(0%)', willChange: 'auto'}}>{letter}</div>
                </div>
              ))}
            </h2>
          </div>
          <br />
          <div className="prize-pool-highlight" style={{textAlign: 'center', marginBottom: '50px'}}>
            <h3 style={{fontSize: '1.3rem', fontWeight: '500', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '15px', letterSpacing: '0.15em'}}>TOTAL PRIZE POOL</h3>
            <div className="prize-pool-amount-highlight" style={{
              fontSize: '3rem',
              fontWeight: '900',
              fontFamily: '"Anton SC", sans-serif',
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 60px rgba(255, 215, 0, 0.6)',
              filter: 'drop-shadow(0 4px 20px rgba(255, 215, 0, 0.5))',
              letterSpacing: '0.05em',
              marginBottom: '15px',
              animation: 'glow 2s ease-in-out infinite'
            }}>
              ₹2,00,000
            </div>
            <p style={{fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.7)', letterSpacing: '0.05em'}}>Equal prizes for both Software & Hardware Tracks</p>
          </div>

          {/* Software Track */}
          <div className="prize-track-section" data-aos="fade-up" data-aos-once="true">
            <div className="track-header">
              <h3 className="track-title">Software Track</h3>
              <p className="track-description">For Digital Innovation & Software Solutions</p>
            </div>
            <div className="prizes-container">
              <div className="prizes-grid">
                {softwarePrizes.map((prize, index) => (
                  <div key={`software-${index}`} className={`prize-card ${prize.cardClass}`}>
                    <div className="prize-icon">
                      <div className={`medal-icon ${prize.cardClass.replace('-card', '-medal')}`}>{prize.icon}</div>
                    </div>
                    <h3 className="prize-title">{prize.position}</h3>
                    <div className="prize-amount">{prize.amount}</div>
                    <p className="prize-tagline">{prize.tagline}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hardware Track */}
          <div className="prize-track-section" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
            <div className="track-header">
              <h3 className="track-title">Hardware Track</h3>
              <p className="track-description">For IoT, Robotics & Hardware Innovation</p>
            </div>
            <div className="prizes-container">
              <div className="prizes-grid">
                {hardwarePrizes.map((prize, index) => (
                  <div key={`hardware-${index}`} className={`prize-card ${prize.cardClass}`}>
                    <div className="prize-icon">
                      <div className={`medal-icon ${prize.cardClass.replace('-card', '-medal')}`}>{prize.icon}</div>
                    </div>
                    <h3 className="prize-title">{prize.position}</h3>
                    <div className="prize-amount">{prize.amount}</div>
                    <p className="prize-tagline">{prize.tagline}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Prizes;
