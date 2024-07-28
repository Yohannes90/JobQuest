import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import Router from './router/Router.tsx'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={Router} />
);
