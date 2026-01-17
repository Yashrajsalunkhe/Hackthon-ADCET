const Timeline = () => {
  const events = [
    { 
      id: 'registration-starts', 
      date: '7 Jan – 5 Feb 2026', 
      title: 'Round 1: Idea Submission', 
      subtitle: 'Online Phase • Unstop Platform',
      description: 'Register your team (4–5 members) with at least one female member mandatory. Submit your innovative project idea aligned with Viksit Bharat or SDG themes. Include problem statement, proposed solution, and feasibility.',
      details: ['Team registration on Unstop', 'Detailed idea submission', 'Problem statement selection'],
      icon: '📝',
      color: '#FF1744'
    },
    { 
      id: 'evaluation', 
      date: '6 Feb – 24 Feb 2026', 
      title: 'Evaluation & Selection', 
      subtitle: 'Jury Review Process',
      description: 'Expert jury will evaluate all submissions based on innovation, feasibility, impact, and alignment with themes. Top teams will be shortlisted for the offline hackathon.',
      details: ['Idea evaluation by expert panel', 'Assessment of technical feasibility', 'Final team selection'],
      icon: '⚖️',
      right: true,
      color: '#FF6B6B'
    },
    { 
      id: 'notification', 
      date: '25 Feb 2026', 
      title: 'Shortlist Notification', 
      subtitle: 'Results Announcement',
      description: 'Selected teams will receive confirmation emails with detailed instructions for the offline hackathon. Prepare your laptops, hardware components, and get ready to innovate!',
      details: ['Email notifications to team leaders', 'Travel and accommodation details', 'Pre-hackathon briefing'],
      icon: '📢',
      color: '#4CAF50'
    },
    { 
      id: 'final-round', 
      date: '12 – 14 Mar 2026', 
      title: 'Final Hackathon', 
      subtitle: 'Offline at ADCET, Ashta • 72 Hours',
      description: 'On-campus innovation marathon! Build your solution with mentor guidance, access to resources, and 24/7 support. Present your working prototype to the judges.',
      details: ['Day 1: Check-in, team setup & development begins', 'Day 2: Intensive development & mentor sessions', 'Day 3: Final presentation & demo to judges'],
      icon: '💻',
      right: true,
      color: '#6366F1'
    },
    { 
      id: 'results', 
      date: '14 Mar 2026', 
      title: 'Results & Prize Distribution', 
      subtitle: 'Grand Finale • Closing Ceremony',
      description: 'Winners announced for both Software and Hardware tracks! Cash prizes worth ₹2 Lakh to be awarded along with certificates, swag, and recognition.',
      details: ['Final presentations & demos', 'Winner announcements', 'Prize distribution ceremony'],
      icon: '🏆',
      color: '#8B5CF6'
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
                  {event.details && (
                    <ul className="timeline-details">
                      {event.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  )}
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
