import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <a href="/#hero">
        <img src="/public/image/Logo.png" alt="Logo" className="navbar-logo logo-glow" />
      </a>

      {/* Botón hamburguesa */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar1"></span>
        <span className="bar2"></span>
        <span className="bar3"></span>
      </div>

      <div className={`navbar-right ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="/#fortinet" onClick={toggleMenu}>Inicio</a>
          </li>
          <li>
            <a href="/#nosotros" onClick={toggleMenu}>Nosotros</a>
          </li>
          <li>
            <div className="dropdown">
              <a href="/#servicios">Servicios</a>
              <div className="dropdown-content">
                <Link to="/servicio1#hero1">Soluciones de Ciberseguridad</Link>
                <Link to="/servicio2#hero2">Servicio de Monitoreo SOC</Link>
                <Link to="/servicio3#hero3">Asesoría y Consultoría</Link>
                <Link to="/servicio4#hero4">Servicio de NOC</Link>
              </div>
            </div>
          </li>
        </ul>

        <button
          className="contact-button"
          onClick={() => {
            const section = document.getElementById("contacto");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
            setMenuOpen(false); // cerrar el menú al hacer clic
          }}
        >
          Contáctanos
        </button>
      </div>
    </div>
  );
};

export default Header;
