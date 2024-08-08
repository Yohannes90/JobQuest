import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import useAuth from "../auth/useAuth";
import "../styles/App.css";

const Home = lazy(() => import("../pages/Home"));
const Jobs = lazy(() => import("../pages/Jobs"));
const JobApplicationForm = lazy(() => import("../pages/JobApplicationForm"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const AdminDashboard = lazy(() => import("../pages/AdminDashboard"));
const JobsDashboard = lazy(() => import("../pages/JobsDashboard"));
const BlogDashboard = lazy(() => import("../pages/BlogDashboard"));

const App: React.FC = () => {
  const { isAuthenticated, role } = useAuth();

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  const Router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <AppLayout />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/jobs",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Jobs />
            </Suspense>
          ),
        },
        {
          path: "/job-application-form",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <JobApplicationForm />
            </Suspense>
          ),
        },
        {
          path: "/login",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <LoginPage />
            </Suspense>
          ),
        },
        {
          path: "/admin",
          element:
            isAuthenticated && role === "ADMIN" ? (
              <Suspense fallback={<div>Loading...</div>}>
                <AdminDashboard />
              </Suspense>
            ) : (
              <Navigate to="/login" />
            ),
        },
        {
          path: "/jobs-dashboard",
          element:
            isAuthenticated && role === "JOBS_ADMIN" ? (
              <Suspense fallback={<div>Loading...</div>}>
                <JobsDashboard />
              </Suspense>
            ) : (
              <Navigate to="/login" />
            ),
        },
        {
          path: "/blog-dashboard",
          element:
            isAuthenticated && role === "BLOGS_ADMIN" ? (
              <Suspense fallback={<div>Loading...</div>}>
                <BlogDashboard />
              </Suspense>
            ) : (
              <Navigate to="/login" />
            ),
        },
      ],
    },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Navbar />
        <RouterProvider router={Router} />
      </div>
      <Footer />
    </div>
  );
};

const AppLayout: React.FC = () => (
  <div>
    {/* <Navbar /> */}
    <Outlet />
    {/* <Footer /> */}
  </div>
);

export default App;
