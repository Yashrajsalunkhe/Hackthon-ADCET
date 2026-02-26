import { useParams, useNavigate } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { ArrowLeft, Code, Cpu, Github, Globe, Sparkles, Zap, ExternalLink } from 'lucide-react';
import Footer from './Footer';
import '../styles/participant-details.css';

const ParticipantDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useScrollToTop();

  const participant = JSON.parse(sessionStorage.getItem(`participant_${id}`));

  if (!participant) {
    return (
      <div className="pd-page">
        <div className="pd-bg">
          <div className="pd-glow pd-glow-1"></div>
          <div className="pd-glow pd-glow-2"></div>
        </div>
        <div className="pd-container">
          <button onClick={() => navigate('/participants')} className="pd-back">
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>
          <div className="pd-empty">
            <div className="pd-empty-icon">
              <Zap size={32} />
            </div>
            <h2>Project Not Found</h2>
            <p>The project details could not be loaded.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const isSoftware = participant.projectCategory === 'software';

  return (
    <div className="pd-page">
      {/* Animated Background */}
      <div className="pd-bg">
        <div className="pd-glow pd-glow-1"></div>
        <div className="pd-glow pd-glow-2"></div>
        <div className="pd-grid"></div>
      </div>

      <div className="pd-container">
        {/* Back Button */}
        <button onClick={() => navigate('/participants')} className="pd-back">
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        {/* Hero Section */}
        <div className="pd-hero">
          <div className={`pd-icon-wrap ${isSoftware ? 'software' : 'hardware'}`}>
            {isSoftware ? <Code size={28} /> : <Cpu size={28} />}
          </div>
          <span className={`pd-badge ${isSoftware ? 'software' : 'hardware'}`}>
            <Sparkles size={12} />
            {isSoftware ? 'Software Project' : 'Hardware Project'}
          </span>
          <h1 className="pd-title">{participant.projectTitle}</h1>
        </div>

        {/* Main Card */}
        <div className="pd-card">
          {/* Description */}
          <div className="pd-section">
            <h3 className="pd-label">About the Project</h3>
            <p className="pd-description">{participant.projectDescription}</p>
          </div>

          {/* Tech Stack */}
          <div className="pd-section">
            <h3 className="pd-label">Tech Stack</h3>
            <div className="pd-tech-list">
              {participant.projectTechStack?.split(',').map((tech, idx) => (
                <span key={idx} className="pd-tech-item">
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(participant.projectGithubUrl || participant.projectDemoUrl) && (
            <div className="pd-section pd-links-section">
              <h3 className="pd-label">Project Links</h3>
              <div className="pd-links">
                {participant.projectGithubUrl && (
                  <a href={participant.projectGithubUrl} target="_blank" rel="noopener noreferrer" className="pd-link github">
                    <Github size={20} />
                    <div className="pd-link-text">
                      <span className="pd-link-title">Source Code</span>
                      <span className="pd-link-sub">View on GitHub</span>
                    </div>
                    <ExternalLink size={16} className="pd-link-arrow" />
                  </a>
                )}
                {participant.projectDemoUrl && (
                  <a href={participant.projectDemoUrl} target="_blank" rel="noopener noreferrer" className="pd-link demo">
                    <Globe size={20} />
                    <div className="pd-link-text">
                      <span className="pd-link-title">Live Demo</span>
                      <span className="pd-link-sub">Try it out</span>
                    </div>
                    <ExternalLink size={16} className="pd-link-arrow" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ParticipantDetails;
