# Backend API Setup for Hackathon Registration

This backend server handles registration data storage in MongoDB.

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas account)

## Setup Instructions

### 1. Navigate to server directory
```bash
cd server
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
```bash
# Copy the example env file
cp .env.example .env

# Edit .env with your MongoDB connection string
```

#### For Local MongoDB:
```
MONGODB_URI=mongodb://localhost:27017/hackathon_adcet
PORT=5000
```

#### For MongoDB Atlas:
1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Get your connection string
3. Replace `<username>`, `<password>`, and `<cluster>` with your credentials:
```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/hackathon_adcet?retryWrites=true&w=majority
```

### 4. Start the server

Development mode (with auto-restart):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/registration` | Submit new registration |
| GET | `/api/registrations` | Get all registrations (Admin) |
| GET | `/api/registration/:id` | Get registration by ID |
| GET | `/api/registration/status/:email` | Check status by email |
| PUT | `/api/registration/:id/status` | Update status (Admin) |
| DELETE | `/api/registration/:id` | Delete registration (Admin) |

## File Uploads

- Documents are stored in the `uploads/` folder
- Accepted formats: JPG, PNG, PDF
- Maximum file size: 5MB

## Running Frontend & Backend Together

### Terminal 1 (Backend):
```bash
cd server
npm run dev
```

### Terminal 2 (Frontend):
```bash
# From project root
npm run dev
```

The frontend will proxy API requests to the backend automatically through Vite's proxy configuration.

## Database Schema

```javascript
{
  name: String,           // Full name
  email: String,          // Email (unique)
  phone: String,          // Phone number
  governmentDocument: String,  // File path
  collegeId: String,      // File path
  projectTitle: String,   // Project name
  projectDescription: String,  // Project details
  projectTechStack: String,    // Technologies used
  projectGithubUrl: String,    // GitHub repo URL
  projectDemoUrl: String,      // Live demo URL
  status: String,         // pending/approved/rejected
  createdAt: Date,
  updatedAt: Date
}
```

## Deployment Notes

For production deployment:
1. Use environment variables for sensitive data
2. Set up proper CORS configuration
3. Use a reverse proxy (Nginx)
4. Enable HTTPS
5. Set up proper logging and monitoring
