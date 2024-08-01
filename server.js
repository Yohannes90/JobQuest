import express, { json, urlencoded } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import multer from "multer";
// import path from 'path';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import { skip } from "node:test";

const app = express();
const prisma = new PrismaClient();
const upload = multer({ dest: "uploads/" });

app.use(cors()); // Enable all CORS requests
app.use(json());
app.use(urlencoded({ extended: true }));

// User Registration Endpoint
app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Database error", details: error.message });
  }
});

// User Login Endpoint
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Received login request:", req.body);
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user.id }, "your_jwt_secret", {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Database error", details: error.message });
  }
});

// JWT Middleware to Protect Routes
const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }

  try {
    const verified = jwt.verify(token, "your_jwt_secret");
    req.user = verified;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

// Admin Dashboard
app.get("/admin", authenticateJWT, (req, res) => {
  // Admin dashboard logic
  res.status(200).json({ message: "Welcome to the admin dashboard" });
});

// Job Application Endpoint
app.post(
  "/api/submit-job-application",
  upload.single("cv"),
  async (req, res) => {
    const {
      name,
      age,
      gender,
      phone,
      email,
      about,
      motive,
      interest,
      portfolio,
    } = req.body;
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
      res.status(500).json({ error: "Database error" });
    }
  }
);

// Fetch all job applications
app.get("/api/job-applications", async (req, res) => {
  try {
    const jobApplications = await prisma.jobApplication.findMany();
    res.status(200).json(jobApplications);
  } catch (error) {
    console.error("Error fetching job applications:", error);
    res.status(500).json({ error: "Database error", details: error.message });
  }
});

// Delete a job application
app.delete("/api/job-applications/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.jobApplication.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: "Job application deleted successfully" });
  } catch (error) {
    console.error("Error deleting job application:", error);
    res.status(500).json({ error: "Database error", details: error.message });
  }
});

// Job Posting Endpoint
app.post("/api/submit-job-posting", async (req, res) => {
  const {
    jobTitle,
    companyName,
    location,
    jobType,
    salaryRange,
    description,
    requirements,
    applicationDeadline,
    contactEmail,
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
        salaryRange: salaryRange ? salaryRange : null,
        description: description,
        requirements: requirements,
        applicationDeadline: applicationDeadline
          ? new Date(applicationDeadline)
          : null,
        contactEmail: contactEmail,
      },
    });
    res.status(201).json({ message: "Job posting submitted successfully" });
  } catch (error) {
    console.error("Error creating job posting:", error);
    res.status(500).json({ error: "Database error", details: error.message });
  }
});

// Fetch all job postings
app.get("/api/job-postings", async (req, res) => {
  const { page = 1, limit = 20, query = "" } = req.query;
  const pageNumber = parseInt(page);
  const pageSize = parseInt(limit);
  const searchQuery = query;
  try {
    const jobPostings = await prisma.jobPosting.findMany({
      skip: (pageNumber - 1) * pageSize,
      take: pageSize,
      where: {
        OR: [{
          jobTitle: { contains: searchQuery, mode : "insensitive"},
          //if you want to add more functionality to the search method based on other criteria
        }]
      }
    });
    res.status(200).json(jobPostings);
  } catch (error) {
    console.error("Error fetching job postings:", error);
    res.status(500).json({ error: "Database error", details: error.message });
  }
});

// Endpoint to update a job posting
app.put("/api/job-postings/:id", async (req, res) => {
  const { id } = req.params;
  const {
    jobTitle,
    companyName,
    location,
    jobType,
    salaryRange,
    description,
    requirements,
    applicationDeadline,
    contactEmail,
  } = req.body;

  try {
    const updatedJobPosting = await prisma.jobPosting.update({
      where: { id: parseInt(id) },
      data: {
        jobTitle: jobTitle,
        companyName: companyName,
        location: location,
        jobType: jobType,
        salaryRange: salaryRange ? salaryRange : null,
        description: description,
        requirements: requirements,
        applicationDeadline: applicationDeadline
          ? new Date(applicationDeadline)
          : null,
        contactEmail: contactEmail,
      },
    });
    res
      .status(200)
      .json({ message: "Job posting updated successfully", updatedJobPosting });
  } catch (error) {
    console.error("Error updating job posting:", error);
    res.status(500).json({ error: "Database error", details: error.message });
  }
});

// Endpoint to delete a job posting
app.delete("/api/job-postings/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.jobPosting.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: "Job posting deleted successfully" });
  } catch (error) {
    console.error("Error deleting job posting:", error);
    res.status(500).json({ error: "Database error", details: error.message });
  }
});

// job newsletter notification

app.post("/api/subscribe", async (req, res) => {
  const { email } = req.body;

  try {
    const subscriber = await prisma.newsletterSubscriber.create({ data: { email } });
    res.status(201).json(subscriber);
  } catch (error) {
    res.status(500).json({ error: "Failed to subscribe", details: error.message });
  }
});

app.post("/api/unsubscribe", async (req, res) => {
  const { email } = req.body;

  try {
    await prisma.newsletterSubscriber.delete({ where: { email } });
    res.status(200).json({ message: "Unsubscribed successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to unsubscribe", details: error.message });
  }
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
