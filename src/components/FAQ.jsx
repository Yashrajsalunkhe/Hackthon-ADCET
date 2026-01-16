import { useState, useEffect } from 'react';

const FAQ = () => {
  const faqData = [
    { question: 'Is this Hackathon an online event or offline?', answer: 'This is an offline event.' },
    { question: 'Is there any registration fee?', answer: 'No, registrations for the event are entirely free of charge.' },
    { question: 'Should you stay on campus overnight?', answer: 'Yes, we ask that all participants stay on campus throughout the hackathon for the best experience.' },
    { question: 'What are the facilities arranged by the organizers?', answer: 'We have arranged everything for you, including meals, comfortable accommodations, and swag.' },
    { question: 'I am a newbie, can I hack?', answer: 'Absolutely! Mentors will assist you throughout the event.' },
    { question: 'Does this hackathon cover both software and hardware projects?', answer: 'Yes, it includes both software and hardware projects.' },
    { question: 'What should I bring for the hackathon?', answer: 'Bring your student ID, laptops, gadgets, or anything else you want to work on.' },
    { question: 'Will the hackathon have Wi-Fi facilities?', answer: 'Yes, we will provide Wi-Fi throughout the event.' },
    { question: 'Can I participate without a team?', answer: 'No, this hackathon is a team event. You can team up with others in our community group.' },
    { question: 'Will you sponsor our travel costs?', answer: 'No, we do not reimburse travel costs, but accommodation is provided for those traveling from outside the city.' },
    { question: 'Will there be any mentoring sessions?', answer: 'Yes, mentors will guide you throughout the hackathon.' },
    { question: 'Do I need to be a student to participate?', answer: 'Yes, this hackathon is open to high school and undergraduate students.' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const accordionButtons = document.querySelectorAll('#faq .accordion-button');
    accordionButtons.forEach((button, index) => {
      button.addEventListener('click', () => toggleAccordion(index));
    });

    return () => {
      accordionButtons.forEach((button, index) => {
        button.removeEventListener('click', () => toggleAccordion(index));
      });
    };
  }, []);

  return (
    <section id="faq" className="faq-section not-selectable" data-section="faq">
      <div className="container">
        <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="row">
          <div className="faq-column">
            <div className="accordion">
              {faqData.slice(0, 6).map((faq, index) => (
                <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
                  <button className={`accordion-button ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                    {faq.question}
                    <span className="accordion-icon">+</span>
                  </button>
                  <div className="accordion-content" style={{maxHeight: activeIndex === index ? '200px' : '0'}}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="faq-column">
            <div className="accordion">
              {faqData.slice(6, 12).map((faq, index) => (
                <div key={index + 6} className={`accordion-item ${activeIndex === index + 6 ? 'active' : ''}`}>
                  <button className={`accordion-button ${activeIndex === index + 6 ? 'active' : ''}`} onClick={() => toggleAccordion(index + 6)}>
                    {faq.question}
                    <span className="accordion-icon">+</span>
                  </button>
                  <div className="accordion-content" style={{maxHeight: activeIndex === index + 6 ? '200px' : '0'}}>
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
