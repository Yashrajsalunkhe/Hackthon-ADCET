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

let cached = global._mongoConnection;
if (!cached) cached = global._mongoConnection = { conn: null, promise: null };

async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then(m => m);
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
  projectTitle:       { type: String, required: true },
  projectDescription: { type: String, required: true },
  projectTechStack:   { type: String, required: true },
  projectGithubUrl:   { type: String },
  projectDemoUrl:     { type: String },

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

// POST /api/registration  — create registration
app.post(
  '/api/registration',
  upload.fields([
    { name: 'governmentDocument', maxCount: 1 },
    { name: 'collegeId',          maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      await connectDB();

      const {
        name, email, phone,
        projectTitle, projectDescription, projectTechStack,
        projectGithubUrl, projectDemoUrl,
      } = req.body;

      const existing = await Registration.findOne({ email });
      if (existing) {
        return res.status(400).json({ success: false, message: 'Email already registered' });
      }

      const govFile = req.files?.governmentDocument?.[0];
      const colFile = req.files?.collegeId?.[0];

      if (!govFile || !colFile) {
        return res.status(400).json({ success: false, message: 'Both documents are required' });
      }

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
        projectTitle, projectDescription, projectTechStack,
        projectGithubUrl, projectDemoUrl,
      });

      await registration.save();

      res.status(201).json({
        success: true,
        message: 'Registration successful',
        data: { id: registration._id, name: registration.name, email: registration.email, status: registration.status },
      });
    } catch (err) {
      console.error('Registration Error:', err);
      res.status(500).json({ success: false, message: 'Registration failed', error: err.message });
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
