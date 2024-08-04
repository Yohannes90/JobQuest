import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Example: Create a new user
async function createUser() {
  const newUser = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'securepassword',
      role: 'JOBS_ADMIN', // Or 'ADMIN' / 'BLOG_ADMIN'
    },
  });
  console.log('User created:', newUser);
}

// Example: Create a new job application
async function createJobApplication() {
  const newJobApplication = await prisma.jobApplication.create({
    data: {
      name: 'Jane Doe',
      age: 25,
      gender: 'female', // Or 'male' / 'NA'
      phone: '123-456-7890',
      email: 'jane.doe@example.com',
      about: 'About me text',
      motive: 'Motivation text',
      interest: 'software_development', // Or other interests
      cv: 'link_to_cv',
      portfolio: 'link_to_portfolio',
    },
  });
  console.log('Job application created:', newJobApplication);
}

// Example: Create a new job posting
async function createJobPosting() {
  const newJobPosting = await prisma.jobPosting.create({
    data: {
      jobTitle: 'Software Developer',
      companyName: 'Tech Corp',
      location: 'New York',
      jobType: 'full_time', // Or other job types
      jobCategory: 'software_development', // Or other job categories
      description: 'Job description',
      workArrangement: 'hybrid', // Or 'in_person' / 'remote'
      experienceLevel: 'junior', // Or other experience levels
      applicationDeadline: new Date('2024-12-31'),
      contactEmail: 'jobs@techcorp.com',
    },
  });
  console.log('Job posting created:', newJobPosting);
}

// Example: Subscribe to job newsletter
async function subscribeToNewsletter() {
  const newSubscriber = await prisma.jobNewsletterSubscribers.create({
    data: {
      email: 'subscriber@example.com',
    },
  });
  console.log('Subscribed to newsletter:', newSubscriber);
}

// Call the functions to execute the examples
async function main() {
  await createUser();
  await createJobApplication();
  await createJobPosting();
  await subscribeToNewsletter();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
