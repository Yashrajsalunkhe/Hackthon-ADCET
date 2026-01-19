import React from "react";
import { 
  Calendar, Award, GraduationCap, Building, Users, Trophy, 
  MapPin, Target, Rocket, TrendingUp, ExternalLink, Home
} from "lucide-react";
import DockNav from "./DockNav";
import Footer from "./Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useNavigate } from "react-router-dom";
import "../styles/college-info.css";
import "../styles/timeline.css";

const CollegeInfo = () => {
  const navigate = useNavigate();
  useScrollToTop();

  const milestones = [
    { year: "1999", month: "Genesis", event: "FOUNDATION ESTA...", fullEvent: "Foundation Established", students: "180", highlight: "Genesis", detail: "Foundation Established", color: "blue", number: "99" },
    { year: "2001", month: "Tech Era", event: "COMPUTER SCIENC...", fullEvent: "Computer Science Added", students: "240", highlight: "Tech Era", detail: "Computer Science Added", color: "blue", number: "01" },
    { year: "2004", month: "Power Up", event: "ELECTRICAL ENGI...", fullEvent: "Electrical Engineering", students: "300", highlight: "Power Up", detail: "Electrical Engineering", color: "blue", number: "04" },
    { year: "2010", month: "Growth", event: "MAJOR EXPANSION", fullEvent: "Major Expansion", students: "540", highlight: "Growth", detail: "Civil & Mechanical added", color: "blue", number: "10" },
    { year: "2010", month: "Quality", event: "ISO 9001:2008", fullEvent: "ISO 9001:2008", students: "540", highlight: "Quality", detail: "Quality Certification", color: "orange", number: "10" },
    { year: "2011", month: "Scale", event: "600 STUDENTS", fullEvent: "600 Students", students: "600", highlight: "Scale", detail: "Continued growth", color: "blue", number: "11" },
    { year: "2013", month: "Sky High", event: "AERONAUTICAL ADDED", fullEvent: "Aeronautical Added", students: "660", highlight: "Sky High", detail: "Aerospace Engineering", color: "blue", number: "13" },
    { year: "2014", month: "Recognition", event: "NBA ACCREDITATION", fullEvent: "NBA Accreditation", students: "660", highlight: "Recognition", detail: "3 Programs Accredited", color: "orange", number: "14" },
    { year: "2015", month: "Excellence", event: "NAAC A GRADE", fullEvent: "NAAC A Grade", students: "660", highlight: "Excellence", detail: "Academic Excellence", color: "orange", number: "15" },
    { year: "2017", month: "Autonomy", event: "AUTONOMOUS STATUS", fullEvent: "Autonomous Status", students: "720", highlight: "Autonomy", detail: "Independent Excellence", color: "orange", number: "17" },
    { year: "2019", month: "Innovation", event: "FOOD TECHNOLOGY", fullEvent: "Food Technology", students: "780", highlight: "Innovation", detail: "New Department & NBA Extension", color: "blue", number: "19" },
    { year: "2021", month: "Future", event: "AI & DATA SCIENCE", fullEvent: "AI & Data Science", students: "1000", highlight: "Future", detail: "Future Technology Programs", color: "blue", number: "21" },
    { year: "2022", month: "Enhanced", event: "ENHANCED NBA", fullEvent: "Enhanced NBA", students: "1100", highlight: "Enhanced", detail: "Extended Accreditation", color: "orange", number: "22" },
    { year: "2023", month: "Pinnacle", event: "NAAC A++", fullEvent: "NAAC A++", students: "1200+", highlight: "Pinnacle", detail: "Highest Grade Achieved", color: "orange", number: "23" }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <button
        onClick={() => navigate('/')}
        style={{
          position: 'fixed', top: '20px', left: '20px', zIndex: 1000,
          background: 'rgba(59, 130, 246, 0.2)', backdropFilter: 'blur(10px)',
          border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '50%',
          width: '50px', height: '50px', display: 'flex', alignItems: 'center',
          justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(59, 130, 246, 0.3)';
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(59, 130, 246, 0.2)';
          e.target.style.transform = 'scale(1)';
        }}
        title="Back to Home"
      >
        <Home style={{ width: '24px', height: '24px', color: '#3b82f6' }} />
      </button>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            border: '1px solid #3b82f6', borderRadius: '25px', padding: '0.5rem 1rem',
            marginBottom: '2rem', color: '#3b82f6', fontSize: '0.9rem'
          }}>
            <MapPin size={16} />
            <span>Ashta, Sangli, Maharashtra</span>
            <ExternalLink size={14} />
          </div>
          
          <h1 style={{ fontSize: '3.5rem', fontWeight: '300', marginBottom: '1.5rem' }}>
            Complete <span style={{ 
              background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '400'
            }}>College Information</span>
          </h1>
          
          <p style={{ fontSize: '1.1rem', color: '#9ca3af', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Comprehensive details about ADCET - From humble beginnings to becoming Western Maharashtra's premier engineering institution
          </p>
          
          <div style={{ width: '60px', height: '1px', background: 'linear-gradient(to right, transparent, #3b82f6, transparent)', margin: '0 auto' }} />
        </div>

        {/* Vision & Mission Section */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              border: '1px solid #8b5cf6', borderRadius: '25px', padding: '0.5rem 1rem',
              marginBottom: '1.5rem', color: '#8b5cf6', fontSize: '0.9rem'
            }}>
              <Target size={16} />
              <span>Vision & Mission</span>
            </div>
            
            <h2 style={{ fontSize: '3rem', fontWeight: '300' }}>
              Our <span style={{ 
                background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Purpose</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '2rem' }}>
            {/* Vision Card */}
            <div style={{
              background: '#0a0a0a', border: '1px solid #1e293b',
              borderRadius: '12px', overflow: 'hidden', transition: 'all 0.3s'
            }}>
              <div style={{ height: '2px', background: 'linear-gradient(to right, #3b82f6, #06b6d4)' }} />
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: 'rgba(59, 130, 246, 0.1)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Target size={24} color="#3b82f6" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Our Vision</h3>
                </div>
                <p style={{ color: '#9ca3af', lineHeight: '1.8' }}>
                  To be a Leader in producing professionally competent engineers.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div style={{
              background: '#0a0a0a', border: '1px solid #1e293b',
              borderRadius: '12px', overflow: 'hidden', transition: 'all 0.3s'
            }}>
              <div style={{ height: '2px', background: 'linear-gradient(to right, #8b5cf6, #ec4899)' }} />
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: 'rgba(139, 92, 246, 0.1)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Rocket size={24} color="#8b5cf6" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Our Mission</h3>
                </div>
                <div style={{ color: '#9ca3af', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <p><span style={{ color: '#8b5cf6', fontWeight: '600' }}>M1.</span> Imparting effective outcome based education.</p>
                  <p><span style={{ color: '#8b5cf6', fontWeight: '600' }}>M2.</span> Preparing students through skill oriented courses to excel in their profession with ethical values.</p>
                  <p><span style={{ color: '#8b5cf6', fontWeight: '600' }}>M3.</span> Promoting research to benefit the society.</p>
                  <p><span style={{ color: '#8b5cf6', fontWeight: '600' }}>M4.</span> Strengthening relationship with all the stakeholders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              border: '1px solid #f97316', borderRadius: '25px', padding: '0.5rem 1rem',
              marginBottom: '1.5rem', color: '#f97316', fontSize: '0.9rem'
            }}>
              <Users size={16} />
              <span>Leadership Team</span>
            </div>
            
            <h2 style={{ fontSize: '3rem', fontWeight: '300' }}>
              Our <span style={{ 
                background: 'linear-gradient(to right, #f97316, #dc2626)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Desk</span>
            </h2>
            <p style={{ fontSize: '1rem', color: '#9ca3af', marginTop: '1rem' }}>
              Visionary leaders driving excellence in technical education and rural development
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              { name: "Shri. Annasaheb Dange", role: "Founder", desc: "Visionary founder of Sant Dnyaneshwar Shikshan Sanstha, dedicated to bringing quality technical education to rural Maharashtra.", color: "#f97316", img: "https://www.adcet.ac.in/images/desk/Hon-Shri-Annasaheb-Dange.jpg", link: "https://www.adcet.ac.in/message-by-founder-chairman" },
              { name: "Adv. Rajendra R. Dange", role: "Secretary", desc: "Committed to student-centric policies and creating a nurturing academic environment for all students.", color: "#3b82f6", img: "https://www.adcet.ac.in/images/desk/Adv-Rajendra-R-Dange.jpg", link: "https://www.adcet.ac.in/message-by-secretary" },
              { name: "Shri. Vishwanath R. Dange", role: "Joint Secretary", desc: "Focused on academic excellence and fostering innovation in engineering education and research.", color: "#10b981", img: "https://www.adcet.ac.in/images/desk/Shri-Vishwanath-R-Dange.jpg", link: "https://www.adcet.ac.in/message-by-joint-secretary" },
              { name: "Dr. Laxman Y Waghmode", role: "Director", desc: "Leading the institute towards global excellence in technical education and industry collaboration.", color: "#8b5cf6", img: "https://www.adcet.ac.in/images/desk/Laxman-Y-Waghmode.jpg", link: "https://www.adcet.ac.in/message-by-director" }
            ].map((leader, idx) => (
              <div key={idx} style={{
                background: '#0a0a0a', border: '1px solid #1e293b',
                borderRadius: '12px', overflow: 'hidden', transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <div style={{ height: '2px', background: `linear-gradient(to right, ${leader.color}, ${leader.color})` }} />
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{
                    width: '80px', height: '80px', borderRadius: '50%',
                    border: `2px solid ${leader.color}`, margin: '0 auto 1rem',
                    overflow: 'hidden'
                  }}>
                    <img src={leader.img} alt={leader.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{
                    background: leader.color, color: '#fff', fontSize: '0.75rem',
                    padding: '0.25rem 0.75rem', borderRadius: '15px', display: 'inline-block',
                    marginBottom: '0.75rem', fontWeight: '600'
                  }}>
                    {leader.name}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.75rem' }}>{leader.role}</h3>
                  <p style={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                    {leader.desc}
                  </p>
                  <button
                    onClick={() => window.open(leader.link, '_blank')}
                    style={{
                      color: leader.color, background: 'none', border: 'none',
                      cursor: 'pointer', fontSize: '0.875rem', fontWeight: '600',
                      display: 'flex', alignItems: 'center', gap: '0.25rem', margin: '0 auto'
                    }}
                  >
                    Read More <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              border: '1px solid #6366f1', borderRadius: '25px', padding: '0.5rem 1rem',
              marginBottom: '1.5rem', color: '#6366f1', fontSize: '0.9rem'
            }}>
              <Trophy size={16} />
              <span>Key Highlights</span>
            </div>
            
            <h2 style={{ fontSize: '3rem', fontWeight: '300' }}>
              Our <span style={{ 
                background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Achievements</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
            {[
              { icon: Calendar, number: "26+", label: "Years of Excellence" },
              { icon: Award, number: "A++", label: "NAAC Grade" },
              { icon: Trophy, number: "NBA", label: "Accredited Programs" },
              { icon: Users, number: "1200+", label: "Current Students" },
              { icon: Building, number: "10+", label: "Departments" },
              { icon: GraduationCap, number: "150+", label: "Expert Faculty" }
            ].map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <div key={idx} style={{
                  background: '#0a0a0a', border: '1px solid #1e293b',
                  borderRadius: '12px', padding: '1.5rem', textAlign: 'center',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: 'rgba(99, 102, 241, 0.1)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem'
                  }}>
                    <Icon size={24} color="#6366f1" />
                  </div>
                  <div style={{ fontSize: '1.75rem', fontWeight: '700', color: '#fff', marginBottom: '0.25rem' }}>
                    {achievement.number}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                    {achievement.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Section */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              border: '1px solid #3b82f6', borderRadius: '25px', padding: '0.5rem 1rem',
              marginBottom: '1.5rem', color: '#3b82f6', fontSize: '0.9rem'
            }}>
              <TrendingUp size={16} />
              <span>Growth Timeline • 1999 - 2025</span>
            </div>
            
            <h2 style={{ fontSize: '3rem', fontWeight: '300', marginBottom: '1rem' }}>
              Journey of <span style={{ 
                background: 'linear-gradient(to right, #3b82f6, #10b981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Excellence</span>
            </h2>
            
            <p style={{ fontSize: '1rem', color: '#9ca3af' }}>
              From <span style={{ color: '#3b82f6', fontWeight: '600' }}>180 students to 1200+</span> • 
              A testament to <span style={{ color: '#10b981', fontWeight: '600' }}>continuous innovation</span>
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div style={{
            position: 'relative',
            padding: '5rem 3rem',
            minHeight: '850px'
          }}>
            {/* Horizontal Line */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '2%',
              right: '2%',
              height: '3px',
              background: 'linear-gradient(to right, transparent, #1e293b 2%, #1e293b 98%, transparent)',
              transform: 'translateY(-50%)',
              zIndex: 0
            }} />

            {/* Timeline Items Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '3.5rem',
              position: 'relative',
              maxWidth: '1800px',
              margin: '0 auto'
            }}>
              {milestones.map((milestone, idx) => {
                const isOrange = milestone.color === 'orange';
                const isTop = idx % 2 === 0;
                
                return (
                  <div key={idx} style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: isTop ? 'flex-end' : 'flex-start',
                    minHeight: '380px'
                  }}>
                    {/* Card */}
                    <div style={{
                      position: 'absolute',
                      [isTop ? 'bottom' : 'top']: isTop ? 'calc(50% + 35px)' : 'calc(50% + 35px)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '180px',
                      background: isOrange 
                        ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(0, 0, 0, 0.95))'
                        : 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(0, 0, 0, 0.95))',
                      border: `2px solid ${isOrange ? '#f97316' : '#3b82f6'}`,
                      borderRadius: '14px',
                      padding: '20px',
                      backdropFilter: 'blur(12px)',
                      boxShadow: `0 8px 24px ${isOrange ? 'rgba(249, 115, 22, 0.25)' : 'rgba(59, 130, 246, 0.25)'}`,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      zIndex: 2
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(-50%) scale(1.03)';
                      e.currentTarget.style.boxShadow = `0 12px 36px ${isOrange ? 'rgba(249, 115, 22, 0.45)' : 'rgba(59, 130, 246, 0.45)'}`;
                      e.currentTarget.style.borderWidth = '3px';
                      e.currentTarget.style.zIndex = '20';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
                      e.currentTarget.style.boxShadow = `0 8px 24px ${isOrange ? 'rgba(249, 115, 22, 0.25)' : 'rgba(59, 130, 246, 0.25)'}`;
                      e.currentTarget.style.borderWidth = '2px';
                      e.currentTarget.style.zIndex = '2';
                    }}>
                      {/* Year Badge */}
                      <div style={{
                        display: 'inline-block',
                        background: isOrange 
                          ? 'linear-gradient(135deg, #f97316, #fb923c)'
                          : 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                        color: '#fff',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '12px',
                        fontWeight: '700',
                        marginBottom: '10px',
                        letterSpacing: '0.5px',
                        boxShadow: isOrange 
                          ? '0 3px 8px rgba(249, 115, 22, 0.4)'
                          : '0 3px 8px rgba(59, 130, 246, 0.4)'
                      }}>
                        {milestone.year}
                      </div>

                      {/* Highlight Tag */}
                      <div style={{
                        fontSize: '9px',
                        color: isOrange ? '#fb923c' : '#06b6d4',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '8px'
                      }}>
                        {milestone.highlight}
                      </div>

                      {/* Event Title */}
                      <div style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        color: '#fff',
                        marginBottom: '12px',
                        lineHeight: '1.3',
                        minHeight: '32px'
                      }}>
                        {milestone.fullEvent}
                      </div>

                      {/* Students Count */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '6px',
                        paddingTop: '10px',
                        borderTop: `1px solid ${isOrange ? 'rgba(249, 115, 22, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`
                      }}>
                        <div style={{
                          fontSize: '20px',
                          fontWeight: '800',
                          color: isOrange ? '#f97316' : '#3b82f6',
                          lineHeight: '1'
                        }}>
                          {milestone.students}
                        </div>
                        <div style={{
                          fontSize: '8px',
                          color: '#9ca3af',
                          fontWeight: '600',
                          textTransform: 'uppercase'
                        }}>
                          Students
                        </div>
                      </div>

                      {/* Arrow */}
                      <div style={{
                        position: 'absolute',
                        [isTop ? 'bottom' : 'top']: '-10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '10px solid transparent',
                        borderRight: '10px solid transparent',
                        [isTop ? 'borderTop' : 'borderBottom']: `10px solid ${isOrange ? '#f97316' : '#3b82f6'}`
                      }} />
                    </div>

                    {/* Center Circle/Dot */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: isOrange ? '#f97316' : '#3b82f6',
                      border: '3px solid #000',
                      zIndex: 5,
                      boxShadow: `0 0 0 6px ${isOrange ? 'rgba(249, 115, 22, 0.25)' : 'rgba(59, 130, 246, 0.25)'}`,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.4)';
                      e.currentTarget.style.boxShadow = `0 0 0 10px ${isOrange ? 'rgba(249, 115, 22, 0.35)' : 'rgba(59, 130, 246, 0.35)'}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                      e.currentTarget.style.boxShadow = `0 0 0 6px ${isOrange ? 'rgba(249, 115, 22, 0.25)' : 'rgba(59, 130, 246, 0.25)'}`;
                    }} />
                  </div>
                );
              })}
            </div>

            {/* End decoration */}
            <div style={{
              position: 'absolute',
              top: '50%',
              right: '3%',
              transform: 'translateY(-50%)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              zIndex: 5
            }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#3b82f6',
                  opacity: 1 - (i * 0.3)
                }} />
              ))}
            </div>
          </div>
        </div>

        {/* Growth Trajectory */}
        <div style={{
          background: '#0a0a0a', border: '1px solid #1e293b',
          borderRadius: '12px', overflow: 'hidden', marginBottom: '5rem'
        }}>
          <div style={{ height: '2px', background: 'linear-gradient(to right, #3b82f6, #ec4899, #3b82f6)' }} />
          <div style={{ padding: '3rem 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: '300' }}>
                <span style={{ 
                  background: 'linear-gradient(to right, #3b82f6, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Growth Trajectory</span>
              </h3>
              <p style={{ color: '#9ca3af', marginTop: '1rem' }}>
                A visual representation of our <span style={{ color: '#3b82f6', fontWeight: '600' }}>exponential growth</span>
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
              {[
                { icon: Building, number: "26", label: "Years of Excellence" },
                { icon: TrendingUp, number: "7x", label: "Student Growth" },
                { icon: Award, number: "14", label: "Major Milestones" },
                { icon: Trophy, number: "∞", label: "Future Potential" }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '8px',
                      background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 0.75rem'
                    }}>
                      <Icon size={20} color="#3b82f6" />
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: '300', color: '#3b82f6', marginBottom: '0.25rem' }}>
                      {stat.number}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '300', textAlign: 'center', marginBottom: '2rem', color: '#fff' }}>
                Student Growth Over Time
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1rem' }}>
                {[
                  { year: '1999', students: 180, percentage: 15 },
                  { year: '2001', students: 240, percentage: 20 },
                  { year: '2004', students: 300, percentage: 25 },
                  { year: '2010', students: 540, percentage: 45 },
                  { year: '2015', students: 660, percentage: 55 },
                  { year: '2021', students: 1000, percentage: 83 },
                  { year: '2023+', students: '1200+', percentage: 100 }
                ].map((data, idx) => (
                  <div key={idx} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '100%', background: '#1e293b', borderRadius: '10px',
                      height: '6px', marginBottom: '0.5rem', overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${data.percentage}%`,
                        height: '100%',
                        background: 'linear-gradient(to right, #3b82f6, #ec4899)',
                        borderRadius: '10px',
                        transition: 'width 1s ease'
                      }} />
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#9ca3af', marginBottom: '0.25rem' }}>
                      {data.year}
                    </div>
                    <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#3b82f6' }}>
                      {data.students}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legacy Section */}
        <div style={{
          background: '#0a0a0a', border: '1px solid #1e293b',
          borderRadius: '12px', overflow: 'hidden'
        }}>
          <div style={{ height: '2px', background: 'linear-gradient(to right, #ec4899, #3b82f6, #ec4899)' }} />
          <div style={{ padding: '3rem 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '2.5rem', fontWeight: '300', marginBottom: '1rem' }}>
                Our <span style={{ 
                  background: 'linear-gradient(to right, #3b82f6, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Legacy</span>
              </h3>
              <p style={{ color: '#9ca3af' }}>
                Numbers that define our journey of <span style={{ color: '#3b82f6', fontWeight: '600' }}>excellence and innovation</span>
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '2rem', marginBottom: '2rem' }}>
              {[
                { icon: Calendar, number: "26+", label: "Years of Excellence", color: "#3b82f6" },
                { icon: Award, number: "A++", label: "NAAC Grade", color: "#ec4899" },
                { icon: Trophy, number: "NBA", label: "Accredited Programs", color: "#3b82f6" },
                { icon: Users, number: "1200+", label: "Current Students", color: "#ec4899" },
                { icon: Building, number: "10+", label: "Departments", color: "#3b82f6" },
                { icon: GraduationCap, number: "150+", label: "Expert Faculty", color: "#ec4899" }
              ].map((achievement, idx) => {
                const Icon = achievement.icon;
                return (
                  <div key={idx} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '8px',
                      background: `${achievement.color}15`, border: `1px solid ${achievement.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 0.75rem', transition: 'all 0.3s'
                    }}>
                      <Icon size={24} color={achievement.color} />
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '300', color: achievement.color, marginBottom: '0.5rem' }}>
                      {achievement.number}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#9ca3af', lineHeight: '1.4' }}>
                      {achievement.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{
              borderTop: '1px solid #1e293b', paddingTop: '2rem',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '1.25rem', fontWeight: '300', color: '#fff' }}>
                Be part of this <span style={{ color: '#3b82f6', fontWeight: '600' }}>extraordinary legacy</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <DockNav />
      <Footer />
    </div>
  );
};

export default CollegeInfo;
