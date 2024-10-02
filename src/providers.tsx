import React from "react";
import { BrowserRouter } from "react-router-dom";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => (
  <React.StrictMode>
    <BrowserRouter>{children}</BrowserRouter>
  </React.StrictMode>
);

export default Providers;
