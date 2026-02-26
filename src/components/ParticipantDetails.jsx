import { useParams, useNavigate } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Home, User, Mail, Phone, Clock, ExternalLink, Briefcase, ArrowLeft, Code, Cpu , Users} from 'lucide-react';
import Footer from './Footer';
import '../styles/participant-details.css';

const ParticipantDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useScrollToTop();

  // Retrieve participant from sessionStorage (passed from Participants page)
  const participant = JSON.parse(sessionStorage.getItem(`participant_${id}`));

  if (!participant) {
    return (
      <div className="participant-detail-page">
        <div className="participant-detail-bg">
          <div className="participants-gradient-orb orb-1"></div>
          <div className="participants-gradient-orb orb-2"></div>
        </div>
        <button onClick={() => navigate('/participants')} className="pd-home-button" title="Back to Participants">
          <ArrowLeft size={24} />
        </button>
        <div className="pd-container">
          <div className="pd-not-found">
            <User size={64} />
            <h2>Participant Not Found</h2>
            <p>The participant details could not be loaded.</p>
            <button className="pd-back-btn" onClick={() => navigate('/participants')}>
              ← Back to Participants
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="participant-detail-page">
      {/* Background */}
      <div className="participant-detail-bg">
        <div className="participants-gradient-orb orb-1"></div>
        <div className="participants-gradient-orb orb-2"></div>
      </div>

      {/* Back Button */}
      <button onClick={() => navigate('/participants')} className="pd-home-button" title="Back to Participants">
        <ArrowLeft size={24} />
      </button>

      <div className="pd-container">
        {/* Profile Header */}
        <div className="pd-profile-header">
          <div className="pd-avatar-large">
            {participant.photo ? (
              <img src={participant.photo} alt={participant.name} />
            ) : (
              <User size={60} />
            )}
          </div>
          <div className="pd-profile-info">
            <h1 className="pd-name">
              {participant.teamName || `${participant.name}'s Team`}
            </h1>
            <p className="pd-leader-name">
              <User size={16} />
              Team Leader: {participant.name}
            </p>
            <span className={`pd-category-badge ${participant.projectCategory}`}>
              {participant.projectCategory === 'software' ? (
                <><Code size={16} /> Software Project</>
              ) : (
                <><Cpu size={16} /> Hardware Project</>
              )}
            </span>
          </div>
        </div>

        {/* Contact Section */}
        <div className="pd-section">
          <h2 className="pd-section-title">Contact Information</h2>
          <div className="pd-info-grid">
            <div className="pd-info-card">
              <Mail size={20} />
              <div>
                <span className="pd-info-label">Email</span>
                <span className="pd-info-value">{participant.email}</span>
              </div>
            </div>
            <div className="pd-info-card">
              <Phone size={20} />
              <div>
                <span className="pd-info-label">Phone</span>
                <span className="pd-info-value">{participant.phone}</span>
              </div>
            </div>
            <div className="pd-info-card">
              <Clock size={20} />
              <div>
                <span className="pd-info-label">Registered</span>
                <span className="pd-info-value">{new Date(participant.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        {(participant.teamName || (participant.teamMembers && participant.teamMembers.length > 0)) && (
          <div className="pd-section">
            <h2 className="pd-section-title">
              <Users size={22} />
              {participant.teamName ? `Team: ${participant.teamName}` : 'Team Members'} 
              {participant.teamMembers && participant.teamMembers.length > 0 && ` (${participant.teamMembers.length + 1} members)`}
            </h2>
            <div className="pd-team-grid">
              {/* Team Leader */}
              <div className="pd-team-member leader">
                <div className="pd-team-avatar">
                  {participant.photo ? (
                    <img src={participant.photo} alt={participant.name} />
                  ) : (
                    <User size={32} />
                  )}
                </div>
                <div className="pd-team-info">
                  <h4 className="pd-team-name">{participant.name} <span className="leader-badge">Leader</span></h4>
                  <p className="pd-team-email">{participant.email}</p>
                  <p className="pd-team-phone">{participant.phone}</p>
                </div>
              </div>
              
              {/* Team Members */}
              {participant.teamMembers.map((member, index) => (
                <div key={index} className="pd-team-member">
                  <div className="pd-team-avatar">
                    <User size={32} />
                  </div>
                  <div className="pd-team-info">
                    <h4 className="pd-team-name">{member.name}</h4>
                    <p className="pd-team-email">{member.email}</p>
                    <p className="pd-team-phone">{member.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Section */}
        <div className="pd-section">
          <h2 className="pd-section-title">
            <Briefcase size={22} />
            Project Details
          </h2>
          <div className="pd-project-card">
            <h3 className="pd-project-title">{participant.projectTitle}</h3>
            <p className="pd-project-description">{participant.projectDescription}</p>

            <div className="pd-tech-section">
              <strong>Tech Stack:</strong>
              <div className="pd-tech-tags">
                {participant.projectTechStack?.split(',').map((tech, idx) => (
                  <span key={idx} className="pd-tech-tag">{tech.trim()}</span>
                ))}
              </div>
            </div>

            {participant.projectGithubUrl && (
              <a href={participant.projectGithubUrl} target="_blank" rel="noopener noreferrer" className="pd-github-link">
                <ExternalLink size={16} />
                View on GitHub
              </a>
            )}

            {participant.projectDemoUrl && (
              <a href={participant.projectDemoUrl} target="_blank" rel="noopener noreferrer" className="pd-demo-link">
                <ExternalLink size={16} />
                View Demo
              </a>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="pd-back-section">
          <button className="pd-back-btn" onClick={() => navigate('/participants')}>
            ← Back to Participants
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ParticipantDetails;
