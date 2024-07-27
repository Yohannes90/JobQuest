import "../styles/App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

// Lazy load components for improved performance
const Hero = lazy(() => import("./landingpage_content/Hero"));
const AboutUs = lazy(() => import("./landingpage_content/Vision_Mission"));
const Services = lazy(() => import("./landingpage_content/Services"));
const Testimonials = lazy(() => import("./landingpage_content/Testimonials"));
const ContactUs = lazy(() => import("./landingpage_content/ContactUs"));
const Partners = lazy(() => import("./landingpage_content/Partners"));

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
              <Route path="/Jobs" >
                
              </Route>
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
