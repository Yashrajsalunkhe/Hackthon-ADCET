// Simplified Sponsors component. Add all sponsor logos from the original HTML.

const Sponsors = () => {
  const titleSponsor = [
    { name: 'Logitech', logo: 'assets/sponsors/Logitech.PNG', link: 'https://www.logitech.com/en-in' }
  ];

  const goldSponsors = [
    { name: 'Devfolio', logo: 'assets/sponsors/4_lqjtfq.png', link: 'https://devfolio.co/' },
    { name: 'Polygon', logo: 'assets/sponsors/6_cic6mb.png', link: 'https://polygon.technology/' },
    { name: 'Aptos', logo: 'assets/sponsors/44_rgsqli.png', link: 'https://aptos.dev/' },
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

          <div className="sponsors">
            <pre className="spon-title first-title"><h2><b id="light-des">TITLE SPONSOR</b></h2></pre>
            <div className="gold">
              {titleSponsor.map((sponsor, index) => (
                <a key={index} className="title_spon hvr-float-shadow" href={sponsor.link} target="_blank" rel="noopener noreferrer">
                  <img src={sponsor.logo} alt={sponsor.name} />
                </a>
              ))}
            </div>
            <br />
          </div>

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
