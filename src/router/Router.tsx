import { Suspense, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

const App = lazy(() => import("../components/App"));
const Home = lazy(() => import("../pages/Home"));
const Jobs = lazy(() => import("../pages/Jobs"));

// from joe
const JobApplicationForm = lazy(() => import("../pages/JobApplicationForm"));
const JobPostForm = lazy(() => import("../pages/JobPostForm"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const AdminDashboard = lazy(() => import("./AdminDashboard"));
const JobsDashboard = lazy(() => import("./JobsDashboard"));
const BlogDashboard = lazy(() => import("./BlogDashboard"));

const token = localStorage.getItem("token");

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
      {
        path: "/job-post-form",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <JobPostForm />
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
          <Suspense fallback={<div>Loading...</div>}>
            <AdminDashboard />
          </Suspense>
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
        path: "/jobs-dashboard",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LoginPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default Router;
