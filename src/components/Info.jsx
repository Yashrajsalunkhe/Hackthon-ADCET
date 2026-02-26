import React, { useState, useEffect } from "react";
import { 
  Home, User, Mail, Phone, FileText,
  Upload, CheckCircle, AlertCircle, Building,
  Briefcase, Eye, Send, ArrowRight, ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "../hooks/useScrollToTop";
import Footer from "./Footer";
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
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const totalSteps = 4;

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
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, [fieldName]: "File size must be less than 5MB" }));
        return;
      }
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, [fieldName]: "Only JPG, PNG, or PDF files are allowed" }));
        return;
      }
      setFormData(prev => ({
        ...prev,
        [fieldName]: file,
        [`${fieldName}Name`]: file.name
      }));
      setErrors(prev => ({ ...prev, [fieldName]: "" }));
    }
  };

  // Validate current step
  const validateStep = (step) => {
    const newErrors = {};
    
    switch(step) {
      case 1: // Personal Information
        if (!formData.name.trim()) newErrors.name = "Name is required";
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
        break;
      
      case 2: // Documents
        if (!formData.governmentDocument) newErrors.governmentDocument = "Government document is required";
        if (!formData.collegeId) newErrors.collegeId = "College ID is required";
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
        break;
      
      case 4: // Project Review - Optional validations
        // No required fields for review step
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
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== "") {
          submitData.append(key, formData[key]);
        }
      });

      // API call to backend (MongoDB)
      const response = await fetch('/api/registration', {
        method: 'POST',
        body: submitData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
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
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step indicator component
  const StepIndicator = () => (
    <div className="step-indicator">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className={`step-item ${currentStep >= step ? 'active' : ''} ${currentStep === step ? 'current' : ''}`}>
          <div className="step-number">{step}</div>
          <div className="step-label">
            {step === 1 && "Personal Info"}
            {step === 2 && "Documents"}
            {step === 3 && "Project Overview"}
            {step === 4 && "Review"}
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
            <FileText size={16} />
            <span>Registration Portal</span>
          </div>
          
          <h1 className="info-title">
            Hackathon <span className="gradient-text">Registration</span>
          </h1>
          
          <p className="info-subtitle">
            Complete your registration by filling out all the required information below
          </p>
        </div>

        {/* Step Indicator */}
        <StepIndicator />

        {/* Form Container */}
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="form-step">
                <div className="step-header">
                  <User size={28} className="step-icon" />
                  <h2>Personal Information</h2>
                  <p>Please provide your basic details</p>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">
                      <User size={18} />
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <Mail size={18} />
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      <Phone size={18} />
                      Phone Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your 10-digit phone number"
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>


                </div>
              </div>
            )}

            {/* Step 2: Document Upload */}
            {currentStep === 2 && (
              <div className="form-step">
                <div className="step-header">
                  <FileText size={28} className="step-icon" />
                  <h2>Document Upload</h2>
                  <p>Upload your required documents for verification</p>
                </div>

                <div className="form-grid">
                  <div className="form-group file-upload">
                    <label>
                      <FileText size={18} />
                      Government Document <span className="required">*</span>
                    </label>
                    <p className="file-hint">Aadhar Card, PAN Card, Driving License, or Passport</p>
                    <div className={`upload-area ${errors.governmentDocument ? 'error' : ''}`}>
                      <input
                        type="file"
                        id="governmentDocument"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={(e) => handleFileChange(e, 'governmentDocument')}
                      />
                      <Upload size={32} />
                      <span>
                        {formData.governmentDocumentName || "Click to upload or drag and drop"}
                      </span>
                      <small>JPG, PNG or PDF (Max 5MB)</small>
                    </div>
                    {errors.governmentDocument && <span className="error-message">{errors.governmentDocument}</span>}
                    {formData.governmentDocumentName && (
                      <div className="file-selected">
                        <CheckCircle size={16} />
                        <span>{formData.governmentDocumentName}</span>
                      </div>
                    )}
                  </div>

                  <div className="form-group file-upload">
                    <label>
                      <Building size={18} />
                      College ID Card <span className="required">*</span>
                    </label>
                    <p className="file-hint">Valid college/university ID card</p>
                    <div className={`upload-area ${errors.collegeId ? 'error' : ''}`}>
                      <input
                        type="file"
                        id="collegeId"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={(e) => handleFileChange(e, 'collegeId')}
                      />
                      <Upload size={32} />
                      <span>
                        {formData.collegeIdName || "Click to upload or drag and drop"}
                      </span>
                      <small>JPG, PNG or PDF (Max 5MB)</small>
                    </div>
                    {errors.collegeId && <span className="error-message">{errors.collegeId}</span>}
                    {formData.collegeIdName && (
                      <div className="file-selected">
                        <CheckCircle size={16} />
                        <span>{formData.collegeIdName}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Project Overview */}
            {currentStep === 3 && (
              <div className="form-step">
                <div className="step-header">
                  <Briefcase size={28} className="step-icon" />
                  <h2>Project Overview</h2>
                  <p>Tell us about your hackathon project</p>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="projectCategory">
                      <Briefcase size={18} />
                      Project Category <span className="required">*</span>
                    </label>
                    <select
                      id="projectCategory"
                      name="projectCategory"
                      value={formData.projectCategory}
                      onChange={handleInputChange}
                      className={errors.projectCategory ? 'error' : ''}
                    >
                      <option value="">Select category</option>
                      <option value="software">Software</option>
                      <option value="hardware">Hardware</option>
                    </select>
                    {errors.projectCategory && <span className="error-message">{errors.projectCategory}</span>}
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="projectTitle">
                      <Briefcase size={18} />
                      Project Title <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="projectTitle"
                      name="projectTitle"
                      value={formData.projectTitle}
                      onChange={handleInputChange}
                      placeholder="Enter your project title"
                      className={errors.projectTitle ? 'error' : ''}
                    />
                    {errors.projectTitle && <span className="error-message">{errors.projectTitle}</span>}
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="projectDescription">
                      <FileText size={18} />
                      Project Description <span className="required">*</span>
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      placeholder="Describe your project in detail (minimum 50 characters)"
                      rows={5}
                      className={errors.projectDescription ? 'error' : ''}
                    />
                    <div className="char-count">
                      {formData.projectDescription.length}/50 characters minimum
                    </div>
                    {errors.projectDescription && <span className="error-message">{errors.projectDescription}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="projectTechStack">
                      <FileText size={18} />
                      Technology Stack <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="projectTechStack"
                      name="projectTechStack"
                      value={formData.projectTechStack}
                      onChange={handleInputChange}
                      placeholder="e.g., React, Node.js, MongoDB"
                      className={errors.projectTechStack ? 'error' : ''}
                    />
                    {errors.projectTechStack && <span className="error-message">{errors.projectTechStack}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="projectGithubUrl">
                      <FileText size={18} />
                      GitHub Repository URL
                    </label>
                    <input
                      type="url"
                      id="projectGithubUrl"
                      name="projectGithubUrl"
                      value={formData.projectGithubUrl}
                      onChange={handleInputChange}
                      placeholder="https://github.com/username/repo"
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="projectDemoUrl">
                      <FileText size={18} />
                      Demo/Live URL
                    </label>
                    <input
                      type="url"
                      id="projectDemoUrl"
                      name="projectDemoUrl"
                      value={formData.projectDemoUrl}
                      onChange={handleInputChange}
                      placeholder="https://your-demo-url.com"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Project Review */}
            {currentStep === 4 && (
              <div className="form-step">
                <div className="step-header">
                  <Eye size={28} className="step-icon" />
                  <h2>Review Your Information</h2>
                  <p>Please verify all your details before final submission</p>
                </div>

                <div className="review-container">
                  <div className="review-section">
                    <h3><User size={20} /> Personal Information</h3>
                    <div className="review-grid">
                      <div className="review-item">
                        <span className="review-label">Name:</span>
                        <span className="review-value">{formData.name || "Not provided"}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Email:</span>
                        <span className="review-value">{formData.email || "Not provided"}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Phone:</span>
                        <span className="review-value">{formData.phone || "Not provided"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="review-section">
                    <h3><FileText size={20} /> Documents</h3>
                    <div className="review-grid">
                      <div className="review-item">
                        <span className="review-label">Government Document:</span>
                        <span className="review-value">
                          {formData.governmentDocumentName ? (
                            <span className="file-status success">
                              <CheckCircle size={14} /> {formData.governmentDocumentName}
                            </span>
                          ) : (
                            <span className="file-status error">
                              <AlertCircle size={14} /> Not uploaded
                            </span>
                          )}
                        </span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">College ID:</span>
                        <span className="review-value">
                          {formData.collegeIdName ? (
                            <span className="file-status success">
                              <CheckCircle size={14} /> {formData.collegeIdName}
                            </span>
                          ) : (
                            <span className="file-status error">
                              <AlertCircle size={14} /> Not uploaded
                            </span>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="review-section">
                    <h3><Briefcase size={20} /> Project Details</h3>
                    <div className="review-grid">
                      <div className="review-item">
                        <span className="review-label">Project Category:</span>
                        <span className="review-value">
                          {formData.projectCategory ? (
                            <span className="category-display">
                              {formData.projectCategory === 'software' ? '💻 Software' : '⚙️ Hardware'}
                            </span>
                          ) : "Not selected"}
                        </span>
                      </div>
                      <div className="review-item full-width">
                        <span className="review-label">Project Title:</span>
                        <span className="review-value">{formData.projectTitle || "Not provided"}</span>
                      </div>
                      <div className="review-item full-width">
                        <span className="review-label">Description:</span>
                        <span className="review-value description">{formData.projectDescription || "Not provided"}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Tech Stack:</span>
                        <span className="review-value">{formData.projectTechStack || "Not provided"}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">GitHub URL:</span>
                        <span className="review-value">
                          {formData.projectGithubUrl ? (
                            <a href={formData.projectGithubUrl} target="_blank" rel="noopener noreferrer">
                              View Repository
                            </a>
                          ) : "Not provided"}
                        </span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Demo URL:</span>
                        <span className="review-value">
                          {formData.projectDemoUrl ? (
                            <a href={formData.projectDemoUrl} target="_blank" rel="noopener noreferrer">
                              View Demo
                            </a>
                          ) : "Not provided"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}



            {/* Navigation Buttons */}
            <div className="form-navigation">
              {currentStep > 1 && (
                <button type="button" className="btn-prev" onClick={prevStep}>
                  <ArrowLeft size={18} />
                  Previous
                </button>
              )}
              
              {currentStep < totalSteps ? (
                <button type="button" className="btn-next" onClick={nextStep}>
                  Next Step
                  <ArrowRight size={18} />
                </button>
              ) : (
                <button type="submit" className="btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Submit Registration
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Submit Status Messages */}
            {submitStatus === 'success' && (
              <div className="status-message success">
                <CheckCircle size={24} />
                <div>
                  <h4>Registration Successful!</h4>
                  <p>Your registration has been submitted successfully. You will receive a confirmation email shortly.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-message error">
                <AlertCircle size={24} />
                <div>
                  <h4>Submission Failed</h4>
                  <p>There was an error submitting your registration. Please try again or contact support.</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Info;
