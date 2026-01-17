const Contact = () => {
  return (
    <section className="twinkle_back" id="contact">
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <section className="back_contactus">
        {/* Faculty Coordinators */}
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
          <h2 style={{fontSize: '2rem', fontWeight: '700', color: '#fff', marginBottom: '30px'}}>Faculty Coordinators</h2>
        </div>
        
        <div className="row-puw aos-init mb-4" data-aos="none">
          <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center flex-column contact-container">
            <div className="details">
              <i className="bx bx-user-circle icon-style"></i>
              <h3 className="contact-title not-selectable">Lead Coordinator</h3>
            </div>
            <div className="contact_name">
              <p className="name contact-detail">
                <b>Dr. Asma A. Shaikh</b> <br />
                <b>+91 9579489592</b> <br />
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center flex-column contact-container">
            <div className="details">
              <i className="bx bx-code-alt icon-style"></i>
              <h3 className="contact-title not-selectable">Software Edition</h3>
            </div>
            <div className="contact_name">
              <p className="name contact-detail">
                <b>Dr. Krishnakumar L</b> <br />
                <b>+91 8124755889</b> <br />
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center flex-column contact-container">
            <div className="details">
              <i className="bx bx-chip icon-style"></i>
              <h3 className="contact-title not-selectable">Hardware Edition</h3>
            </div>
            <div className="contact_name">
              <p className="name contact-detail">
                <b>Mr. Kiran I. Nargatti</b> <br />
                <b>+91 8600620061</b> <br />
              </p>
            </div>
          </div>
        </div>

        {/* Registration Coordinators */}
        <div style={{textAlign: 'center', marginTop: '50px', marginBottom: '30px'}}>
          <h2 style={{fontSize: '1.8rem', fontWeight: '700', color: '#fff'}}>Registration Coordinators</h2>
        </div>

        <div className="row-puw aos-init mb-4" data-aos="none">
          <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center flex-column contact-container">
            <div className="details">
              <i className="bx bx-id-card icon-style"></i>
              <h3 className="contact-title not-selectable">Faculty Registration</h3>
            </div>
            <div className="contact_name">
              <p className="name contact-detail">
                <b>Mr. Pravin More</b> <br />
                <b>+91 9921330873</b> <br />
                <b><a href="mailto:pbm_cse@adcet.in" style={{color: 'white', textDecoration: 'none'}}>pbm_cse@adcet.in</a></b>
              </p>
              <p className="name contact-detail">
                <b>Ms. Amruta Awati</b> <br />
                <b>+91 8329144540</b> <br />
                <b><a href="mailto:amruta_aids@adcet.in" style={{color: 'white', textDecoration: 'none'}}>amruta_aids@adcet.in</a></b>
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center flex-column contact-container">
            <div className="details">
              <i className="bx bx-user-check icon-style"></i>
              <h3 className="contact-title not-selectable">Student Registration</h3>
            </div>
            <div className="contact_name">
              <p className="name contact-detail">
                <b>Mr. Harshwardhan Patil</b> <br />
                <b>+91 9699056766</b> <br />
                <b><a href="mailto:harshvardhanpatil1701@gmail.com" style={{color: 'white', textDecoration: 'none'}}>harshvardhanpatil1701@gmail.com</a></b>
              </p>
            </div>
          </div>
        </div>

        {/* Student Coordinators */}
        <div style={{textAlign: 'center', marginTop: '50px', marginBottom: '30px'}}>
          <h2 style={{fontSize: '1.8rem', fontWeight: '700', color: '#fff'}}>Student Coordinators</h2>
        </div>

        <div className="row-puw aos-init mb-4" data-aos="none">
          <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center flex-column contact-container">
            <div className="details">
              <i className="bx bx-phone-call icon-style"></i>
              <h3 className="contact-title not-selectable">Software Edition</h3>
            </div>
            <div className="contact_name">
              <p className="name contact-detail">
                <b>Mr. Harshwardhan Patil</b> <br />
                <b>+91 9699056766</b> <br />
              </p>
              <p className="name contact-detail">
                <b>Mr. Pranav Patil</b> <br />
                <b>+91 9130867073</b> <br />
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
                <b>Mr. Rajvardhan R. Patil</b> <br />
                <b>+91 9730548000</b> <br />
              </p>
              <p className="name contact-detail">
                <b>Ms. Ritika Shevade</b> <br />
                <b>+91 8999921327</b> <br />
              </p>
            </div>
          </div>
        </div>

        {/* General Contact */}
        <div className="row-puw aos-init mb-4" data-aos="none" style={{marginTop: '40px'}}>
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
