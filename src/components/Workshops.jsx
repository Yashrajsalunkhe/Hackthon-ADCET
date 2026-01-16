import { useState } from 'react';

const Workshops = () => {
  const [activeDay, setActiveDay] = useState(1);

  const workshops = {
    1: [{ date: '16.12.2024', time: '6.30 - 8.30 PM', title: 'Hackathon Survival Guide: Build Fast, Code Smarter', speaker: 'Nikhil Kumaran', link: 'https://lu.ma/uwfcmgch' }],
    2: [{ date: '17.12.2024', time: '6.30 - 8.30 PM', title: 'Supercharging Idea Generation with Generative AI', speaker: 'Ayush Kurlekar', link: 'https://gdg.community.dev/e/m94vqg/' }],
    3: [{ date: '18.12.2024', time: '6.30 - 8.30 PM', title: 'Elevate your hackathon game with GitHub Copilot', speaker: 'Bhawna Chauhan & Smruthi Balaji', link: 'https://gdg.community.dev/e/mp7jm2/' }],
    4: [{ date: '19.12.2024', time: '6.30 - 8.30 PM', title: 'Dive into the world of AI-ML and Generative AI', speaker: 'Harshavardhan Singh', link: 'https://www.geeksforgeeks.org/event/pechacks-2-ai-ml-genai-workshop' }],
    5: [{ date: '20.12.2024', time: '6.30 - 8.30 PM', title: 'Winning the Hackathon: Tips and Best Practices', speaker: 'Mike Odnis', link: 'https://gdg.community.dev/e/m5jk5v/' }],
    6: [{ date: '21.12.2024', time: '6.30 - 8.30 PM', title: 'Build a Serverless Application using AWS CDK', speaker: 'Veerasolaiyappa', link: 'https://community.cncf.io/events/details/cncf-madurai-presents-masterclass-aws-cdk/' }],
  };

  return (
    <section className="twinkle_back not-selectable" data-section="workshop">
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <div className="heading">
        <h1 className="heading-shadow">WORKSHOPS</h1>
        <h2 className="heading-small" style={{color: '#ffffff'}}>
          {['W', 'O', 'R', 'K', 'S', 'H', 'O', 'P', 'S'].map((letter, index) => (
            <div key={index} style={{overflow: 'hidden'}}>
              <div style={{transform: 'translateY(0%)'}}>{letter}</div>
            </div>
          ))}
        </h2>
      </div>

      <div className="days">
        <div className="days-buttons">
          {[1, 2, 3, 4, 5, 6].map(day => (
            <button key={day} className="hvr-bounce-out" onClick={() => setActiveDay(day)}>
              Day-{day}
            </button>
          ))}
        </div>

        <div className="days-des">
          {workshops[activeDay] && workshops[activeDay].map((workshop, index) => (
            <div key={index} className="days-event event-cards">
              <div className="ag-format-container">
                <div className="ag-courses_box">
                  <div className="ag-courses_item">
                    <a href="#" className="ag-courses-item_link">
                      <div className={`ag-courses-item_bg day_${activeDay}`}></div>
                      <div className="ag-courses-item_date-box">
                        <i className='bx bx-calendar-week bx-tada' style={{color:'#f1efef'}}></i>
                        <span className="ag-courses-item_date">{workshop.date}</span>
                        <i className='bx bx-time bx-spin' style={{color:'#f1efef'}}></i>
                        <span className="ag-courses-item_date">{workshop.time}</span>
                      </div>
                      <div className="ag-courses-item_title">
                        <div className="des_con">
                          {workshop.title}
                          <p style={{fontWeight: 300, marginTop: '10px'}}>
                            Join <span style={{textDecoration: 'underline'}}>{workshop.speaker}</span> for this workshop.
                          </p>
                        </div>
                        <div className="reg_btn_work">
                          <button 
                            className="btn btn-secondary me-2 join_com white new link-button" 
                            onClick={() => window.open(workshop.link, '_blank')}
                            style={{backgroundColor: 'black', zIndex: 100, fontSize: '20px'}}
                          >
                            Register <i className='bx bx-right-arrow-circle bx-flashing' style={{fontSize: '15px', marginLeft: '5px'}}></i>
                          </button>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
