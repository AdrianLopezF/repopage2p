import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Servicio1 from "./Pages/Servicio-1/ServicioCiberseguridad.jsx"; // ← crea estos archivos luego
import Servicio2 from "./Pages/Servicio-2/ServicioSoc.jsx";
import Servicio3 from "./Pages/Servicio-3/ServicioAsesoria.jsx";
import Servicio4 from "./Pages/Servicio-4/ServicioNOC.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/servicio1" element={<Servicio1 />} />
        <Route path="/servicio2" element={<Servicio2 />} />
        <Route path="/servicio3" element={<Servicio3 />} />
        <Route path="/servicio4" element={<Servicio4 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);