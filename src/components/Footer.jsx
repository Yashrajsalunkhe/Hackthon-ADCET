const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="custom-footer" data-section="contact">
      <div className="custom-container">
        <div className="custom-row">
          <div className="custom-col custom-col-1">
            <div className="custom-footer-logo">ADCET Hackthon 3.0</div>
            <p className="custom-footer-text">International Hackathon</p>
            <ul className="custom-social-links">
              <li>
                <a href="https://www.facebook.com/adcet.ac.in"><span className="fa fa-brands fa-facebook"></span></a>
              </li>
              <li>
                <a href="https://x.com/AdcetAshta"><span className="fa fa-brands fa-twitter"></span></a>
              </li>
              <li>
                <a href="https://www.instagram.com/adcet_ashta"><span className="fa fa-brands fa-instagram"></span></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/school/annasaheb-dange-college-of-engineering-and-technology-ashta/"><span className="fa fa-brands fa-linkedin"></span></a>
              </li>
              <li>
                <a href="https://www.youtube.com/"><span className="fa fa-brands fa-youtube"></span></a>
              </li>
            </ul>
          </div>

          <div className="custom-col custom-col-2">
            <h4 className="custom-footer-heading">Venue Address</h4>
            <p className="custom-footer-address">
              Annasaheb Dange College of Engineering, <br />
              Shahu Maharaj Rd, Anand Colony, <br />
              Ashta, Sangli, Maharashtra - 416301
            </p>
          </div>



          <div className="custom-col custom-col-4">
            <h4 className="custom-footer-heading">Location</h4>
            <div className="custom-map-container">
              <iframe
                src="https://maps.google.com/maps?q=16.9403781,74.4163838&hl=en&z=15&output=embed"
                width="100%"
                height="150"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="custom-footer-bottom">
          <p className="custom-footer-copyright">
            Made by <a href="https://adityaa.me" target="_blank" rel="noopener noreferrer">Aditya Padale</a> and <a href="https://yashrajsalunkhe.me" target="_blank" rel="noopener noreferrer">Yashraj Salunkhe</a>
          </p>
          <button className="scroll-to-top" onClick={scrollToTop}>
            <span className="fa fa-chevron-up"></span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
