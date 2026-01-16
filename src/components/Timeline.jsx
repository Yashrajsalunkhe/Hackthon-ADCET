const Timeline = () => {
  const events = [
    { 
      id: 'registration-starts', 
      date: '7 Jan – 5 Feb 2026', 
      title: 'Round 1: Idea Submission', 
      subtitle: 'Online Phase',
      description: 'Register your team (4-5 members) and submit your project idea on Unstop platform.',
      icon: '📝'
    },
    { 
      id: 'notification', 
      date: '25 Feb 2026', 
      title: 'Shortlist Notification', 
      subtitle: 'Results Announcement',
      description: 'Final selection results for the offline hackathon will be sent to team leaders.',
      icon: '📢',
      right: true 
    },
    { 
      id: 'final-round', 
      date: '12 – 14 Mar 2026', 
      title: 'Final Hackathon', 
      subtitle: 'Offline at ADCET, Ashta',
      description: '72-hour on-campus hackathon. Build, innovate, and present your solution.',
      icon: '💻'
    },
    { 
      id: 'results', 
      date: '14 Mar 2026', 
      title: 'Results & Prize Distribution', 
      subtitle: 'Grand Finale',
      description: 'Winners announced! Cash prizes worth ₹2 Lakh to be awarded.',
      icon: '🏆',
      right: true 
    },
  ];

  return (
    <section className="timeline-section twinkle_back not-selectable" id="timeline" data-section="timeline">
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      <div className="timeline-wrapper">
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
        </div>

        <div className="timeline-container">
          {/* Center line */}
          <div className="timeline-line"></div>
          
          {/* Timeline events */}
          <div className="timeline-events">
            {events.map((event, index) => (
              <div 
                key={event.id}
                className={`timeline-event ${event.right ? 'timeline-event-right' : 'timeline-event-left'}`}
                data-aos={event.right ? "fade-left" : "fade-right"}
                data-aos-delay={index * 100}
                data-aos-once="true"
              >
                {/* Dot marker */}
                <div className="timeline-marker">
                  <div className="timeline-marker-inner"></div>
                </div>
                
                {/* Event card */}
                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <span className="timeline-icon">{event.icon}</span>
                    <span className="timeline-date">{event.date}</span>
                  </div>
                  <h3 className="timeline-title">{event.title}</h3>
                  <p className="timeline-subtitle">{event.subtitle}</p>
                  <p className="timeline-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
