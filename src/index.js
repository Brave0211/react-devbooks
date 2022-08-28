import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/Authcontext";
import { LangProvider } from "./context/LangContext";
import { ThemeProvider } from "./context/Theme.Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <LangProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </LangProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
