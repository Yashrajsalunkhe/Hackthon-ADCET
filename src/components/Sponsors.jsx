// Simplified Sponsors component. Add all sponsor logos from the original HTML.

const Sponsors = () => {
  const titleSponsor = [
    { name: 'Logitech', logo: 'images/sponsors/Logitech.PNG', link: 'https://www.logitech.com/en-in' }
  ];

  const goldSponsors = [
    { name: 'SBI Ashta', logo: '/images/sponsors/SBI.jpg', link: 'https://www.sbi.co.in/' },
    { name: 'IDBI Bank, Ashta', logo: 'https://1000logos.net/wp-content/uploads/2021/05/IDBI-Bank-logo.jpg', link: 'https://www.idbi.bank.in/' },
  ];

  return (
    <section id="sponsors" className="twinkle_back not-selectable" data-section="sponsors">
      <section className="back_sponsors">
        <div className="background-container">
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>
        <div data-aos="fade-down" data-aos-once="true">
          <br /><br />
          <div className="heading">
            <h1 className="heading-shadow">PARTNERS</h1>
            <h2 className="heading-small" style={{color: '#ffffff'}}>
              {['P', 'A', 'R', 'T', 'N', 'E', 'R', 'S'].map((letter, index) => (
                <div key={index} style={{overflow: 'hidden'}}>
                  <div style={{transform: 'translateY(0%)', willChange: 'auto'}}>{letter}</div>
                </div>
              ))}
            </h2>
          </div>

          {/* <div className="sponsors">
            <pre className="spon-title first-title"><h2><b id="light-des">TITLE SPONSOR</b></h2></pre>
            <div className="gold">
              {titleSponsor.map((sponsor, index) => (
                <a key={index} className="title_spon hvr-float-shadow" href={sponsor.link} target="_blank" rel="noopener noreferrer">
                  <img src={sponsor.logo} alt={sponsor.name} />
                </a>
              ))}
            </div>
            <br />
          </div> */}

          <div className="sponsors">
            <pre className="spon-title"><h2><b id="light-des">GOLD SPONSORS</b></h2></pre>
            <div className="gold">
              {goldSponsors.map((sponsor, index) => (
                <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer">
                  <img className="hvr-float-shadow" src={sponsor.logo} alt={sponsor.name} />
                </a>
              ))}
            </div>
            <br />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Sponsors;
