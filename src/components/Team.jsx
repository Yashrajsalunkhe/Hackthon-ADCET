// Simplified Team component. Add all team members from the original HTML.

const Team = () => {
  const teamRows = [
    [
      { name: 'Dr. Amol Dange', role: 'Lead', img: 'img/Our team/amol dange.jpg' }
    ],
    [
      { name: 'Dr. Asma Shaikh', role: 'Faculty Coordinator', img: 'img/Our team/asma shaikh.jpg' }
    ],
    [
      { name: 'Krishnkumar', role: 'Core Team', img: 'img/Our team/krishnkumar.jpg' },
      { name: 'Kiran Nagrgatti', role: 'Core Team', img: 'img/Our team/kiran nagargatti.jpg' }
    ],
    [
      { name: 'Pranav Patil', role: 'Organizing Team', img: 'https://placehold.co/300x300?text=Pranav+Patil' },
      { name: 'Tanmay Patil', role: 'Organizing Team', img: 'https://placehold.co/300x300?text=Tanmay+Patil' },
      { name: 'Aditya Padale', role: 'Organizing Team', img: 'https://placehold.co/300x300?text=Aditya+Padale' },
      { name: 'Yashraj Salunkhe', role: 'Organizing Team', img: 'https://placehold.co/300x300?text=Yashraj+Salunkhe' },
      { name: 'Amit Yeadage', role: 'Organizing Team', img: 'https://placehold.co/300x300?text=Amit+Yeadage' }
    ]
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
          {teamRows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid">
              {row.map((member, index) => (
                <div key={`${rowIndex}-${index}`} className="card">
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
          ))}
        </div>
      </section>
    </section>
  );
};

export default Team;
