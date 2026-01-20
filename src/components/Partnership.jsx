const Partnership = () => {
  return (
    <section id="proposal" className="twinkle_back not-selectable">
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <section className="cta back_puw">
        <div className="container" data-aos="fade-down" data-aos-once="true">
          <div className="card-ct card-body">
            <div className="text-center">
              <h3 className="non-selectable">WANT TO PARTNER WITH US?</h3>
              <br />
              <p id="proposal-p" className="non-selectable">
                Be part of the transformation and make a lasting impact by partnering ADCET HACKATHON 3.0, a premier
                hackathon event that brings together talented individuals to innovate and create groundbreaking solutions. 
                <br/><br/>As a partner, you'll gain valuable visibility among a highly engaged audience, connect with top 
                tech talent, and position your brand as a leader in the industry. Join us in empowering the next
                generation of innovators and driving technological advancements.
              </p>
              <br />
              <div className="puw-btn">
                <a className="cta-btn sponsor-brochure" href="/documents/Hackathon Broucher.pdf" target="_blank" rel="noopener noreferrer">
                  View Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Partnership;
