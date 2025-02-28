import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import 'lenis/dist/lenis.css'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/portfolio/"> {/* Ye change karna zaroori hai */}
    <App />
  </BrowserRouter>
);
