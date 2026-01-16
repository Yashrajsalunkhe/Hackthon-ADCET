const Footer = () => {
  return (
    <footer className="custom-footer" data-section="contact">
      <div className="custom-container">
        <div className="custom-row">
          <div className="custom-col custom-col-1">
            <div className="custom-footer-logo">ADCET Hackathon 3.0</div>
            <p className="custom-footer-text">Maharashtra's Largest Hackathon*</p>
            <ul className="custom-social-links">
              <li>
                <a href="https://github.com/thecoding-society"><span className="fa fa-brands fa-github"></span></a>
              </li>
              <li>
                <a href="https://x.com/PECHacks"><span className="fa fa-brands fa-twitter"></span></a>
              </li>
              <li>
                <a href="https://www.instagram.com/pechacks/"><span className="fa fa-brands fa-instagram"></span></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/pec-hacks/"><span className="fa fa-brands fa-linkedin"></span></a>
              </li>
            </ul>
          </div>

          <div className="custom-col custom-col-2">
            <h4 className="custom-footer-heading">Venue Address</h4>
            <p className="custom-footer-address">
              Panimalar Engineering College, <br />
              Nazarathpettai, Poonamallee, <br />
              Chennai, Tamil Nadu - 600123
            </p>
            <h4 className="custom-footer-heading">Branding Guidelines</h4>
            <ul className="custom-footer-links">
              <li><i className="bx bx-chevron-right"></i> <a href="https://assets.pechacks.org/">ADCET Hackathon 3.0 Branding Asset</a></li>
            </ul>
          </div>

          <div className="custom-col custom-col-3">
            <h4 className="custom-footer-heading">Additional Links</h4>
            <ul className="custom-footer-links">
              <li><i className="bx bx-chevron-right"></i> <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="https://panimalar.ac.in">College Website</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="https://coding.psdc.xyz/">The Coding Society</a></li>
            </ul>
            <p className="custom-footer-para">* Sourced from Devfolio</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
