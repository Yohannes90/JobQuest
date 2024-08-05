import { Suspense, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

const App = lazy(() => import("../components/App"));
const Home = lazy(() => import("../pages/Home"));
const Jobs = lazy(() => import("../pages/Jobs"));

// from joe
const JobApplicationForm = lazy(() => import("../pages/JobApplicationForm"));
const JobPostForm = lazy(() => import("../pages/JobPostForm"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const AdminDashboard = lazy(() => import("../pages/AdminDashboard"));
const JobsDashboard = lazy(() => import("../pages/JobsDashboard"));
const BlogDashboard = lazy(() => import("../pages/BlogDashboard"));

const { isAuthenticated, role } = useAuth();

if (isAuthenticated === null) {
  // Optionally, render a loading spinner or similar while checking authentication
  <div>Loading...</div>;
}

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
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
      // {
      //   path: "/job-post-form",
      //   element: (
      //     <Suspense fallback={<div>Loading...</div>}>
      //       <JobPostForm />
      //     </Suspense>
      //   ),
      // },
      {
        path: "/login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LoginPage />
          </Suspense>
        ),
      },
      /* {
        path: "/admin",
        element: token ? (
          <Suspense fallback={<div>Loading...</div>}>
            <AdminDashboard />
          </Suspense>
        ) : (
          <Navigate to="/login" />
        ),
      }, */
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

export default Router;
