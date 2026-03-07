import React, { useState, useEffect } from "react";
import { 
  Home, User, Mail, Phone, FileText,
  Upload, CheckCircle, AlertCircle, Building,
  Briefcase, Eye, Send, ArrowRight, ArrowLeft,
  Users, Trash2, UserPlus
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "../hooks/useScrollToTop";
import Footer from "./Footer";
import Payment from "./Payment";
import "../styles/info.css";

const Info = () => {
  const navigate = useNavigate();
  useScrollToTop();

  // Form state
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    email: "",
    phone: "",
    state: "",
    collegeName: "",
    letterFromCollege: null,
    letterFromCollegeName: "",
    mentorComing: "",
    mentorName: "",
    address: "",
    // Team Information
    teamName: "",
    // Team Members
    teamMembers: [],
    // Documents
    governmentDocument: null,
    governmentDocumentName: "",
    collegeId: null,
    collegeIdName: "",
    // Project Details
    projectCategory: "",
    projectTitle: "",
    projectDescription: "",
    projectTechStack: "",
    projectGithubUrl: "",
    projectDemoUrl: "",
    // Payment Details
    transactionId: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const totalSteps = 5;

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Handle file uploads
  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    
    // Clear previous errors first
    setErrors(prev => ({ ...prev, [fieldName]: "" }));
    
    if (!file) {
      // User cancelled file selection
      return;
    }

    try {
      // Validate file size (max 200KB)
      if (file.size > 200 * 1024) {
        setErrors(prev => ({ ...prev, [fieldName]: "File size must be less than 200KB" }));
        e.target.value = ''; // Reset input
        return;
      }
      
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, [fieldName]: "Only JPG, PNG, or PDF files are allowed" }));
        e.target.value = ''; // Reset input
        return;
      }
      
      // Update form data
      setFormData(prev => ({
        ...prev,
        [fieldName]: file,
        [`${fieldName}Name`]: file.name
      }));
      
    } catch (error) {
      console.error('File upload error:', error);
      setErrors(prev => ({ ...prev, [fieldName]: "Error processing file. Please try again." }));
      e.target.value = ''; // Reset input
    }
  };

  // Team member handlers
  const addTeamMember = () => {
    if (formData.teamMembers.length >= 4) {
      setErrors(prev => ({ ...prev, teamMembers: "Maximum 4 team members allowed" }));
      return;
    }
    setFormData(prev => ({
      ...prev,
      teamMembers: [...prev.teamMembers, { name: "", email: "", phone: "", governmentDocument: null, governmentDocumentName: "", collegeId: null, collegeIdName: "" }]
    }));
    setErrors(prev => ({ ...prev, teamMembers: "" }));
  };

  const removeTeamMember = (index) => {
    setFormData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.filter((_, i) => i !== index)
    }));
  };

  const handleTeamMemberChange = (index, field, value) => {
    setFormData(prev => {
      const updated = [...prev.teamMembers];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, teamMembers: updated };
    });
    // Clear team member errors
    if (errors[`teamMember_${index}_${field}`]) {
      setErrors(prev => ({ ...prev, [`teamMember_${index}_${field}`]: "" }));
    }
  };

  // Handle team member file uploads
  const handleTeamMemberFileChange = (e, index, fieldName) => {
    const file = e.target.files[0];
    const errorKey = `teamMember_${index}_${fieldName}`;
    
    // Clear previous errors first
    setErrors(prev => ({ ...prev, [errorKey]: "" }));
    
    if (!file) {
      // User cancelled file selection
      return;
    }

    try {
      // Validate file size (max 200KB)
      if (file.size > 200 * 1024) {
        setErrors(prev => ({ ...prev, [errorKey]: "File size must be less than 200KB" }));
        e.target.value = ''; // Reset input
        return;
      }
      
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, [errorKey]: "Only JPG, PNG, or PDF files are allowed" }));
        e.target.value = ''; // Reset input
        return;
      }
      
      // Update team member data
      setFormData(prev => {
        const updated = [...prev.teamMembers];
        updated[index] = {
          ...updated[index],
          [fieldName]: file,
          [`${fieldName}Name`]: file.name
        };
        return { ...prev, teamMembers: updated };
      });
      
    } catch (error) {
      console.error('Team member file upload error:', error);
      setErrors(prev => ({ ...prev, [errorKey]: "Error processing file. Please try again." }));
      e.target.value = ''; // Reset input
    }
  };

  // Clear file upload
  const clearFileUpload = (fieldName) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: null,
      [`${fieldName}Name`]: ""
    }));
    setErrors(prev => ({ ...prev, [fieldName]: "" }));
  };

  // Clear team member file upload
  const clearTeamMemberFileUpload = (index, fieldName) => {
    setFormData(prev => {
      const updated = [...prev.teamMembers];
      updated[index] = {
        ...updated[index],
        [fieldName]: null,
        [`${fieldName}Name`]: ""
      };
      return { ...prev, teamMembers: updated };
    });
    setErrors(prev => ({ ...prev, [`teamMember_${index}_${fieldName}`]: "" }));
  };

  // Validate current step
  const validateStep = (step) => {
    const newErrors = {};
    
    switch(step) {
      case 1: // Personal Information
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.teamName.trim()) newErrors.teamName = "Team name is required";
        if (!formData.state.trim()) newErrors.state = "State is required";
        if (!formData.collegeName.trim()) newErrors.collegeName = "College name is required";
        if (!formData.mentorComing) newErrors.mentorComing = "Please specify if mentor is coming";
        if (formData.mentorComing === 'yes' && !formData.mentorName.trim()) {
          newErrors.mentorName = "Mentor name is required";
        }
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Invalid email format";
        }
        if (!formData.phone.trim()) {
          newErrors.phone = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
          newErrors.phone = "Phone number must be 10 digits";
        }
        // Validate team members
        formData.teamMembers.forEach((member, index) => {
          if (!member.name.trim()) newErrors[`teamMember_${index}_name`] = "Name is required";
          if (!member.email.trim()) {
            newErrors[`teamMember_${index}_email`] = "Email is required";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(member.email)) {
            newErrors[`teamMember_${index}_email`] = "Invalid email format";
          }
          if (!member.phone.trim()) {
            newErrors[`teamMember_${index}_phone`] = "Phone is required";
          } else if (!/^[0-9]{10}$/.test(member.phone.replace(/\s/g, ''))) {
            newErrors[`teamMember_${index}_phone`] = "Phone must be 10 digits";
          }
        });
        break;
      
      case 2: // Documents
        if (!formData.governmentDocument) newErrors.governmentDocument = "Government document is required";
        if (!formData.collegeId) newErrors.collegeId = "College ID is required";
        // Validate team member documents
        formData.teamMembers.forEach((member, index) => {
          if (!member.governmentDocument) newErrors[`teamMember_${index}_governmentDocument`] = "Government document is required";
          if (!member.collegeId) newErrors[`teamMember_${index}_collegeId`] = "College ID is required";
        });
        break;
      
      case 3: // Project Overview
        if (!formData.projectCategory) newErrors.projectCategory = "Project category is required";
        if (!formData.projectTitle.trim()) newErrors.projectTitle = "Project title is required";
        if (!formData.projectDescription.trim()) {
          newErrors.projectDescription = "Project description is required";
        } else if (formData.projectDescription.trim().length < 50) {
          newErrors.projectDescription = "Description must be at least 50 characters";
        }
        if (!formData.projectTechStack.trim()) newErrors.projectTechStack = "Tech stack is required";
        if (!formData.projectCategory) newErrors.projectCategory = "Project category is required";
        break;
      
      case 4: // Project Review - Optional validations
        // No required fields for review step
        break;
      
      case 5: // Payment
        if (!formData.transactionId.trim()) newErrors.transactionId = "Transaction ID is required";
        else if (formData.transactionId.trim().length < 8) newErrors.transactionId = "Transaction ID must be at least 8 characters";
        break;
      

    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle step navigation
  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create FormData for file uploads
      const submitData = new FormData();
      
      // Append non-file fields
      Object.keys(formData).forEach(key => {
        if (key === 'teamMembers') {
          // Serialize team members without File objects (files appended separately)
          const membersData = formData[key].map(m => ({
            name: m.name, email: m.email, phone: m.phone,
            governmentDocumentName: m.governmentDocumentName || '',
            collegeIdName: m.collegeIdName || '',
          }));
          submitData.append(key, JSON.stringify(membersData));
          // Append each member's files with indexed field names
          formData[key].forEach((member, i) => {
            if (member.governmentDocument) {
              submitData.append(`memberGovDoc_${i}`, member.governmentDocument);
            }
            if (member.collegeId) {
              submitData.append(`memberCollegeId_${i}`, member.collegeId);
            }
          });
        } else if (key === 'governmentDocument' || key === 'collegeId' || key === 'letterFromCollege') {
          // Handle file fields - only append if they are actual File objects
          if (formData[key] instanceof File) {
            submitData.append(key, formData[key]);
          }
        } else {
          // List of filename storage fields to exclude (not actual data fields)
          const filenameFields = ['governmentDocumentName', 'collegeIdName', 'letterFromCollegeName'];
          
          // Include all other non-empty fields (collegeName, teamName, mentorName are actual data)
          if (!filenameFields.includes(key) && formData[key] !== null && formData[key] !== "") {
            submitData.append(key, formData[key]);
          }
        }
      });

      // API call to backend (MongoDB)
      const response = await fetch('/api/registration', {
        method: 'POST',
        body: submitData,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          teamName: "",
          teamMembers: [],
          governmentDocument: null,
          governmentDocumentName: "",
          collegeId: null,
          collegeIdName: "",
          projectCategory: "",
          projectTitle: "",
          projectDescription: "",
          projectTechStack: "",
          projectGithubUrl: "",
          projectDemoUrl: "",
        });
        setCurrentStep(1);
      } else {
        // Show detailed error message from API
        const errorMessage = data.message || 'Submission failed';
        console.error('API Error:', data);
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      // Store error message to display to user
      setErrors(prev => ({ ...prev, submit: error.message }));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step indicator component
  const StepIndicator = () => (
    <div className="step-indicator">
      {[1, 2, 3, 4, 5].map((step) => (
        <div key={step} className={`step-item ${currentStep >= step ? 'active' : ''} ${currentStep === step ? 'current' : ''}`}>
          <div className="step-number">{step}</div>
          <div className="step-label">
            {step === 1 && "Personal Info"}
            {step === 2 && "Documents"}
            {step === 3 && "Project Overview"}
            {step === 4 && "Review"}
            {step === 5 && "Payment"}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="info-page">
      {/* Background Effects */}
      <div className="info-bg-effects">
        <div className="info-gradient-orb orb-1"></div>
        <div className="info-gradient-orb orb-2"></div>
        <div className="info-gradient-orb orb-3"></div>
      </div>

      {/* Home Button */}
      <button
        onClick={() => navigate('/')}
        className="home-button"
        title="Back to Home"
      >
        <Home size={24} />
      </button>

      <div className="info-container">
        {/* Header */}
        <div className="info-header">
          <div className="info-badge">
            <AlertCircle size={16} />
            <span>Registration Portal</span>
          </div>
          
          <h1 className="info-title">
            Registrations <span className="gradient-text">Closed</span>
          </h1>
          
          <p className="info-subtitle">
            Thank you for your interest in our hackathon!
          </p>
        </div>

        {/* Form Container */}
        <div className="form-container">
          <div className="closed-message">
            <div className="closed-icon">
              <AlertCircle size={64} />
            </div>
            <h2>Registrations are now closed</h2>
            <p>We appreciate your interest in participating in our hackathon. Unfortunately, registration is no longer open at this time.</p>
            <p>Please check back later for updates on future events or visit our social media channels for announcements.</p>
            <button 
              onClick={() => navigate('/')}
              className="btn-home"
            >
              <Home size={18} />
              Return to Home
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Info;

