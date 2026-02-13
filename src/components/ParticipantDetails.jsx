import { useParams, useNavigate } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Home, User, Mail, Phone, Clock, CheckCircle, ExternalLink, Briefcase, ArrowLeft } from 'lucide-react';
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

  const StatusBadge = ({ status }) => {
    const statusConfig = {
      pending: { icon: Clock, color: '#eab308', label: 'Pending' },
      approved: { icon: CheckCircle, color: '#22c55e', label: 'Approved' },
      rejected: { icon: CheckCircle, color: '#ef4444', label: 'Rejected' }
    };
    const config = statusConfig[status] || statusConfig.pending;
    const Icon = config.icon;
    return (
      <span className={`pd-status-badge pd-status-${status}`}>
        <Icon size={16} />
        {config.label}
      </span>
    );
  };

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
            <h1 className="pd-name">{participant.name}</h1>
            <StatusBadge status={participant.status} />
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
            <div className="pd-info-card">
              <CheckCircle size={20} />
              <div>
                <span className="pd-info-label">Payment</span>
                <span className="pd-info-value">{participant.paymentStatus || 'Pending'}</span>
              </div>
            </div>
          </div>
        </div>

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
