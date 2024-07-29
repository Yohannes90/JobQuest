import express, { json, urlencoded } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import multer from 'multer';
// import path from 'path';

const app = express();
const prisma = new PrismaClient();
const upload = multer({ dest: 'uploads/' });

app.use(cors());  // Enable all CORS requests
app.use(json());
app.use(urlencoded({ extended: true }));

// Job Application Endpoint
app.post('/api/submit-job-application', upload.single('cv'), async (req, res) => {
  const { name, age, gender, phone, email, about, motive, interest, portfolio } = req.body;
  const cv = req.file ? req.file.path : null;

  try {
    const jobApplication = await prisma.jobApplication.create({
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




// Job Posting Endpoint
app.post('/api/submit-job-posting', async (req, res) => {
    const {
      jobTitle,
      companyName,
      location,
      jobType,
      salaryRange,
      description,
      requirements,
      applicationDeadline,
      contactEmail
    } = req.body;

    // Log the request body to verify the data
    console.log("Received data:", req.body);

    try {
      const jobPosting = await prisma.jobPosting.create({
        data: {
          jobTitle: jobTitle,
          companyName: companyName,
          location: location,
          jobType: jobType,
          salaryRange: salaryRange ? salaryRange : null,
          description: description,
          requirements: requirements,
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






// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
