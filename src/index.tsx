import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";

const root = createRoot(document.getElementById("root") as HTMLElement);


root.render(
  <React.StrictMode>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </React.StrictMode>
);


reportWebVitals();
