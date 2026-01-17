const Contact = () => {
  return (
    <section className="twinkle_back">
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <section className="back_contactus">
        <div className="row-puw aos-init mb-4" data-aos="none">
          <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center flex-column contact-container">
            <div className="details">
              <i className="bx bx-phone-call icon-style"></i>
              <h3 className="contact-title not-selectable">Software Edition</h3>
            </div>
            <div className="contact_name">
              <p className="name contact-detail">
                <b>Dr. Krishna Kumar</b> <br />
                <b>+91 8124755889</b> <br />
              </p>
              <p className="name contact-detail">
                <b>Mr. Pranav Patil</b> <br />
                <b>+91 9130867073</b> <br />
              </p>
              <p className="name contact-detail">
                <b>Mr. Harshwardhan Patil</b> <br />
                <b>+91 9699056766</b> <br />
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center flex-column contact-container">
            <div className="details">
              <i className="bx bx-phone-call icon-style"></i>
              <h3 className="contact-title not-selectable">Hardware Edition</h3>
            </div>
            <div className="contact_name">
              <p className="name contact-detail">
                <b>Prof. Kiran Nargatti</b> <br />
                <b>+91 8600620061</b> <br />
              </p>
              <p className="name contact-detail">
                <b>Mr. Rajvardhan Patil</b> <br />
                <b>+91 9730548000</b> <br />
              </p>
              <p className="name contact-detail">
                <b>Ms. Ritika Shevade</b> <br />
                <b>+91 8999921327</b> <br />
              </p>
            </div>
          </div>
        </div>
        <div className="row-puw aos-init mb-4" data-aos="none" style={{marginTop: '30px'}}>
          <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column contact-container">
            <div className="details">
              <i className="bx bx-envelope icon-style"></i>
              <h3 className="contact-title not-selectable">Email</h3>
              <p className="contact-detail"><b><a href="mailto:hackathon@adcet.ac.in" style={{color: 'white', textDecoration: 'none'}}>hackathon@adcet.ac.in</a></b></p>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column contact-container">
            <div className="details">
              <i className="bx bx-globe icon-style"></i>
              <h3 className="contact-title not-selectable">Website</h3>
              <p className="contact-detail"><b><a href="https://www.adcet.ac.in" target="_blank" rel="noopener noreferrer" style={{color: 'white', textDecoration: 'none'}}>www.adcet.ac.in</a></b></p>
            </div>
          </div>
        </div>
        <br/>
      </section>
    </section>
  );
};

export default Contact;
