import { useScrollToTop } from "../hooks/useScrollToTop";
import Header from "./Header";
import DockNav from "./DockNav";
import Footer from "./Footer";

const CollegeInfoSimple = () => {
  useScrollToTop();

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0a0a0a', 
      color: '#ffffff',
      paddingTop: '100px'
    }}>
      <Header />
      
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '2rem'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          textAlign: 'center', 
          marginBottom: '2rem',
          background: 'linear-gradient(to right, #3b82f6, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          College Information
        </h1>
        
        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '2rem',
          borderRadius: '1rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{ color: '#3b82f6', marginBottom: '1rem' }}>About ADCET</h2>
          <p style={{ lineHeight: '1.8', color: '#a0a0a0' }}>
            Annasaheb Dange College of Engineering and Technology (ADCET), Ashta is an Empowered Autonomous Institute, 
            affiliated to Shivaji University, Kolhapur. Approved by AICTE, New Delhi & Govt. of Maharashtra.
          </p>
        </div>

        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '2rem',
          borderRadius: '1rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{ color: '#ec4899', marginBottom: '1rem' }}>Accreditations</h2>
          <ul style={{ lineHeight: '2', color: '#a0a0a0', paddingLeft: '2rem' }}>
            <li>NAAC 'A++' Grade Accredited</li>
            <li>NBA Accredited Programs</li>
            <li>Autonomous Status Since 2017</li>
          </ul>
        </div>

        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '2rem',
          borderRadius: '1rem'
        }}>
          <h2 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Quick Facts</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem'
          }}>
            <div style={{ padding: '1rem', backgroundColor: '#0a0a0a', borderRadius: '0.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', color: '#3b82f6', fontWeight: 'bold' }}>26+</div>
              <div style={{ color: '#a0a0a0' }}>Years of Excellence</div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#0a0a0a', borderRadius: '0.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', color: '#ec4899', fontWeight: 'bold' }}>1200+</div>
              <div style={{ color: '#a0a0a0' }}>Students</div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#0a0a0a', borderRadius: '0.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', color: '#3b82f6', fontWeight: 'bold' }}>10+</div>
              <div style={{ color: '#a0a0a0' }}>Departments</div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#0a0a0a', borderRadius: '0.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', color: '#ec4899', fontWeight: 'bold' }}>150+</div>
              <div style={{ color: '#a0a0a0' }}>Faculty Members</div>
            </div>
          </div>
        </div>
      </div>

      <DockNav />
      <Footer />
    </div>
  );
};

export default CollegeInfoSimple;
