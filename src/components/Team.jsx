// Simplified Team component. Add all team members from the original HTML.

const Team = () => {
  const teamMembers = [
    { name: 'Dr D Anuradha', role: 'Lead Organiser', img: 'assets/Team/Anuradha_afhvd8.png', linkedin: 'https://www.linkedin.com/in/anuradhadurairaj/', email: 'csbshod@panimalar.ac.in' },
    { name: 'Laaveshwaran P', role: 'Event Director', img: 'assets/Team/laavesh.webp', linkedin: 'https://www.linkedin.com/in/laavesh/', email: 'laavesh1@gmail.com', instagram: 'https://www.instagram.com/llvssh/', github: 'https://github.com/aviiciii' },
    { name: 'Aswin A S', role: 'Event Director', img: 'assets/Team/aswin.webp', linkedin: 'https://www.linkedin.com/in/aswinx', email: 'aswinash1002@gmail.com', instagram: 'https://www.instagram.com/ft.aswinx/', github: 'https://github.com/sasukexo' },
    // Add more team members as needed
  ];

  return (
    <section id="team" className="twinkle_back not-selectable">
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <section className="back_teams st">
        <br/><br/>
        <div className="heading">
          <h1 className="heading-shadow">OUR TEAM</h1>
          <h2 className="heading-small" style={{color: 'white'}}>
            {['O', 'U', 'R', ' ', 'T', 'E', 'A', 'M'].map((letter, index) => (
              <div key={index} style={{overflow: 'hidden'}}>
                <div style={{transform: 'translateY(0%)', willChange: 'auto'}}>{letter === ' ' ? '\u00A0' : letter}</div>
              </div>
            ))}
          </h2>
        </div>

        <div className="container-team">
          <div className="grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="card">
                <div className="content">
                  <div className="img"><img src={member.img} alt={member.name} /></div>
                  <div className="cardContent not-selectable">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </div>
                <ul className="sci">
                  {member.email && (
                    <li style={{'--i':1}}>
                      <a href={`mailto:${member.email}`}><i className="fa fa-envelope"></i></a>
                    </li>
                  )}
                  {member.linkedin && (
                    <li style={{'--i':2}}>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                    </li>
                  )}
                  {member.instagram && (
                    <li style={{'--i':3}}>
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                    </li>
                  )}
                  {member.github && (
                    <li style={{'--i':4}}>
                      <a href={member.github} target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Team;
