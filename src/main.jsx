import React from 'react';
import ReactDOM from 'react-dom/client'
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { ShipsProvider } from "./contexts/ShipsContext.jsx";
import { ComponentsProvider } from "./contexts/ComponentsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <AuthProvider>
        <ShipsProvider>
          <ComponentsProvider>
            <App />
          </ComponentsProvider>          
        </ShipsProvider>
      </AuthProvider>
    </BrowserRouter>
  </>
);
