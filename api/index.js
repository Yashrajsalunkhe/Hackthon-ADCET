// Serverless API for Hackathon Registration (Vercel)
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── MongoDB (connection caching for serverless) ───────────────────────────
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI environment variable is not set');
}

let cached = global._mongoConnection;
if (!cached) cached = global._mongoConnection = { conn: null, promise: null };

async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined. Please set it in Vercel environment variables.');
  }
  
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then(m => {
      console.log('✅ MongoDB connected successfully');
      return m;
    }).catch(err => {
      console.error('❌ MongoDB connection error:', err.message);
      throw err;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// ─── Schema ────────────────────────────────────────────────────────────────
const registrationSchema = new mongoose.Schema({
  // Personal Information
  name:  { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },

  // Documents stored as binary in MongoDB
  governmentDocument: {
    data:        { type: Buffer, required: true },
    contentType: { type: String, required: true },
    filename:    { type: String },
  },
  collegeId: {
    data:        { type: Buffer, required: true },
    contentType: { type: String, required: true },
    filename:    { type: String },
  },

  // Project Details
  projectCategory:    { type: String, enum: ['software', 'hardware'], required: true },
  projectTitle:       { type: String, required: true },
  projectDescription: { type: String, required: true },
  projectTechStack:   { type: String, required: true },
  projectGithubUrl:   { type: String },
  projectDemoUrl:     { type: String },

  // Team Members
  teamMembers: [{
    name:  { type: String },
    email: { type: String },
    phone: { type: String },
    governmentDocument: {
      data:        { type: Buffer },
      contentType: { type: String },
      filename:    { type: String },
    },
    collegeId: {
      data:        { type: Buffer },
      contentType: { type: String },
      filename:    { type: String },
    },
  }],

  // Registration Status
  status: {
    type:    String,
    enum:    ['pending', 'approved', 'rejected'],
    default: 'pending',
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Registration =
  mongoose.models.Registration ||
  mongoose.model('Registration', registrationSchema);

// ─── File Upload (memory — no disk on Vercel) ──────────────────────────────
const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (_req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
    allowed.includes(file.mimetype)
      ? cb(null, true)
      : cb(new Error('Only JPG, PNG and PDF files are allowed.'), false);
  },
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
});

// ─── Routes ───────────────────────────────────────────────────────────────

// Health check
app.get('/api', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Hackathon API is running',
    mongodb: MONGODB_URI ? 'configured' : 'not configured',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'API is healthy',
    mongodb: MONGODB_URI ? 'configured' : 'not configured'
  });
});

// POST /api/registration  — create registration
app.post(
  '/api/registration',
  upload.fields([
    { name: 'governmentDocument', maxCount: 1 },
    { name: 'collegeId',          maxCount: 1 },
    { name: 'memberGovDoc_0',     maxCount: 1 },
    { name: 'memberGovDoc_1',     maxCount: 1 },
    { name: 'memberGovDoc_2',     maxCount: 1 },
    { name: 'memberGovDoc_3',     maxCount: 1 },
    { name: 'memberCollegeId_0',  maxCount: 1 },
    { name: 'memberCollegeId_1',  maxCount: 1 },
    { name: 'memberCollegeId_2',  maxCount: 1 },
    { name: 'memberCollegeId_3',  maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      await connectDB();

      const {
        name, email, phone,
        projectCategory, projectTitle, projectDescription, projectTechStack,
        projectGithubUrl, projectDemoUrl, teamMembers,
      } = req.body;

      // Validate required fields
      if (!name || !email || !phone) {
        return res.status(400).json({ 
          success: false, 
          message: 'Name, email, and phone are required',
          missing: { name: !name, email: !email, phone: !phone }
        });
      }

      if (!projectCategory || !projectTitle || !projectDescription || !projectTechStack) {
        return res.status(400).json({ 
          success: false, 
          message: 'All project details are required',
          missing: { 
            projectCategory: !projectCategory, 
            projectTitle: !projectTitle, 
            projectDescription: !projectDescription, 
            projectTechStack: !projectTechStack 
          }
        });
      }

      // Parse teamMembers if it's a JSON string
      let parsedTeamMembers = [];
      if (teamMembers) {
        try {
          parsedTeamMembers = typeof teamMembers === 'string' ? JSON.parse(teamMembers) : teamMembers;
        } catch (e) {
          parsedTeamMembers = [];
        }
      }

      const existing = await Registration.findOne({ email });
      if (existing) {
        return res.status(400).json({ success: false, message: 'Email already registered' });
      }

      const govFile = req.files?.governmentDocument?.[0];
      const colFile = req.files?.collegeId?.[0];

      if (!govFile || !colFile) {
        return res.status(400).json({ success: false, message: 'Both documents are required' });
      }

      // Attach document files to each team member
      const teamMembersWithDocs = parsedTeamMembers.map((member, i) => {
        const memberGov = req.files?.[`memberGovDoc_${i}`]?.[0];
        const memberCol = req.files?.[`memberCollegeId_${i}`]?.[0];
        return {
          name: member.name,
          email: member.email,
          phone: member.phone,
          governmentDocument: memberGov ? {
            data: memberGov.buffer,
            contentType: memberGov.mimetype,
            filename: memberGov.originalname,
          } : undefined,
          collegeId: memberCol ? {
            data: memberCol.buffer,
            contentType: memberCol.mimetype,
            filename: memberCol.originalname,
          } : undefined,
        };
      });

      const registration = new Registration({
        name, email, phone,
        governmentDocument: {
          data:        govFile.buffer,
          contentType: govFile.mimetype,
          filename:    govFile.originalname,
        },
        collegeId: {
          data:        colFile.buffer,
          contentType: colFile.mimetype,
          filename:    colFile.originalname,
        },
        projectCategory, projectTitle, projectDescription, projectTechStack,
        projectGithubUrl, projectDemoUrl,
        teamMembers: teamMembersWithDocs,
      });

      await registration.save();

      res.status(201).json({
        success: true,
        message: 'Registration successful',
        data: { id: registration._id, name: registration.name, email: registration.email, status: registration.status },
      });
    } catch (err) {
      console.error('Registration Error Details:', {
        message: err.message,
        stack: err.stack,
        name: err.name,
        code: err.code
      });
      
      // Handle specific errors
      if (err.name === 'ValidationError') {
        return res.status(400).json({ 
          success: false, 
          message: 'Validation failed',
          error: err.message,
          details: Object.keys(err.errors).map(key => ({
            field: key,
            message: err.errors[key].message
          }))
        });
      }
      
      if (err.code === 11000) {
        return res.status(400).json({ 
          success: false, 
          message: 'Email already registered'
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: 'Registration failed',
        error: err.message,
        details: process.env.NODE_ENV === 'development' ? err.stack : undefined
      });
    }
  }
);

// GET /api/registrations  — all registrations (admin)
app.get('/api/registrations', async (req, res) => {
  try {
    await connectDB();
    const registrations = await Registration.find()
      .sort({ createdAt: -1 })
      .select('-governmentDocument -collegeId'); // don't send binary blobs in list

    res.json({ success: true, count: registrations.length, data: registrations });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch registrations', error: err.message });
  }
});

// GET /api/registration/:id  — single registration
app.get('/api/registration/:id', async (req, res) => {
  try {
    await connectDB();
    const registration = await Registration.findById(req.params.id)
      .select('-governmentDocument.data -collegeId.data'); // meta only, not raw bytes

    if (!registration)
      return res.status(404).json({ success: false, message: 'Registration not found' });

    res.json({ success: true, data: registration });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch registration', error: err.message });
  }
});

// GET /api/registration/status/:email  — check status by email
app.get('/api/registration/status/:email', async (req, res) => {
  try {
    await connectDB();
    const registration = await Registration.findOne({ email: req.params.email })
      .select('name email status projectTitle createdAt');

    if (!registration)
      return res.status(404).json({ success: false, message: 'No registration found with this email' });

    res.json({ success: true, data: registration });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to check status', error: err.message });
  }
});

// GET /api/registration/:id/file/:field  — serve a stored document (gov or college)
app.get('/api/registration/:id/file/:field', async (req, res) => {
  try {
    await connectDB();
    const { id, field } = req.params;

    if (!['governmentDocument', 'collegeId'].includes(field))
      return res.status(400).json({ success: false, message: 'Invalid field' });

    const registration = await Registration.findById(id).select(field);
    if (!registration || !registration[field]?.data)
      return res.status(404).json({ success: false, message: 'File not found' });

    const file = registration[field];
    res.set('Content-Type', file.contentType);
    res.set('Content-Disposition', `inline; filename="${file.filename || field}"`);
    res.send(file.data);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to serve file', error: err.message });
  }
});

// PUT /api/registration/:id/status  — update status (admin)
app.put('/api/registration/:id/status', async (req, res) => {
  try {
    await connectDB();
    const { status } = req.body;

    const registration = await Registration.findByIdAndUpdate(
      req.params.id,
      { status, updatedAt: Date.now() },
      { new: true }
    ).select('-governmentDocument -collegeId');

    if (!registration)
      return res.status(404).json({ success: false, message: 'Registration not found' });

    res.json({ success: true, message: 'Status updated successfully', data: registration });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update status', error: err.message });
  }
});

// DELETE /api/registration/:id
app.delete('/api/registration/:id', async (req, res) => {
  try {
    await connectDB();
    const registration = await Registration.findByIdAndDelete(req.params.id);

    if (!registration)
      return res.status(404).json({ success: false, message: 'Registration not found' });

    res.json({ success: true, message: 'Registration deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to delete registration', error: err.message });
  }
});

// ─── Export for Vercel serverless ─────────────────────────────────────────
module.exports = app;
