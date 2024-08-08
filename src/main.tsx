import ReactDOM from "react-dom/client";
import "./styles/index.css";
import React from "react";
import App from "./components/App.tsx";

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
