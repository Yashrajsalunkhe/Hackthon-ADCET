import { useState, useEffect } from 'react';

const FAQ = () => {
  const faqData = [
    { question: 'Is this Hackathon an online event or offline?', answer: 'This is an offline event held at Annasaheb Dange College of Engineering & Technology, Ashta, Maharashtra.' },
    { question: 'Is there any registration fee?', answer: 'No, registrations for the event are entirely free of charge.' },
    { question: 'Who can participate in this hackathon?', answer: 'Students from Diploma, B.E./B.Tech, M.E./M.Tech, BCA/MCA, and other technical courses can participate. High school and undergraduate students are welcome.' },
    { question: 'What is the team size requirement?', answer: 'Teams must consist of 4-5 members. At least one female member is mandatory in each team. Team formation is allowed but individual registrations are not accepted.' },
    { question: 'Should you stay on campus overnight?', answer: 'Yes, we ask that all participants stay on campus throughout the 48-hour hackathon for the best experience.' },
    { question: 'What are the facilities arranged by the organizers?', answer: 'We have arranged everything for you, including meals (breakfast, lunch, dinner, and snacks), comfortable accommodations, Wi-Fi, workspace, swag, and all necessary amenities.' },
    { question: 'I am a newbie, can I hack?', answer: 'Absolutely! This hackathon welcomes beginners. Mentors and industry experts will assist you throughout the event with technical guidance.' },
    { question: 'Does this hackathon cover both software and hardware projects?', answer: 'Yes, it includes both software and hardware tracks. Each track has separate problem statements and prize pools of ₹1,00,000 each.' },
    { question: 'What should I bring for the hackathon?', answer: 'Bring your valid student ID card (mandatory), laptops, chargers, hardware components (if applicable), personal essentials, and anything else you want to work on.' },
    { question: 'Will the hackathon have Wi-Fi facilities?', answer: 'Yes, we will provide high-speed Wi-Fi throughout the event for all participants.' },
    { question: 'Can I participate without a team?', answer: 'No, this hackathon is a team event. However, you can team up with others in our community group before registration.' },
    { question: 'Will you sponsor our travel costs?', answer: 'No, we do not reimburse travel costs, but free accommodation and meals are provided for those traveling from outside the city.' },
    { question: 'Will there be any mentoring sessions?', answer: 'Yes, industry mentors and technical experts will be available throughout the hackathon to guide you and help solve challenges.' },
    { question: 'What are the themes for this hackathon?', answer: 'The hackathon focuses on two main themes: Viksit Bharat (Developed India - 2047 Goals) and UN Sustainable Development Goals (SDGs).' },
    { question: 'How will projects be evaluated?', answer: 'Projects will be evaluated based on Innovation & Creativity, Technical Implementation, Problem-solving Approach, Feasibility & Scalability, Presentation & Demo, and Impact on Society/Environment.' },
    { question: 'When is the registration deadline?', answer: 'Idea submissions (Round 1) must be completed by February 5, 2026. Shortlisted teams will be notified by February 25, 2026.' },
    { question: 'What is the selection process?', answer: 'Round 1 (Online): Submit your idea on Unstop platform. Top teams will be shortlisted. Round 2 (Offline): Selected teams will participate in the 72-hour offline hackathon at ADCET campus.' },
    { question: 'Can I change my team members after registration?', answer: 'Minor changes may be allowed before the shortlist announcement. Contact the organizers for team modification requests, but it\'s best to finalize your team before registration.' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section not-selectable" data-section="faq">
      <div className="container">
        <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="row">
          <div className="faq-column">
            <div className="accordion">
              {faqData.slice(0, 9).map((faq, index) => (
                <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
                  <button className={`accordion-button ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                    {faq.question}
                    <span className="accordion-icon">+</span>
                  </button>
                  <div className="accordion-content" style={{maxHeight: activeIndex === index ? '300px' : '0'}}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="faq-column">
            <div className="accordion">
              {faqData.slice(9, 18).map((faq, index) => (
                <div key={index + 9} className={`accordion-item ${activeIndex === index + 9 ? 'active' : ''}`}>
                  <button className={`accordion-button ${activeIndex === index + 9 ? 'active' : ''}`} onClick={() => toggleAccordion(index + 9)}>
                    {faq.question}
                    <span className="accordion-icon">+</span>
                  </button>
                  <div className="accordion-content" style={{maxHeight: activeIndex === index + 9 ? '300px' : '0'}}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
