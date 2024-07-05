import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./styles/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


/**
 * Entry point for the application rendering.
 * Uses ReactDOM.createRoot to render the <App /> component into the root element.
 *
 * @remarks
 * This setup ensures rendering with strict mode enabled for better development practice.
 *
 * @example
 * ReactDOM.createRoot(document.getElementById("root")!).render(
 *   <React.StrictMode>
 *     <App />
 *   </React.StrictMode>
 * );
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
