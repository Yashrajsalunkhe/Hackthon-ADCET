const Glimpse = () => {
  const glimpseImages = [
    { front: "assets/Glimpse/26_u3e6dk.jpg", back: "assets/Glimpse/2_bnaqeq.jpg" },
    { front: "assets/Glimpse/24_kxkw4b.jpg", back: "assets/Glimpse/23_p3iket.jpg" },
    { front: "assets/Glimpse/22_khrztk.jpg", back: "assets/Glimpse/19_m9c8gn.jpg" },
    { front: "assets/Glimpse/20_ckiooq.jpg", back: "assets/Glimpse/12_ydrqhn.jpg" },
    { front: "assets/Glimpse/21_oerrzo.jpg", back: "assets/Glimpse/11_mbnss1.jpg" },
    { front: "assets/Glimpse/9_yju36o.jpg", back: "assets/Glimpse/18_lpqiqe.jpg" },
    { front: "assets/Glimpse/10_ge7keg.jpg", back: "assets/Glimpse/17_teqfwc.jpg" },
    { front: "assets/Glimpse/16_yhepva.jpg", back: "assets/Glimpse/5_piqfql.jpg" },
    { front: "assets/Glimpse/8_r3rru9.jpg", back: "assets/Glimpse/4_admym6.jpg" },
    { front: "assets/Glimpse/7_tpgqmw.jpg", back: "assets/Glimpse/2_wipxwu.jpg" },
    { front: "assets/Glimpse/6_gyx5qj.jpg", back: "assets/Glimpse/14_nyk7xo.jpg" },
    { front: "assets/Glimpse/15_cqfiq9.jpg", back: "assets/Glimpse/3_ul7etg.jpg" },
    { front: "assets/Glimpse/13_bwl6sl.jpg", back: "assets/Glimpse/1_b2cyhr.jpg" },
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
