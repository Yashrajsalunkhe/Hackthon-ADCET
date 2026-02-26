import React, { useState, useEffect } from "react";
import { 
  Home, FileText, Download, Eye, Search,
  Users, Calendar, Filter, ChevronDown, 
  ChevronRight, AlertCircle, CheckCircle,
  User, Mail, Phone, Briefcase, Building
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "../hooks/useScrollToTop";
import Footer from "./Footer";
import "../styles/datahack.css";

const DataHack = () => {
  const navigate = useNavigate();
  useScrollToTop();

  // State management
  const [registrations, setRegistrations] = useState([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [loading, setLoading] = useState(true);
  const [expandedTeam, setExpandedTeam] = useState(null);

  // Fetch registrations on component mount
  useEffect(() => {
    fetchRegistrations();
  }, []);

  // Filter registrations based on search and status
  useEffect(() => {
    let filtered = registrations;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(reg =>
        reg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.projectTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.teamMembers.some(member =>
          member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          member.email.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Filter by status
    if (filterStatus !== "all") {
      filtered = filtered.filter(reg => reg.status === filterStatus);
    }

    setFilteredRegistrations(filtered);
  }, [registrations, searchTerm, filterStatus]);

  // Fetch all registrations from the server
  const fetchRegistrations = async () => {
    try {
      setLoading(true);
      
      // Try different possible ports (5001 first since server is running there)
      const ports = [5001, 5000, 3001];
      let response = null;
      let lastError = null;
      
      for (const port of ports) {
        try {
          response = await fetch(`http://localhost:${port}/api/registrations`);
          if (response.ok) {
            break;
          }
        } catch (err) {
          lastError = err;
          continue;
        }
      }
      
      if (!response || !response.ok) {
        // If no server found, show sample data for demo
        console.warn('No backend server found, showing sample data');
        setRegistrations(getSampleData());
        return;
      }
      
      const data = await response.json();
      if (data.success) {
        setRegistrations(data.data);
      } else {
        throw new Error(data.message || 'Failed to fetch registrations');
      }
    } catch (error) {
      console.error('Error fetching registrations:', error);
      // Show sample data as fallback
      console.warn('Showing sample data due to API error');
      setRegistrations(getSampleData());
    } finally {
      setLoading(false);
    }
  };

  // Toggle team expansion
  const toggleTeamExpansion = (teamId) => {
    setExpandedTeam(expandedTeam === teamId ? null : teamId);
  };

  // Get team size
  const getTeamSize = (teamMembers) => {
    return teamMembers.length + 1; // +1 for team leader
  };

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return '#10B981';
      case 'rejected': return '#EF4444';
      case 'pending': return '#F59E0B';
      default: return '#6B7280';
    }
  };

  // Get status icon
  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved': return <CheckCircle size={16} />;
      case 'rejected': return <AlertCircle size={16} />;
      case 'pending': return <AlertCircle size={16} />;
      default: return <AlertCircle size={16} />;
    }
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Get sample data for demonstration
  const getSampleData = () => {
    return [
      {
        _id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '9876543210',
        projectTitle: 'Smart Health Monitor',
        projectDescription: 'An IoT-based health monitoring system that tracks vital signs and alerts healthcare providers in real-time.',
        projectTechStack: 'React, Node.js, MongoDB, Arduino, IoT Sensors',
        projectCategory: 'hardware',
        projectGithubUrl: 'https://github.com/johndoe/health-monitor',
        projectDemoUrl: 'https://health-monitor-demo.com',
        governmentDocument: 'uploads/john-aadhar.pdf',
        collegeId: 'uploads/john-college-id.pdf',
        status: 'approved',
        createdAt: '2024-02-20T10:30:00Z',
        teamMembers: [
          {
            name: 'Jane Smith',
            email: 'jane@example.com',
            phone: '9876543211',
            governmentDocument: 'uploads/jane-aadhar.pdf',
            collegeId: 'uploads/jane-college-id.pdf'
          },
          {
            name: 'Mike Johnson',
            email: 'mike@example.com',
            phone: '9876543212',
            governmentDocument: 'uploads/mike-aadhar.pdf',
            collegeId: 'uploads/mike-college-id.pdf'
          }
        ]
      },
      {
        _id: '2',
        name: 'Alice Brown',
        email: 'alice@example.com',
        phone: '9876543220',
        projectTitle: 'EcoTrack - Carbon Footprint App',
        projectDescription: 'A mobile application that helps users track and reduce their carbon footprint through daily activity monitoring.',
        projectTechStack: 'React Native, Firebase, Machine Learning, Chart.js',
        projectCategory: 'software',
        projectGithubUrl: 'https://github.com/alicebrown/ecotrack',
        governmentDocument: 'uploads/alice-aadhar.pdf',
        collegeId: 'uploads/alice-college-id.pdf',
        status: 'pending',
        createdAt: '2024-02-21T14:15:00Z',
        teamMembers: [
          {
            name: 'Bob Wilson',
            email: 'bob@example.com',
            phone: '9876543221',
            governmentDocument: 'uploads/bob-aadhar.pdf',
            collegeId: 'uploads/bob-college-id.pdf'
          }
        ]
      },
      {
        _id: '3',
        name: 'David Lee',
        email: 'david@example.com',
        phone: '9876543230',
        projectTitle: 'AI-Powered Study Assistant',
        projectDescription: 'An intelligent tutoring system that adapts to student learning patterns and provides personalized study recommendations.',
        projectTechStack: 'Python, TensorFlow, React, Flask, PostgreSQL',
        projectCategory: 'software',
        governmentDocument: 'uploads/david-aadhar.pdf',
        collegeId: 'uploads/david-college-id.pdf',
        status: 'approved',
        createdAt: '2024-02-22T09:45:00Z',
        teamMembers: []
      }
    ];
  };

  // Handle document view
  const handleViewDocument = (documentPath, teamName, memberName = "Team Leader") => {
    if (!documentPath) return;
    
    // Extract filename from path
    const filename = documentPath.includes('/') 
      ? documentPath.split('/').pop() 
      : documentPath.includes('\\') 
        ? documentPath.split('\\').pop() 
        : documentPath;
    
    // Try different ports for document serving (start with 5001 since that's where server is running)
    const ports = [5001, 5000, 3001];
    let opened = false;
    
    for (const port of ports) {
      try {
        const documentUrl = `http://localhost:${port}/uploads/${filename}`;
        window.open(documentUrl, '_blank');
        opened = true;
        break;
      } catch (error) {
        console.warn(`Failed to open document on port ${port}:`, error);
        continue;
      }
    }
    
    if (!opened) {
      // Fallback: show alert with document info
      alert(`Unable to open document: ${filename}\nTeam: ${teamName}\nMember: ${memberName}\n\nPlease ensure the server is running on port 5001.`);
    }
  };

  if (loading) {
    return (
      <div className="datahack-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading team data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="datahack-page">
      {/* Background Effects */}
      <div className="datahack-bg-effects">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Home Button */}
      <button
        onClick={() => navigate('/')}
        className="home-button"
        title="Back to Home"
      >
        <Home size={24} />
      </button>

      <div className="datahack-container">
        {/* Header */}
        <div className="datahack-header">
          <div className="datahack-badge">
            <FileText size={16} />
            <span>Document Portal</span>
          </div>
          
          <h1 className="datahack-title">
            Team <span className="gradient-text">DataHack</span>
          </h1>
          
          <p className="datahack-subtitle">
            View and manage team documents for registered participants
          </p>
        </div>

        {/* Statistics */}
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">
              <Users size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-number">{registrations.length}</div>
              <div className="stat-label">Total Teams</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <User size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-number">
                {registrations.reduce((total, reg) => total + getTeamSize(reg.teamMembers), 0)}
              </div>
              <div className="stat-label">Total Participants</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <CheckCircle size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-number">
                {registrations.filter(reg => reg.status === 'approved').length}
              </div>
              <div className="stat-label">Approved Teams</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="controls-container">
          <div className="search-container">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search by team name, project, or member..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-container">
            <Filter size={20} />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Teams List */}
        <div className="teams-container">
          {filteredRegistrations.length === 0 ? (
            <div className="no-teams">
              <FileText size={48} />
              <h3>No Teams Found</h3>
              <p>
                {searchTerm || filterStatus !== "all" 
                  ? "Try adjusting your search or filter criteria." 
                  : "No teams have registered yet."
                }
              </p>
            </div>
          ) : (
            filteredRegistrations.map((team) => (
              <div key={team._id} className="team-card">
                <div className="team-header" onClick={() => toggleTeamExpansion(team._id)}>
                  <div className="team-info">
                    <div className="team-title">
                      <h3>{team.projectTitle}</h3>
                      <div 
                        className="status-badge"
                        style={{ backgroundColor: getStatusColor(team.status) }}
                      >
                        {getStatusIcon(team.status)}
                        <span>{team.status}</span>
                      </div>
                    </div>
                    <div className="team-meta">
                      <span className="team-size">
                        <Users size={16} />
                        {getTeamSize(team.teamMembers)} member{getTeamSize(team.teamMembers) > 1 ? 's' : ''}
                      </span>
                      <span className="team-date">
                        <Calendar size={16} />
                        {formatDate(team.createdAt)}
                      </span>
                      <span className="team-category">
                        <Briefcase size={16} />
                        {team.projectCategory || 'Not specified'}
                      </span>
                    </div>
                  </div>
                  <div className="expand-icon">
                    {expandedTeam === team._id ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
                  </div>
                </div>

                {expandedTeam === team._id && (
                  <div className="team-details">
                    {/* Team Leader */}
                    <div className="member-section">
                      <h4 className="member-section-title">
                        <User size={20} />
                        Team Leader
                      </h4>
                      <div className="member-card leader">
                        <div className="member-info">
                          <div className="member-name">{team.name}</div>
                          <div className="member-contact">
                            <span><Mail size={14} />{team.email}</span>
                            <span><Phone size={14} />{team.phone}</span>
                          </div>
                        </div>
                        <div className="member-documents">
                          <div className="doc-item">
                            <FileText size={16} />
                            <span>Government Doc</span>
                            <button
                              onClick={() => handleViewDocument(team.governmentDocument, team.projectTitle, team.name)}
                              className="view-doc-btn"
                              disabled={!team.governmentDocument}
                            >
                              <Eye size={14} />
                              {team.governmentDocument ? 'View' : 'Not uploaded'}
                            </button>
                          </div>
                          <div className="doc-item">
                            <Building size={16} />
                            <span>College ID</span>
                            <button
                              onClick={() => handleViewDocument(team.collegeId, team.projectTitle, team.name)}
                              className="view-doc-btn"
                              disabled={!team.collegeId}
                            >
                              <Eye size={14} />
                              {team.collegeId ? 'View' : 'Not uploaded'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Team Members */}
                    {team.teamMembers.length > 0 && (
                      <div className="member-section">
                        <h4 className="member-section-title">
                          <Users size={20} />
                          Team Members ({team.teamMembers.length})
                        </h4>
                        <div className="members-grid">
                          {team.teamMembers.map((member, index) => (
                            <div key={index} className="member-card">
                              <div className="member-info">
                                <div className="member-name">{member.name}</div>
                                <div className="member-contact">
                                  <span><Mail size={14} />{member.email}</span>
                                  <span><Phone size={14} />{member.phone}</span>
                                </div>
                              </div>
                              <div className="member-documents">
                                <div className="doc-item">
                                  <FileText size={16} />
                                  <span>Gov Doc</span>
                                  <button
                                    onClick={() => handleViewDocument(member.governmentDocument, team.projectTitle, member.name)}
                                    className="view-doc-btn"
                                    disabled={!member.governmentDocument}
                                  >
                                    <Eye size={14} />
                                    {member.governmentDocument ? 'View' : 'Not uploaded'}
                                  </button>
                                </div>
                                <div className="doc-item">
                                  <Building size={16} />
                                  <span>College ID</span>
                                  <button
                                    onClick={() => handleViewDocument(member.collegeId, team.projectTitle, member.name)}
                                    className="view-doc-btn"
                                    disabled={!member.collegeId}
                                  >
                                    <Eye size={14} />
                                    {member.collegeId ? 'View' : 'Not uploaded'}
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Project Information */}
                    <div className="project-section">
                      <h4 className="project-section-title">
                        <Briefcase size={20} />
                        Project Information
                      </h4>
                      <div className="project-details">
                        <div className="project-description">
                          <strong>Description:</strong>
                          <p>{team.projectDescription}</p>
                        </div>
                        <div className="project-tech">
                          <strong>Tech Stack:</strong>
                          <span>{team.projectTechStack}</span>
                        </div>
                        {team.projectGithubUrl && (
                          <div className="project-link">
                            <strong>GitHub:</strong>
                            <a href={team.projectGithubUrl} target="_blank" rel="noopener noreferrer">
                              View Repository
                            </a>
                          </div>
                        )}
                        {team.projectDemoUrl && (
                          <div className="project-link">
                            <strong>Demo:</strong>
                            <a href={team.projectDemoUrl} target="_blank" rel="noopener noreferrer">
                              View Demo
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Refresh Button */}
        <div className="refresh-container">
          <button onClick={fetchRegistrations} className="refresh-button">
            <Download size={16} />
            Refresh Data
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DataHack;