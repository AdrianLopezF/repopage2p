import React, { useState } from "react";
import "./Header.css";
import logo from "../../../public/Image/Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <a href="#hero">
        <img src={logo} alt="Logo" className="navbar-logo logo-glow" />
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
            <a href="#fortinet" onClick={toggleMenu}>Inicio</a>
          </li>
          <li>
            <a href="#nosotros" onClick={toggleMenu}>Nosotros</a>
          </li>
          <li>
            <div className="dropdown">
              <a href="#servicios">Servicios</a>
              <div className="dropdown-content">
                <p>Soluciones de Ciberseguridad</p>
                <a href="">Solución 1</a>
                <a href="">Solución 2</a>
                <a href="">Solución 3</a>
                <p>Servicio de Monitoreo SOC</p>
                <a href="">Servicio 1</a>
                <a href="">Servicio 2</a>
                <p>Asesoría y Consultoría</p>
                <a href="">Asesoría 1</a>
                <a href="">Asesoría 2</a>
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
