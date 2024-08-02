import express, { json, urlencoded } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import multer from 'multer';
import bcrypt from 'bcryptjs';
import session from 'express-session';

const app = express();
const prisma = new PrismaClient();
const upload = multer({ dest: 'uploads/' });

app.use(json());
app.use(cors({
  origin: 'http://localhost:5173', // frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Allow credentials
}));
app.use(urlencoded({ extended: true }));

// Session middleware
app.use(session({
  secret: 'your_session_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true if using https
}));

// User Registration Endpoint
app.post('/api/register', async (req, res) => {
  const { name, email, password, role = 'JOBS_ADMIN' } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Database error', details: error.message });
  }
});

// User Login Endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  console.log("Received login request:", req.body);
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Save user information in session
    req.session.userId = user.id;
    req.session.role = user.role;

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Database error', details: error.message });
  }
});

// Endpoint to get user role
app.get('/api/role', (req, res) => {
  if (req.session.role) {
    res.json({ role: req.session.role });
  } else {
    res.status(401).json({ error: 'Not authenticated' });
  }
});

// User Logout Endpoint
app.post('/api/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Logout failed', details: err.message });
    }
    res.status(200).json({ message: 'Logged out successfully' });
  });
});

// Session-based Middleware to Protect Routes
const authenticateSession = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Access denied' });
  }

  // Pass the user role from session to the request object
  req.user = {
    id: req.session.userId,
    role: req.session.role
  };

  next();
};

// Role-based Middleware
const checkRole = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ error: 'Access denied' });
  }
  next();
};

// Admin Dashboard
app.get('/admin', authenticateSession, checkRole(['ADMIN']), (req, res) => {
  res.status(200).json({ message: 'Welcome to the admin dashboard' });
});

// Jobs Admin Dashboard
app.get('/jobs-dashboard', authenticateSession, checkRole(['ADMIN', 'JOBS_ADMIN']), (req, res) => {
  res.status(200).json({ message: 'Welcome to the Jobs Admin dashboard' });
});

// Blog Admin Dashboard
app.get('/blog-dashboard', authenticateSession, checkRole(['ADMIN', 'BLOG_ADMIN']), (req, res) => {
  res.status(200).json({ message: 'Welcome to the Blog Admin dashboard' });
});

// Job Application Endpoint
app.post('/api/submit-job-application', upload.single('cv'), async (req, res) => {
  const { name, age, gender, phone, email, about, motive, interest, portfolio } = req.body;
  const cv = req.file ? req.file.path : null;

  try {
    await prisma.jobApplication.create({
      data: {
        name,
        age: parseInt(age),
        gender,
        phone,
        email,
        about,
        motive,
        interest,
        cv,
        portfolio,
      },
    });
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

// Fetch all job applications
app.get('/api/job-applications', async (req, res) => {
  try {
    const jobApplications = await prisma.jobApplication.findMany();
    res.status(200).json(jobApplications);
  } catch (error) {
    console.error('Error fetching job applications:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
});

// Delete a job application
app.delete('/api/job-applications/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.jobApplication.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: "Job application deleted successfully" });
  } catch (error) {
    console.error('Error deleting job application:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
});

// CRUD Endpoints for Users
// Create a new user
app.post('/api/users', async (req, res) => {
  const { name, email, password, role = 'JOBS_ADMIN' } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Database error', details: error.message });
  }
});

// Read all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Database error', details: error.message });
  }
});

// Update a user by ID
app.put('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;

  // Hash the password if it's being updated
  const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;

  try {
    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Database error', details: error.message });
  }
});

// Delete a user by ID
app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Database error', details: error.message });
  }
});

// Job Posting Endpoint
app.post('/api/submit-job-posting', async (req, res) => {
  const {
    jobTitle,
    companyName,
    location,
    jobType,
    jobCategory,
    description,
    workArrangement,
    experienceLevel,
    applicationDeadline,
    contactEmail
  } = req.body;

  // Log the request body to verify the data
  console.log("Received data:", req.body);

  try {
    await prisma.jobPosting.create({
      data: {
        jobTitle: jobTitle,
        companyName: companyName,
        location: location,
        jobType: jobType,
        jobCategory: jobCategory,
        description: description,
        workArrangement: workArrangement,
        experienceLevel: experienceLevel,
        applicationDeadline: applicationDeadline ? new Date(applicationDeadline) : null,
        contactEmail: contactEmail,
      },
    });
    res.status(201).json({ message: "Job posting submitted successfully" });
  } catch (error) {
    console.error('Error creating job posting:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
});

// Fetch all job postings
app.get('/api/job-postings', async (req, res) => {
  try {
    const jobPostings = await prisma.jobPosting.findMany();
    res.status(200).json(jobPostings);
  } catch (error) {
    console.error('Error fetching job postings:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
});

// PUT to update an existing job posting
app.put('/api/job-postings/:id', async (req, res) => {
  const { id } = req.params;
  const {
    jobTitle,
    companyName,
    location,
    jobType,
    jobCategory,
    description,
    workArrangement,
    experienceLevel,
    applicationDeadline,
    contactEmail
  } = req.body;

  try {
    const updatedJob = await prisma.jobPosting.update({
      where: { id: parseInt(id) },
      data: {
        jobTitle,
        companyName,
        location,
        jobType,
        jobCategory,
        description,
        workArrangement,
        experienceLevel,
        applicationDeadline: applicationDeadline ? new Date(applicationDeadline) : null,
        contactEmail,
      },
    });
    res.status(200).json({ message: "Job posting updated successfully", jobPosting: updatedJob });
  } catch (error) {
    console.error('Error updating job posting:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
});

// Delete a job posting by ID
app.delete('/api/job-postings/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.jobPosting.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: "Job posting deleted successfully" });
  } catch (error) {
    console.error('Error deleting job posting:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
