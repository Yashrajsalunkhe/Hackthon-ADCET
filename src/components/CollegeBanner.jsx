import '../css/college-banner.css';

const CollegeBanner = () => {
  return (
    <div className="college-banner">
      <div className="banner-container">
        <div className="banner-logo">
          <img src="/img/logo.png" alt="ADCET Logo" className="logo-img" />
        </div>
        
        <div className="banner-content">
          <h1 className="banner-title">Sant Dnyaneshwar Shikshan Sanstha's</h1>
          <h2 className="banner-subtitle">
            Annasaheb Dange College of Engineering and Technology (ADCET), Ashta
          </h2>
          <p className="banner-description">
            An Empowered Autonomous Institute, affiliated to Shivaji University, Kolhapur
          </p>
          <p className="banner-approval">
            Approved by AICTE, New Delhi & Govt. of Maharashtra
          </p>
          <div className="banner-accreditation">
            <span className="accreditation-text">
              Accredited by NAAC 'A+' Grade, Bangalore
            </span>
            <span className="accreditation-separator">•</span>
            <span className="accreditation-highlight">
              Eligible Programs Accredited by NBA, New Delhi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeBanner;
