import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // Create a new user
    const newUser = await prisma.user.create({
        data: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'securepassword',
        },
    });
    console.log('Created new user:', newUser);

    // Create a new job application
    const newJobApplication = await prisma.jobApplication.create({
        data: {
            name: 'Jane Smith',
            age: 25,
            gender: 'female',
            phone: '123-456-7890',
            email: 'jane.smith@example.com',
            about: 'A brief description about Jane Smith.',
            motive: 'Motivation for joining the internship program.',
            interest: 'website_software_development',
            cv: '/path/to/cv.pdf',
            portfolio: '/path/to/portfolio.pdf',
            links: 'https://github.com/jane_smith',
        },
    });
    console.log('Created new job application:', newJobApplication);
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
