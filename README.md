# JobQuest

**JobQuest** is a full-stack web application designed to streamline the job search and recruitment process. The platform connects job seekers with employers, featuring job listings, applications management, and an integrated blog section for career-related content.

## 🚀 Features

### Job Management
- **Job Listings**: Browse available job opportunities with advanced filtering
  - Filter by job category, experience level, work arrangement, and job type
  - Search functionality for quick job discovery
  - Detailed job descriptions with company information
- **Job Posting**: Employers can post job openings with comprehensive details
- **Job Applications**: Seamless application process with CV and portfolio uploads
- **Newsletter Subscription**: Stay updated with latest job postings

### Blog Platform
- **Blog Posts**: Career advice, industry insights, and educational content
- **Content Management**: Rich text editor for creating and managing blog posts
- **Category System**: Organized content across technology, business, lifestyle, education, health, and entertainment
- **Newsletter**: Subscribe to blog updates

### Admin Panel
- **Multi-Role Authentication**: Admin, Jobs Admin, and Blog Admin roles
- **Admin Dashboard**: Comprehensive management interface
- **Jobs Dashboard**: Manage job postings and applications
- **Blog Dashboard**: Create, edit, and manage blog content

### User Experience
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS for a clean, professional look
- **Interactive Components**: Smooth animations with AOS library
- **Contact Form**: Integrated with EmailJS for inquiries

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **CKEditor 5** - Rich text editor for blog content
- **React Leaflet** - Interactive maps
- **Font Awesome** - Icon library
- **React Toastify** - Notifications
- **AOS** - Scroll animations

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **Prisma ORM** - Database management
- **MySQL** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **Express Session** - Session management

## 📋 Prerequisites

- Node.js (v16 or higher)
- MySQL database
- npm or yarn package manager

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd JobQuest
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="mysql://user:password@localhost:3306/jobquest"
   SESSION_SECRET="your-session-secret"
   JWT_SECRET="your-jwt-secret"
   ```

5. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

6. **Create admin user** (optional)
   ```bash
   node createUser.js
   ```

## 🚀 Running the Application

### Development Mode

1. **Start the backend server**
   ```bash
   node server.js
   ```
   Backend runs on `http://localhost:3000`

2. **Start the frontend dev server**
   ```bash
   npm run dev
   ```
   Frontend runs on `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
JobQuest/
├── src/
│   ├── components/       # React components
│   │   ├── jobs/        # Job listing and posting components
│   │   ├── blogs/       # Blog components
│   │   ├── landingpage_content/  # Homepage sections
│   │   └── pop_ups/     # Notification components
│   ├── pages/           # Page components
│   ├── auth/            # Authentication hooks
│   ├── service/         # API service functions
│   └── styles/          # CSS files
├── backend/             # Backend package configuration
├── prisma/              # Database schema and migrations
├── public/              # Static assets
├── uploads/             # User uploaded files (CVs, portfolios)
└── server.js            # Express server
```

## 🗄️ Database Schema

The application uses Prisma ORM with the following main models:

- **User**: Admin and content manager accounts
- **JobPosting**: Job opportunities with details
- **JobApplication**: Submitted applications
- **Blog**: Blog posts with author relations
- **newsletterSubscribers**: Email subscriptions

## 🔐 Authentication & Authorization

- JWT-based authentication
- Three user roles:
  - `ADMIN`: Full system access
  - `JOBS_ADMIN`: Manage jobs and applications
  - `BLOG_ADMIN`: Manage blog content
- Session management with Express Session
- Protected routes for admin panels

## 📝 Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Contact

For questions or support, please use the contact form on the website or reach out to the development team.

---

Built with ❤️ using React, TypeScript, and Express
