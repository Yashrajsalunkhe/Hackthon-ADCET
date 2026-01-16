const Timeline = () => {
  const events = [
    { id: 'registration-starts', date: '7 Jan – 5 Feb 2026', title: 'Round 1: Idea Submission (Online)', description: 'Register your team (4-5 members) and submit your project idea on Unstop platform.' },
    { id: 'notification', date: '25 Feb 2026', title: 'Shortlist Notification', description: 'Final selection results for the offline hackathon will be sent to team leaders.', right: true },
    { id: 'final-round', date: '12 – 14 Mar 2026', title: 'Final Hackathon (Offline)', description: '72-hour on-campus hackathon. Build, innovate, and present your solution at ADCET, Ashta.' },
    { id: 'results', date: '14 Mar 2026', title: 'Results & Prize Distribution', description: 'Winners announced! Cash prizes worth ₹2 Lakh to be awarded.', right: true },
  ];

  return (
    <section className="twinkle_back not-selectable" id="timeline" data-section="timeline">
      <section className="animated-timeline-wrapper">
        <div className="background-container">
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>

        <br />
        <div data-aos="fade-down" data-aos-once="true">
          <div className="heading">
            <h1 className="heading-shadow not-selectable">TIMELINE</h1>
            <h2 className="heading-small not-selectable" style={{color: '#ffffff'}}>
              {['T', 'I', 'M', 'E', 'L', 'I', 'N', 'E'].map((letter, index) => (
                <div key={index} style={{overflow: 'hidden'}}>
                  <div style={{transform: 'translateY(0%)', willChange: 'auto'}}>{letter}</div>
                </div>
              ))}
            </h2>
          </div>
          <br /><br />
          
          <main className="animated-timeline-container">
            <div className="svg-timeline-animated">
              <svg width="6px" height="800px" viewBox="0 0 6 800">
                <line id="animated-timeline-line" fill="none" stroke="#00FF9C" strokeWidth="6" strokeMiterlimit="10" x1="3" y1="0" x2="3" y2="800"/>
              </svg>
            </div>
            
            <ol className="animated-timeline clearfix">
              {events.map((event, index) => (
                <li key={index} className={`animated-timeline__item ${event.right ? 'right' : ''}`} id={event.id}>
                  <div className="animated-timeline__marker"></div>
                  <div className="animated-timeline__content">
                    <h3 className="animated-timeline__date">{event.date}</h3>
                    <h4 className="animated-timeline__title">{event.title}</h4>
                    <p className="animated-timeline__description">{event.description}</p>
                    <div className="animated-timeline__glow"></div>
                  </div>
                </li>
              ))}
            </ol>
          </main>
        </div>
      </section>
    </section>
  );
};

export default Timeline;
