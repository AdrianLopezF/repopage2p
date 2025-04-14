import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Servicio1 from "./Pages/servicio1.jsx"; // ← crea estos archivos luego
import Servicio2 from "./Pages/servicio2.jsx";
import Servicio3 from "./Pages/servicio3.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/servicio1" element={<Servicio1 />} />
        <Route path="/servicio2" element={<Servicio2 />} />
        <Route path="/servicio3" element={<Servicio3 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);