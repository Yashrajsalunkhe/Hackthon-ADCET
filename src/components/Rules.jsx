const Rules = () => {
  const rules = [
    {
      category: "General Rules & Conduct",
      color: "green",
      items: [
        "Each team is allowed to submit only one Idea",
        "Participants must strictly follow the Code of Conduct",
        "Teams encouraged to develop projects entirely during hackathon",
        "At least one team member must be present at desk during final round",
        "IPR: Intellectual Property jointly owned by team and sponsor",
        "Decision of ADCET shall be final and binding"
      ]
    },
    {
      category: "Eligibility & Team Formation",
      color: "blue",
      items: [
        "Open to all students of recognized institutions in India",
        "Team Size: 4-5 Members (At least one girl student mandatory)",
        "Team members must be currently enrolled students",
        "Members can be from multiple institutes (permission letter required)",
        "Registration Fees for first round: Nil",
        "Shortlisted teams may pay accommodation charges if necessary"
      ]
    },
    {
      category: "Project Development & Hardware",
      color: "orange",
      items: [
        "Software: Projects must be developed from scratch during hackathon",
        "Hardware: Maximum 40% completion allowed before final round",
        "Working prototype/product mandatory at end of hackathon",
        "Teams must bring their own hardware and laptops",
        "Hardware teams must demonstrate ≤40% completion upon arrival",
        "Teams must strictly follow assigned problem theme"
      ]
    },
    {
      category: "Safety & Resources",
      color: "red",
      items: [
        "Strictly follow safety protocols while working with hardware",
        "Hazardous projects will be disqualified immediately",
        "Organizers not responsible for loss or damage to equipment",
        "Report safety concerns to organizers immediately",
        "Maintain clean and organized workspace",
        "Emergency medical assistance available on campus"
      ]
    },
    {
      category: "Submission & Documentation",
      color: "cyan",
      items: [
        "Include: Working prototype, video demo, Presentation (PPT/PDF)",
        "Documentation: Problem statement, Technologies, Challenges",
        "Provide code repository (GitHub, Google Drive, etc.)",
        "Include hardware design files/block diagrams & photographs",
        "Disclose any pre-existing IP or pre-built templates used",
        "Solutions should align with: Innovation, Scalability, Feasibility"
      ]
    },
    {
      category: "Judging & Final Guidelines",
      color: "purple",
      items: [
        "Innovation & Creativity: 20%",
        "Technical Complexity: 20%",
        "Practicality & Real-World Impact: 20%",
        "Functionality & Working Prototype: 20%",
        "Final Demonstration: 20%",
        "Decision of Judging Panel is final and binding"
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
              className={`rule-card ${ruleSection.color}`}
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay={index * 100}
            >
              <div className="rule-card-header">
                <div className="rule-icon-wrapper">
                  {ruleSection.color === 'green' && (
                    <svg className="rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  )}
                  {ruleSection.color === 'blue' && (
                    <svg className="rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                  {ruleSection.color === 'orange' && (
                    <svg className="rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {ruleSection.color === 'red' && (
                    <svg className="rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  )}
                  {ruleSection.color === 'cyan' && (
                    <svg className="rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  {ruleSection.color === 'purple' && (
                    <svg className="rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  )}
                </div>
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
