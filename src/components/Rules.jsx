const Rules = () => {
  const rules = [
    {
      category: "General Rules",
      icon: "📋",
      items: [
        "Each team is allowed to submit only one Idea",
        "Participants must strictly follow the Code of Conduct provided by organizers and Unstop platform",
        "Teams are encouraged to develop projects entirely during the hackathon duration",
        "For Software Edition: If using re-used code or re-submitting from another hackathon, disclose previous usage and extent clearly",
        "At least one team member must be present at the team desk at all times during final round",
        "IPR: Intellectual Property jointly owned by developing team and sponsoring industry (if any)"
      ]
    },
    {
      category: "Eligibility & Team Formation",
      icon: "👥",
      items: [
        "Open to all students of recognized institutions in India (UG / PG / Diploma)",
        "Team members must be currently enrolled students",
        "Team Size: 4-5 Members (At least one girl student mandatory from any department)",
        "Team members can be from same or multiple institutes (permission letter required from all institutes)",
        "Registration Fees for first round: Nil",
        "Shortlisted teams for final round may pay accommodation charges if necessary"
      ]
    },
    {
      category: "Project Development Rules",
      icon: "⚡",
      items: [
        "Software Edition: Projects must be developed from scratch during the hackathon",
        "Hardware Edition: Maximum 40% project completion allowed before final round (basic structural assembly/module testing)",
        "Major integration, final fabrication, testing & validation must be done during event",
        "Teams must strictly follow assigned problem theme",
        "Working prototype/product mandatory at end of hackathon",
        "Teams may use open-source libraries and tools",
        "Any pre-built templates must be explicitly disclosed during final presentation"
      ]
    },
    {
      category: "Hardware & Resource Guidelines",
      icon: "🔧",
      items: [
        "Participants may use off-the-shelf hardware (Arduino, Raspberry Pi, Sensors, modules)",
        "Teams must bring their own hardware components; organizers won't provide additional components",
        "Teams must carry own laptops and computing resources",
        "Status Check: Hardware teams must demonstrate ≤40% completion upon arrival (points penalty/disqualification if exceeded)",
        "Organizers provide: Casting/testing facilities (Civil), Workshop facilities, Power supply, Internet connectivity",
        "Basic prototyping kit (breadboards, jumper wires) available in limited quantity"
      ]
    },
    {
      category: "Safety Guidelines",
      icon: "⚠️",
      items: [
        "Participants must strictly follow safety protocols while working with hardware",
        "Projects with flammable components, hazardous wiring, or unsafe voltage/current handling will be disqualified immediately",
        "Organizers not responsible for loss or damage to participant's hardware or equipment",
        "Report any safety concerns to organizers immediately",
        "Maintain clean and organized workspace",
        "Emergency medical assistance available on campus"
      ]
    },
    {
      category: "Submission & Documentation",
      icon: "📄",
      items: [
        "Final submission must include: Working prototype, 2-3 minute video demo, Presentation (PPT/PDF)",
        "Documentation must include: Problem statement, Approach & Technologies Used, Challenges & Solutions",
        "Include hardware design files/block diagrams & product photographs",
        "Provide code repository (GitHub, Google Drive, etc.)",
        "Teams must clearly disclose any pre-existing IP used in project",
        "Teams responsible for protecting their own confidential information"
      ]
    },
    {
      category: "Judging Criteria",
      icon: "⚖️",
      items: [
        "Innovation & Creativity: 20%",
        "Technical Complexity: 20%",
        "Practicality & Real-World Impact: 20%",
        "Functionality & Working Prototype: 20%",
        "Final Demonstration: 20%",
        "Decision of Judging Panel is final and binding",
        "Winners selected strictly according to above criteria"
      ]
    },
    {
      category: "Additional Guidelines",
      icon: "✅",
      items: [
        "All participants will receive certificate of participation",
        "Solutions should align with: Innovation, Scalability, Feasibility, Societal Impact",
        "Organizers may use project details for academic, promotional, or research purposes with due credit",
        "Organizers, judges, mentors not responsible for maintaining confidentiality of disclosed ideas",
        "Avoid sharing sensitive or patent-pending information unless adequately protected",
        "In event of rule changes, decision of ADCET shall be final and binding"
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
