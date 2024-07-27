import "../styles/App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "../pages/Home";

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
                    <Home />
                  </>
                }
              />
              <Route path="/Jobs"></Route>
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
