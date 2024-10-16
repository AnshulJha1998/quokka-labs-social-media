import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorBoundary from "./utils/ErrorBoundry";
import { MainError } from "./components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<MainError />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
