const Rules = () => {
  const rules = [
    {
      category: "Team Formation & Registration",
      icon: "👥",
      items: [
        "Teams must consist of 4-5 members",
        "At least one female member is mandatory in each team",
        "All team members must be students from recognized institutions",
        "Valid student ID card is mandatory for participation",
        "Team formation must be finalized before registration",
        "Team leader will be the primary point of contact"
      ]
    },
    {
      category: "Idea Submission Guidelines",
      icon: "💡",
      items: [
        "Ideas must align with either Viksit Bharat or SDG themes",
        "Submissions must be original work of the team",
        "Plagiarism or copying will lead to immediate disqualification",
        "Problem statements can be selected from provided lists",
        "Include feasibility analysis in your submission",
        "Submission deadline: February 5, 2026 (strictly enforced)"
      ]
    },
    {
      category: "Hackathon Rules",
      icon: "⚡",
      items: [
        "Projects must be built during the 72-hour hackathon period only",
        "Pre-built solutions are not allowed",
        "Use of open-source libraries and frameworks is permitted",
        "Teams must stay on campus for the entire duration",
        "Working prototype/demo is mandatory for final presentation",
        "Code must be uploaded to GitHub/similar platforms during the event"
      ]
    },
    {
      category: "Code of Conduct",
      icon: "✅",
      items: [
        "Maintain professional and respectful behavior at all times",
        "No harassment, discrimination, or inappropriate behavior",
        "Respect organizing committee, mentors, and fellow participants",
        "Follow campus rules and regulations",
        "Keep workspace clean and organized",
        "Report any issues immediately to organizers"
      ]
    },
    {
      category: "Evaluation & Judging",
      icon: "⚖️",
      items: [
        "All teams must present their project to judges",
        "Presentation time: 5-7 minutes per team",
        "Working demo is mandatory - non-functional projects will not be considered",
        "Judges' decision will be final and binding",
        "Evaluation based on: Innovation, Implementation, Impact, Feasibility, and Presentation",
        "Both software and hardware tracks will be judged separately"
      ]
    },
    {
      category: "General Guidelines",
      icon: "📋",
      items: [
        "Bring your own laptops, chargers, and hardware components",
        "Internet connectivity will be provided by organizers",
        "Meals and accommodation are free for all participants",
        "Emergency medical assistance will be available on campus",
        "Photography/videography for promotional purposes may be conducted",
        "Organizers reserve the right to modify rules if necessary"
      ]
    }
  ];

  return (
    <section className="rules-section twinkle_back not-selectable" id="rules" data-section="rules">
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      <div className="rules-wrapper">
        <div data-aos="fade-down" data-aos-once="true">
          <div className="heading">
            <h1 className="heading-shadow not-selectable">RULES</h1>
            <h2 className="heading-small not-selectable" style={{color: '#ffffff'}}>
              {['R', 'U', 'L', 'E', 'S'].map((letter, index) => (
                <div key={index} style={{overflow: 'hidden'}}>
                  <div style={{transform: 'translateY(0%)', willChange: 'auto'}}>{letter}</div>
                </div>
              ))}
            </h2>
          </div>
          
          <p className="rules-intro" data-aos="fade-up" data-aos-once="true">
            Please read and follow these important rules and guidelines to ensure a smooth and fair hackathon experience for everyone.
          </p>
        </div>

        <div className="rules-grid">
          {rules.map((ruleSection, index) => (
            <div 
              key={index}
              className="rule-card"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay={index * 100}
            >
              <div className="rule-card-header">
                <span className="rule-icon">{ruleSection.icon}</span>
                <h3 className="rule-category">{ruleSection.category}</h3>
              </div>
              <ul className="rule-items">
                {ruleSection.items.map((item, idx) => (
                  <li key={idx} className="rule-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rules-footer" data-aos="fade-up" data-aos-once="true" data-aos-delay="600">
          <div className="important-note">
            <svg className="warning-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <div>
              <h4>Important Notice</h4>
              <p>Violation of any rules may result in disqualification. For any clarifications or concerns, please contact the organizing committee immediately.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
