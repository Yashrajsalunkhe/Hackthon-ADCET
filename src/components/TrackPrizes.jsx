const TrackPrizes = () => {
  const tracks = [
    { name: 'Aptos', amount: '$250 / ₹21,000', description: 'Unique/Best dApp built on Aptos', logo: 'assets/sponsors/44_rgsqli.png', color: 'card__green' },
    { name: 'Polygon', amount: '$200 / ₹16,800', description: 'Best hack built on Polygon', logo: 'assets/sponsors/6_cic6mb.png', color: 'card__orange' },
    { name: 'ETH India', amount: '$100 / ₹8,400', description: 'Best hack built on Ethereum', logo: 'assets/sponsors/37_q1zwzr.png', color: '' },
    { name: 'Auth0', amount: 'Wireless Headphones', description: 'Best hack built on Auth0', logo: 'assets/sponsors/Auth0.png', color: 'card__cyan' },
    { name: 'MongoDB', amount: 'M5GO IoT Starter Kit', description: 'Best hack built on MongoDB Atlas', logo: 'assets/sponsors/MongoDB.png', color: 'card__yellow' },
    { name: 'Midnight', amount: 'JBL Tune 510BT Wireless Headphones', description: 'Best hack built on Midnight', logo: 'assets/sponsors/midnight.png', color: 'card__purple' },
    { name: 'Databricks', amount: 'Assorted Lego Sets', description: 'Best AI Project with Databricks Open Source', logo: 'assets/sponsors/databricks.png', color: 'card__red' },
    { name: 'Cloudflare', amount: 'Arduino Kit', description: 'Best AI Application Built with Cloudflare', logo: 'assets/sponsors/Cloudflare.png', color: 'card__pink' },
    { name: 'DevDock', amount: '$125', description: 'Best Web3 Project with Devdock', logo: 'assets/sponsors/devdock.png', color: 'card__orange' },
  ];

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="twinkle_back not-selectable" data-section="tracks">
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <div className="heading">
        <h2 className="heading-small not-selectable" style={{color: '#ffffff', zIndex: 2}}>
          {['T', 'R', 'A', 'C', 'K', ' ', 'P', 'R', 'I', 'Z', 'E', 'S'].map((letter, index) => (
            <div key={index} style={{overflow: 'hidden'}}>
              <div style={{transform: 'translateY(0%)', willChange: 'auto'}}>{letter === ' ' ? '\u00A0' : letter}</div>
            </div>
          ))}
        </h2>
      </div>
      <div className="track-price">
        <div className="price-box">
          {tracks.map((track, index) => (
            <article 
              key={index}
              className={`card__article ${track.color} clickableArticle`}
              onClick={() => handleClick('https://pechacks2.devfolio.co/prizes')}
            >
              <div className="card__scale-1"></div>
              <div className="card__scale-2"></div>
              <div className="card__shape-1">
                <div className="card__shape-2"></div>
                <div className="card__shape-3">
                  <img src={track.logo} alt={track.name} />
                </div>
              </div>
              <div className="card__data">
                <h2 className="card__title">{track.name}</h2>
                <p className="card__description">
                  {track.amount} <br /> {track.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackPrizes;
