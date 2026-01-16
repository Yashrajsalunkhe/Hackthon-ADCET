// This component is very large. Creating a simplified version.
// You can enhance it by adding all judges/speakers data from the original HTML.

const JudgesSpeakers = () => {
  const people = [
    { name: 'Anish Mathew Sajeev', role: 'Judge', position: 'CEO & Founder, Susan Future Technologies', img: 'img/Speaker/Judge_1.jpg', linkedin: 'https://www.linkedin.com/in/anish-mathew-sajeev-58283954/', email: 'anish@susanfuturetechnologies.com' },
    { name: 'Santhosh Chaluvadi', role: 'Judge', position: 'Founder & CEO, Supraja Technologies', img: 'img/Speaker/judge_san.jpg', linkedin: 'https://www.linkedin.com/in/chaluvadisantosh', email: 'santosh@suprajatechnologies.com' },
    // Add more judges/speakers as needed
  ];

  return (
    <section className="twinkle_back container not-selectable">
      <section className="card-j back_judges">
        <div className="background-container">
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>
        <div className="heading">
          <h1 className="heading-shadow modify">Judges & Speakers</h1>
          <h2 className="heading-small modify-small" style={{color: '#fff'}}>
            {['J', 'U', 'D', 'G', 'E', 'S', ' ', '&', ' ', 'S', 'P', 'E', 'A', 'K', 'E', 'R', 'S'].map((letter, index) => (
              <div key={index} style={{overflow: 'hidden'}}>
                <div style={{transform: 'translateY(0%)', willChange: 'auto'}}>{letter === ' ' ? '\u00A0' : letter}</div>
              </div>
            ))}
          </h2>
        </div>
        <div className="card__container bd-container">
          {people.map((person, index) => (
            <div key={index} className="card__glass">
              <img src={person.img} alt={person.name} className="card__img" />
              <div className="card__data">
                <h3 className="card__title">{person.name}</h3>
                <span className="card__profession">{person.position}</span><br/>
              </div>
              <a href="#" className="card__button">{person.role}</a>
              <div className="card__social">
                {person.email && (
                  <a href={`mailto:${person.email}`} target="_blank" rel="noopener noreferrer" className="card__link">
                    <i className='fa fa-envelope'></i>
                  </a>
                )}
                {person.linkedin && (
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="card__link">
                    <i className='bx bxl-linkedin'></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default JudgesSpeakers;
