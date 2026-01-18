import '../css/college-banner.css';

const CollegeBanner = () => {
  return (
    <div className="college-banner">
      <div className="banner-container">
        <div className="banner-logo">
          <img src="/img/adcet.png" alt="ADCET Logo" className="logo-img" />
        </div>
        
        <div className="banner-content">
          <h1 className="banner-title">Sant Dnyaneshwar Shikshan Sanstha's</h1>
          <h2 className="banner-subtitle">
            Annasaheb Dange College of Engineering and Technology (ADCET), Ashta
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CollegeBanner;
