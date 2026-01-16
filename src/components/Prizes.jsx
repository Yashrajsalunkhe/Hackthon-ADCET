const Prizes = () => {
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
          <div style={{textAlign: 'center', color: '#ffffff', marginBottom: '20px'}}>
            <h3 style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Cash Prizes worth ₹2 Lakh</h3>
            <p style={{fontSize: '1.1rem', marginTop: '10px'}}>For both Software & Hardware Editions</p>
          </div>
          <br />
          <div className="prizes-container">
            <div className="prizes-grid">
              {/* Runner Up (Left - 2nd Place) */}
              <div className="prize-card runner-up-card">
                <div className="prize-icon">
                  <div className="medal-icon runner-up-medal">🥈</div>
                </div>
                <h3 className="prize-title">RUNNER UP</h3>
                <div className="prize-amount">₹30,000</div>
                <p className="prize-tagline">"So close to gold, but hey... silver's pretty shiny too! 🌟"</p>
              </div>

              {/* Champion (Center - 1st Place - Tallest) */}
              <div className="prize-card champion-card">
                <div className="prize-icon">
                  <div className="medal-icon champion-medal">🏆</div>
                </div>
                <h3 className="prize-title">CHAMPION</h3>
                <div className="prize-amount">₹50,000</div>
                <p className="prize-tagline">"Coding royalty! 👑 Time to add 'Hackathon Legend' to your LinkedIn!"</p>
              </div>

              {/* 2nd Runner Up (Right - 3rd Place) */}
              <div className="prize-card second-runner-up-card">
                <div className="prize-icon">
                  <div className="medal-icon second-runner-up-medal">🥉</div>
                </div>
                <h3 className="prize-title">2ND RUNNER UP</h3>
                <div className="prize-amount">₹20,000</div>
                <p className="prize-tagline">"Third place? More like 'first place in being awesome!' 🚀"</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Prizes;
