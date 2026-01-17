const TrackPrizes = () => {
  const softwareThemes = [
    { 
      name: 'Generative AI & Autonomous Systems', 
      description: 'Develop intelligent software systems that can generate content, make decisions, and operate autonomously with minimal human intervention.',
      icon: '🤖'
    },
    { 
      name: 'Quantum Computing Applications', 
      description: 'Build software applications, simulators, or hybrid models that demonstrate real-world problem solving using quantum or quantum-inspired computing.',
      icon: '⚛️'
    },
    { 
      name: 'Digital Twins for Industry & Infrastructure', 
      description: 'Create virtual replicas of physical systems to monitor, simulate, optimize, and predict performance of industrial or infrastructure assets.',
      icon: '🏭'
    },
    { 
      name: 'Digital Governance & e-Public Services', 
      description: 'Develop digital platforms that enhance government service delivery, citizen engagement, transparency, and administrative efficiency.',
      icon: '🏛️'
    },
    { 
      name: 'EdTech 5.0 – Personalized & Immersive Learning', 
      description: 'Propose technology-driven learning solutions that adapt to individual learners using AI, analytics, and immersive technologies.',
      icon: '📚'
    },
    { 
      name: 'GameTech & Serious Games for Impact', 
      description: 'Build games or interactive simulations aimed at education, training, awareness, and social or behavioural impact.',
      icon: '🎮'
    },
    { 
      name: 'Smart Supply Chain & Logistics Intelligence', 
      description: 'Create data-driven software solutions to optimize logistics, forecasting, traceability, and supply chain efficiency.',
      icon: '📦'
    },
    { 
      name: 'AR/VR Solutions', 
      description: 'Develop immersive augmented or virtual reality applications for education, training, healthcare, industry, or social impact.',
      icon: '🥽'
    },
    { 
      name: 'Cyber Security', 
      description: 'Design and develop a comprehensive and extensible e-application fuzzing framework that automates discovery and security testing of web applications.',
      icon: '🔒'
    },
    { 
      name: 'Blockchain Technology', 
      description: 'Develop a secure, technology-enabled digital platform for creating, managing, and enforcing assured contractual agreements among stakeholders.',
      icon: '⛓️'
    }
  ];

  const hardwareThemes = [
    { 
      name: 'Smart Resource Optimization System', 
      description: 'Design a hardware-based system to monitor and optimize usage of energy, water, materials, or fuel in industrial, institutional, or domestic applications.',
      icon: '⚡'
    },
    { 
      name: 'Affordable Automation for Small-Scale Industries', 
      description: 'Develop a low-cost automated or semi-automated hardware solution to improve productivity, quality, or safety in small-scale or cottage industries.',
      icon: '🏭'
    },
    { 
      name: 'Smart Safety and Monitoring Device', 
      description: 'Create a hardware solution that enhances safety, security, or hazard detection in workplaces, laboratories, construction sites, or public environments.',
      icon: '🚨'
    },
    { 
      name: 'Sustainable and Green Technology Solution', 
      description: 'Design an eco-friendly hardware prototype focusing on renewable energy, waste reduction, recycling, or environmental monitoring.',
      icon: '🌱'
    },
    { 
      name: 'Smart Infrastructure and Built Environment', 
      description: 'Develop a hardware-enabled system for smart buildings, smart campuses, roads, or infrastructure monitoring.',
      icon: '🏢'
    },
    { 
      name: 'Assistive Technology for Health and Accessibility', 
      description: 'Build a hardware-based assistive device supporting healthcare, elderly care, or differently-abled individuals.',
      icon: '🩺'
    },
    { 
      name: 'Smart Agriculture and Food Processing System', 
      description: 'Design a hardware solution to enhance agricultural productivity, food processing efficiency, quality control, or storage.',
      icon: '🌾'
    },
    { 
      name: 'Predictive Maintenance and Fault Detection', 
      description: 'Develop a system capable of detecting faults or predicting maintenance requirements in machines, structures, or equipment.',
      icon: '🔧'
    },
    { 
      name: 'Smart Mobility and Transportation Solution', 
      description: 'Create an innovative hardware model to improve transportation safety, efficiency, or monitoring in ground or aerial systems.',
      icon: '🚗'
    },
    { 
      name: 'Digital-Physical Integration for Business Applications', 
      description: 'Design a hardware–software integrated solution for inventory management, logistics, operational tracking, or business process optimization.',
      icon: '📊'
    }
  ];

  return (
    <section className="twinkle_back not-selectable" id="tracks" data-section="tracks">
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      
      <div className="heading">
        <h1 className="heading-shadow not-selectable">TRACKS</h1>
        <h2 className="heading-small not-selectable" style={{color: '#ffffff'}}>
          {['T', 'R', 'A', 'C', 'K', ' ', 'T', 'H', 'E', 'M', 'E', 'S'].map((letter, index) => (
            <div key={index} style={{overflow: 'hidden'}}>
              <div style={{transform: 'translateY(0%)', willChange: 'auto'}}>{letter === ' ' ? '\u00A0' : letter}</div>
            </div>
          ))}
        </h2>
      </div>

      <div style={{maxWidth: '1400px', margin: '0 auto', padding: '0 20px'}}>
        {/* Software Edition */}
        <div style={{marginBottom: '80px'}}>
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '15px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Software Edition
            </h3>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', marginBottom: '10px'}}>
              Prizes: ₹1,00,000
            </p>
            <p style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem'}}>
              Winner: ₹50,000 • Runner Up: ₹30,000 • 2nd Runner Up: ₹20,000
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '25px',
            marginBottom: '20px'
          }}>
            {softwareThemes.map((theme, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                data-aos-once="true"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  padding: '25px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.5)';
                  e.currentTarget.style.background = 'rgba(102, 126, 234, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                }}
              >
                <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>{theme.icon}</div>
                <h4 style={{
                  color: '#fff',
                  fontSize: '1.15rem',
                  fontWeight: '600',
                  marginBottom: '12px',
                  lineHeight: '1.4'
                }}>
                  {index + 1}. {theme.name}
                </h4>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hardware Edition */}
        <div>
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '15px',
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Hardware Edition
            </h3>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', marginBottom: '10px'}}>
              Prizes: ₹1,00,000
            </p>
            <p style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem'}}>
              Winner: ₹50,000 • Runner Up: ₹30,000 • 2nd Runner Up: ₹20,000
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '25px'
          }}>
            {hardwareThemes.map((theme, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                data-aos-once="true"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  padding: '25px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'rgba(245, 87, 108, 0.5)';
                  e.currentTarget.style.background = 'rgba(245, 87, 108, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                }}
              >
                <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>{theme.icon}</div>
                <h4 style={{
                  color: '#fff',
                  fontSize: '1.15rem',
                  fontWeight: '600',
                  marginBottom: '12px',
                  lineHeight: '1.4'
                }}>
                  {index + 1}. {theme.name}
                </h4>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <br /><br />
    </section>
  );
};

export default TrackPrizes;
