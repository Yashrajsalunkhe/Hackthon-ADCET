import React, { useState, useEffect } from "react";
import { 
  Home, Users, Search, User, Mail, Phone, Briefcase, 
  CheckCircle, Clock, XCircle, ExternalLink, Filter,
  ChevronDown, Eye, RefreshCw
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "../hooks/useScrollToTop";
import Footer from "./Footer";
import "../styles/participants.css";

const Participants = () => {
  const navigate = useNavigate();
  useScrollToTop();

  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");


  // Fetch participants from API
  useEffect(() => {
    fetchParticipants();
  }, []);

  const fetchParticipants = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/registrations');
      if (response.ok) {
        const data = await response.json();
        setParticipants(data.data || []);
      } else {
        throw new Error('Failed to fetch participants');
      }
    } catch (err) {
      console.error('Error fetching participants:', err);
      setError('Unable to load participants. Please try again later.');
      // Demo data for development
      setParticipants([
        {
          _id: '1',
          name: 'Demo User',
          email: 'demo@example.com',
          phone: '9876543210',
          projectTitle: 'Smart Campus App',
          projectDescription: 'An innovative app for campus management with AI-powered features for students and faculty.',
          projectTechStack: 'React Native, Node.js, MongoDB',
          status: 'approved',
          paymentStatus: 'verified',
          createdAt: new Date().toISOString()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Filter participants
  const filteredParticipants = participants.filter(participant => {
    const matchesSearch = 
      participant.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.projectTitle?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || participant.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Status badge component
  const StatusBadge = ({ status }) => {
    const statusConfig = {
      pending: { icon: Clock, color: '#eab308', label: 'Pending' },
      approved: { icon: CheckCircle, color: '#22c55e', label: 'Approved' },
      rejected: { icon: XCircle, color: '#ef4444', label: 'Rejected' }
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    const Icon = config.icon;
    
    return (
      <span className={`status-badge status-${status}`}>
        <Icon size={14} />
        {config.label}
      </span>
    );
  };

  return (
    <div className="participants-page">
      {/* Background Effects */}
      <div className="participants-bg-effects">
        <div className="participants-gradient-orb orb-1"></div>
        <div className="participants-gradient-orb orb-2"></div>
      </div>

      {/* Home Button */}
      <button
        onClick={() => navigate('/')}
        className="home-button"
        title="Back to Home"
      >
        <Home size={24} />
      </button>

      <div className="participants-container">
        {/* Header */}
        <div className="participants-header">
          <div className="participants-badge">
            <Users size={16} />
            <span>Registered Participants</span>
          </div>
          
          <h1 className="participants-title">
            Hackathon <span className="gradient-text">Participants</span>
          </h1>
          
          <p className="participants-subtitle">
            View all registered participants and their innovative projects
          </p>

          {/* Stats */}
          <div className="participants-stats">
            <div className="stat-item">
              <span className="stat-number">{participants.length}</span>
              <span className="stat-label">Total Registered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{participants.filter(p => p.status === 'approved').length}</span>
              <span className="stat-label">Approved</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{participants.filter(p => p.status === 'pending').length}</span>
              <span className="stat-label">Pending</span>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="search-filter-bar">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search by name, email, or project..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-dropdown">
            <Filter size={18} />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
            <ChevronDown size={16} />
          </div>

          <button className="refresh-btn" onClick={fetchParticipants}>
            <RefreshCw size={18} />
          </button>
        </div>

        {/* Participants Grid */}
        {loading ? (
          <div className="loading-state">
            <div className="loader"></div>
            <p>Loading participants...</p>
          </div>
        ) : error && participants.length === 0 ? (
          <div className="error-state">
            <XCircle size={48} />
            <p>{error}</p>
            <button onClick={fetchParticipants}>Try Again</button>
          </div>
        ) : filteredParticipants.length === 0 ? (
          <div className="empty-state">
            <Users size={48} />
            <p>No participants found</p>
            <span>Try adjusting your search or filter</span>
          </div>
        ) : (
          <div className="participants-grid">
            {filteredParticipants.map((participant) => (
              <div key={participant._id} className="participant-card">
                <div className="card-header">
                  <div className="participant-avatar">
                    {participant.photo ? (
                      <img src={participant.photo} alt={participant.name} />
                    ) : (
                      <User size={28} />
                    )}
                  </div>
                  <StatusBadge status={participant.status} />
                </div>

                <div className="card-body">
                  <h3 className="participant-name">{participant.name}</h3>
                  <p className="participant-email">
                    <Mail size={14} />
                    {participant.email}
                  </p>

                  <div className="project-info">
                    <h4>
                      <Briefcase size={14} />
                      {participant.projectTitle}
                    </h4>
                    <p className="project-desc">
                      {participant.projectDescription?.substring(0, 100)}
                      {participant.projectDescription?.length > 100 && '...'}
                    </p>
                  </div>

                  <div className="tech-tags-mini">
                    {participant.projectTechStack?.split(',').slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="tech-tag-mini">{tech.trim()}</span>
                    ))}
                  </div>
                </div>

                <div className="card-footer">
                  <span className="registration-date">
                    <Clock size={12} />
                    {new Date(participant.createdAt).toLocaleDateString()}
                  </span>
                  <button 
                    className="view-details-btn"
                    onClick={() => {
                      sessionStorage.setItem(`participant_${participant._id}`, JSON.stringify(participant));
                      navigate(`/participant/${participant._id}`);
                    }}
                  >
                    <Eye size={14} />
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Participants;
