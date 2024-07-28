import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const App = lazy(() => import("../components/App"));
const Home = lazy(() => import("../pages/Home"));
const Jobs = lazy(()=> import('../pages/Jobs'))

// const basePath = import.meta.env.VITE_BASE_PATH || "";
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
        )},{
        path: "/jobs",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Jobs />
          </Suspense>
        ),
      },
    ],
  },
]);

export default Router;

