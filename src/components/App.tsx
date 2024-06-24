import "../styles/App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

// Lazy load components for improved performance
const Hero = lazy(() => import("./Hero"));
const AboutUs = lazy(() => import("./Vision_Mission"));
const Services = lazy(() => import("./Services"));
const Testimonials = lazy(() => import("./Testimonials"));
const ContactUs = lazy(() => import("./ContactUs"));
const Partners = lazy(() => import("./Partners"));

const App: React.FC = () => {
  const basePath = import.meta.env.VITE_BASE_PATH || "";
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
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
