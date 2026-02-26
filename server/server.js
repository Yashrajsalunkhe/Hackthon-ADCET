// Backend Server for Hackathon Registration
// This file sets up an Express server with MongoDB integration

const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hackathon_adcet';

mongoose.connect(MONGODB_URI)
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// Registration Schema
const registrationSchema = new mongoose.Schema({
  // Personal Information
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  
  // Documents (stored as file paths)
  governmentDocument: { type: String, required: true },
  collegeId: { type: String, required: true },
  
  // Project Details
  projectTitle: { type: String, required: true },
  projectDescription: { type: String, required: true },
  projectTechStack: { type: String, required: true },
  projectGithubUrl: { type: String },
  projectDemoUrl: { type: String },
  
  // Team Members
  teamMembers: [{
    name:  { type: String },
    email: { type: String },
    phone: { type: String },
    governmentDocument: { type: String },
    collegeId: { type: String },
  }],
  
  // Registration Status
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  
  // Timestamps
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Registration = mongoose.model('Registration', registrationSchema);

// File Upload Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPG, PNG, and PDF are allowed.'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 50 * 1024 // 50KB limit
  }
});

// API Routes

// POST: Create new registration
app.post('/api/registration', 
  upload.fields([
    { name: 'governmentDocument', maxCount: 1 },
    { name: 'collegeId', maxCount: 1 },
    { name: 'memberGovDoc_0', maxCount: 1 },
    { name: 'memberGovDoc_1', maxCount: 1 },
    { name: 'memberGovDoc_2', maxCount: 1 },
    { name: 'memberGovDoc_3', maxCount: 1 },
    { name: 'memberCollegeId_0', maxCount: 1 },
    { name: 'memberCollegeId_1', maxCount: 1 },
    { name: 'memberCollegeId_2', maxCount: 1 },
    { name: 'memberCollegeId_3', maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const {
        name, email, phone,
        projectTitle, projectDescription, projectTechStack,
        projectGithubUrl, projectDemoUrl, teamMembers
      } = req.body;

      // Parse teamMembers if it's a JSON string
      let parsedTeamMembers = [];
      if (teamMembers) {
        try {
          parsedTeamMembers = typeof teamMembers === 'string' ? JSON.parse(teamMembers) : teamMembers;
        } catch (e) {
          parsedTeamMembers = [];
        }
      }

      // Check if email already registered
      const existingRegistration = await Registration.findOne({ email });
      if (existingRegistration) {
        return res.status(400).json({ 
          success: false, 
          message: 'Email already registered' 
        });
      }

      // Get file paths
      const governmentDocPath = req.files['governmentDocument'] 
        ? req.files['governmentDocument'][0].path 
        : null;
      const collegeIdPath = req.files['collegeId'] 
        ? req.files['collegeId'][0].path 
        : null;

      // Attach document file paths to each team member
      const teamMembersWithDocs = parsedTeamMembers.map((member, i) => {
        const memberGovPath = req.files[`memberGovDoc_${i}`]
          ? req.files[`memberGovDoc_${i}`][0].path
          : null;
        const memberColPath = req.files[`memberCollegeId_${i}`]
          ? req.files[`memberCollegeId_${i}`][0].path
          : null;
        return {
          name: member.name,
          email: member.email,
          phone: member.phone,
          governmentDocument: memberGovPath,
          collegeId: memberColPath,
        };
      });

      // Create new registration
      const registration = new Registration({
        name,
        email,
        phone,
        governmentDocument: governmentDocPath,
        collegeId: collegeIdPath,
        projectTitle,
        projectDescription,
        projectTechStack,
        projectGithubUrl,
        projectDemoUrl,
        teamMembers: teamMembersWithDocs,
      });

      await registration.save();

      res.status(201).json({
        success: true,
        message: 'Registration successful',
        data: {
          id: registration._id,
          name: registration.name,
          email: registration.email,
          status: registration.status
        }
      });
    } catch (error) {
      console.error('Registration Error:', error);
      res.status(500).json({
        success: false,
        message: 'Registration failed',
        error: error.message
      });
    }
  }
);

// GET: Get all registrations (Admin)
app.get('/api/registrations', async (req, res) => {
  try {
    const registrations = await Registration.find()
      .sort({ createdAt: -1 })
      .select('-governmentDocument -collegeId'); // Exclude sensitive file paths

    res.json({
      success: true,
      count: registrations.length,
      data: registrations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch registrations',
      error: error.message
    });
  }
});

// GET: Get single registration by ID
app.get('/api/registration/:id', async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id);
    
    if (!registration) {
      return res.status(404).json({
        success: false,
        message: 'Registration not found'
      });
    }

    res.json({
      success: true,
      data: registration
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch registration',
      error: error.message
    });
  }
});

// GET: Check registration status by email
app.get('/api/registration/status/:email', async (req, res) => {
  try {
    const registration = await Registration.findOne({ email: req.params.email })
      .select('name email status projectTitle createdAt');
    
    if (!registration) {
      return res.status(404).json({
        success: false,
        message: 'No registration found with this email'
      });
    }

    res.json({
      success: true,
      data: registration
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to check status',
      error: error.message
    });
  }
});

// PUT: Update registration status (Admin)
app.put('/api/registration/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    
    const registration = await Registration.findByIdAndUpdate(
      req.params.id,
      { 
        status,
        updatedAt: Date.now()
      },
      { new: true }
    );

    if (!registration) {
      return res.status(404).json({
        success: false,
        message: 'Registration not found'
      });
    }

    res.json({
      success: true,
      message: 'Status updated successfully',
      data: registration
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update status',
      error: error.message
    });
  }
});

// DELETE: Delete registration (Admin)
app.delete('/api/registration/:id', async (req, res) => {
  try {
    const registration = await Registration.findByIdAndDelete(req.params.id);
    
    if (!registration) {
      return res.status(404).json({
        success: false,
        message: 'Registration not found'
      });
    }

    res.json({
      success: true,
      message: 'Registration deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete registration',
      error: error.message
    });
  }
});

// Serve uploaded files (for admin viewing)
app.use('/uploads', express.static('uploads'));

// Create uploads directory if it doesn't exist
const fs = require('fs');
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
});

module.exports = app;
