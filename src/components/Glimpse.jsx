const Glimpse = () => {
  const glimpseImages = [
    { front: "images/glimpse/1.jpeg", back: "images/glimpse/2.jpeg" },
    { front: "images/glimpse/3.jpeg", back: "images/glimpse/4.jpeg" },
    { front: "images/glimpse/5.jpeg", back: "images/glimpse/6.jpeg" },
    { front: "images/glimpse/7.jpeg", back: "images/glimpse/8.jpeg" },
    { front: "images/glimpse/9.jpeg", back: "images/glimpse/10.jpeg" },
    { front: "images/glimpse/11.jpeg", back: "images/glimpse/12.jpeg" },
    { front: "images/glimpse/1.jpeg", back: "images/glimpse/3.jpeg" },
    { front: "images/glimpse/5.jpeg", back: "images/glimpse/7.jpeg" },
    { front: "images/glimpse/9.jpeg", back: "images/glimpse/11.jpeg" },
    { front: "images/glimpse/2.jpeg", back: "images/glimpse/4.jpeg" },
    { front: "images/glimpse/6.jpeg", back: "images/glimpse/8.jpeg" },
    { front: "images/glimpse/10.jpeg", back: "images/glimpse/12.jpeg" },
    { front: "images/glimpse/1.jpeg", back: "images/glimpse/2.jpeg" },
  ];

  return (
    <section className="back_glimpse twinkle_back not-selectable" data-section="glimpse">
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <div data-aos="fade-down" data-aos-once="true">
        <div className="lgx-inner pb100 pt80">
          <div className="container">
            <div className="section_title">
              <br />
              <div className="heading not-selectable">
                <h1 className="heading-shadow not-selectable">GLIMPSE</h1>
                <h2 className="heading-small" style={{ color: '#ffffff' }}>
                  {['G', 'L', 'I', 'M', 'P', 'S', 'E'].map((letter, index) => (
                    <div key={index} style={{ overflow: 'hidden' }}>
                      <div style={{ transform: 'translateY(0%)', willChange: 'auto' }}>{letter}</div>
                    </div>
                  ))}
                </h2>
              </div>
              <br />
            </div>
          </div>

          <div className="glimpses_of_events">
            <div className="glimpses_container">
              <div className="row1">
                {glimpseImages.slice(0, 3).map((img, idx) => (
                  <div key={idx}>
                    <div className={`glimpse_flip-card ${idx === 1 ? 'glimps_RowOnesecondCard' : ''}`}>
                      <div className="glimpse_flip-card-inner">
                        <div className="glimpse_flip-card-front">
                          <img src={img.front} alt="Avatar" />
                        </div>
                        <div className="glimpse_flip-card-back">
                          <img src={img.back} alt="Avatar" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row2">
                {glimpseImages.slice(3, 5).map((img, idx) => (
                  <div key={idx}>
                    <div className={`glimpse_flip-card ${idx === 0 ? 'glimps_RowOneFourthCard' : ''}`}>
                      <div className="glimpse_flip-card-inner">
                        <div className="glimpse_flip-card-front">
                          <img src={img.front} alt="Avatar" />
                        </div>
                        <div className="glimpse_flip-card-back">
                          <img src={img.back} alt="Avatar" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row3">
                {glimpseImages.slice(5, 8).map((img, idx) => (
                  <div key={idx}>
                    <div className={`glimpse_flip-card ${idx === 1 ? 'glimps_RowTwosecondCard' : idx === 2 ? 'row3_last-card' : ''}`}>
                      <div className="glimpse_flip-card-inner">
                        <div className="glimpse_flip-card-front">
                          <img src={img.front} alt="Avatar" />
                        </div>
                        <div className="glimpse_flip-card-back">
                          <img src={img.back} alt="Avatar" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row4">
                {glimpseImages.slice(8, 10).map((img, idx) => (
                  <div key={idx}>
                    <div className={`glimpse_flip-card ${idx === 0 ? 'glimps_RowTwoFourthCard' : ''} remove`}>
                      <div className={`glimpse_flip-card-inner ${idx === 0 ? 'remove' : ''}`}>
                        <div className="glimpse_flip-card-front">
                          <img src={img.front} alt="Avatar" />
                        </div>
                        <div className="glimpse_flip-card-back">
                          <img src={img.back} alt="Avatar" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row5">
                {glimpseImages.slice(10, 13).map((img, idx) => (
                  <div key={idx}>
                    <div className="glimpse_flip-card remove">
                      <div className="glimpse_flip-card-inner">
                        <div className="glimpse_flip-card-front">
                          <img src={img.front} alt="Avatar" />
                        </div>
                        <div className="glimpse_flip-card-back">
                          <img src={img.back} alt="Avatar" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glimpse;
