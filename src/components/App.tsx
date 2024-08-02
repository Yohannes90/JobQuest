import "../styles/App.css";
import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import LoginPage from "./LoginPage";

// Lazy load components for improved performance
const Hero = lazy(() => import("./Hero"));
const AboutUs = lazy(() => import("./Vision_Mission"));
const Services = lazy(() => import("./Services"));
const Testimonials = lazy(() => import("./Testimonials"));
const ContactUs = lazy(() => import("./ContactUs"));
const Partners = lazy(() => import("./Partners"));
const JobApplicationForm = lazy(() => import("./JobApplicationForm"));
const JobPostForm = lazy(() => import("./JobPostForm"));
const AdminDashboard = lazy(() => import("./AdminDashboard"));
const JobsDashboard = lazy(() => import("./JobsDashboard"));
const BlogDashboard = lazy(() => import("./BlogDashboard"));

/**
 * Main application component.
 * Renders the entire application structure including navigation, lazy-loaded routes,
 * and a footer.
 *
 * @returns JSX element representing the entire application layout.
 */
const App: React.FC = () => {
  /**
   * Base path for the router
   * @type {string}
   */
  const basePath = import.meta.env.VITE_BASE_PATH || "";
  const token = localStorage.getItem("token");

  return (
    <Router basename={basePath}>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <AboutUs />
                    <Services />
                    <Partners />
                    <Testimonials />
                    <ContactUs />
                  </>
                }
              />
              {/* additional routes here */}
              <Route
                path="/job-application-form"
                element={<JobApplicationForm />}
              />
              <Route path="/job-post-form" element={<JobPostForm />} />
              <Route path="/login" element={<LoginPage />} />
              {/* <Route
                path="/admin"
                element={token ? <AdminDashboard /> : <Navigate to="/login" />}
              /> */}
              {/* <Route path="/admin" Component={AdminDashboard} /> */}
              <Route path="/admin" Component={AdminDashboard} />
              <Route path="/jobs-dashboard" Component={JobsDashboard} />
              <Route path="/blog-dashboard" Component={BlogDashboard} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
