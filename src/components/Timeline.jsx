const Timeline = () => {
  const events = [
    { 
      id: 'registration-starts', 
      date: '7 Jan – 5 Feb 2026', 
      title: 'Round 1: Submission through Unstop', 
      subtitle: 'Online Mode • Idea Submission Phase',
      description: 'Submit your idea in the provided format on Unstop platform. Registered teams need to submit an abstract of their project based on one of the given themes. Registration starts January 7, 2026 at 12:00 AM IST and submissions close on February 5, 2026 at 4:00 PM IST.',
      details: ['Team registration (4-5 members)', 'At least one girl student mandatory', 'Submit idea abstract in specified format', 'Download format from Unstop platform'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      color: '#FF1744'
    },
    { 
      id: 'shortlisting', 
      date: '25 Feb 2026', 
      title: 'Team Shortlisting for Offline Hackathon', 
      subtitle: 'Results Announcement • 12:00 AM - 5:00 PM IST',
      description: 'Final notification will be sent for the selected ideas to the respective group leaders. Shortlisted teams will receive detailed instructions for the offline implementation round at ADCET campus.',
      details: ['Email notifications to team leaders', 'Selected ideas announcement', 'Offline round instructions', 'Accommodation details (if applicable)'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      ),
      right: true,
      color: '#FF6B6B'
    },
    { 
      id: 'final-round', 
      date: '12 – 14 Mar 2026', 
      title: 'Final Round: Offline Implementation', 
      subtitle: 'On-Campus at ADCET Ashta • 9:00 AM Onwards',
      description: 'Offline implementation round at Annasaheb Dange College of Engineering and Technology, Ashta, Taluka Walwa, District Sangli, Maharashtra Pin – 416301. Software Track: 12th & 13th March. Hardware Track: 12th, 13th & 14th March.',
      details: [
        'Software Track: March 12-13, 2026',
        'Hardware Track: March 12-14, 2026',
        'Build working prototype on campus',
        'Mentor guidance & 24/7 support',
        'Access to facilities & resources'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      color: '#6366F1'
    },
    { 
      id: 'results', 
      date: '13-14 Mar 2026', 
      title: 'Results & Prize Distribution', 
      subtitle: 'Grand Finale • Closing Ceremony',
      description: 'Final presentations and demonstrations to the judges. Winners announced for both Software and Hardware tracks! Cash prizes worth ₹2,00,000 to be awarded along with certificates and recognition.',
      details: [
        'Software Edition ends: March 13, 5:00 PM IST',
        'Hardware Edition ends: March 14, 4:00 PM IST',
        'Final presentations & demos',
        'Winner announcements',
        'Prize distribution ceremony'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      ),
      right: true,
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
                  <div className="timeline-card-bg"></div>
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
