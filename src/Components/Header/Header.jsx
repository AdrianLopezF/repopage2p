<<<<<<< HEAD
import React, { useState } from 'react';
import './Header.css'
import logo from '../../../public/Image/Logo.png';
=======
import React from "react";
import "./Header.css";
import logo from "../../../public/Image/Logo.png";
>>>>>>> c2b00156a82a8937b6ca0eaba8b94c4dc7b866df


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};

  return (
    <div className="navbar">
<<<<<<< HEAD
  <div className="navbar-logo-container">
    <img src={logo} alt="Logo" className="navbar-logo" />
    <button className="hamburger" onClick={toggleMenu}>
      ☰
    </button>
  </div>
    


  <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
    <ul>
      <li><a href="#inicio" className="active">Inicio</a></li>
      <li><a href="#servicios">Servicios</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
    <button className="contact-button">Contáctanos</button>
  </div>
</div>

  )
}
export default Header
=======
      <a href="#hero">
        <img src={logo} alt="Logo" className="navbar-logo logo-glow" />
      </a>

      <div className="navbar-right">
        <ul>
          <li>
            <a href="#fortinet">Inicio</a>
          </li>
          <li>
            <a href="#nosotros">Nosotros</a>
          </li>
          <li>
            <div class="dropdown">
              <a href="#servicios">Servicios</a>
              <div class="dropdown-content">
                <p>Soluciones de Ciberseguridad</p>
                <a href="">Solucion 1</a>
                <a href="">Solucion 2</a>
                <a href="">Solucion 3</a>
                <p>Servicio de Monitoreo SOC</p>
                <a href="">Servicio 1</a>
                <a href="">Servicio 2</a>
                <p>Asesoria y consultoria en Seguridad Informatica</p>
                <a href="">Asesoria 1</a>
                <a href="">Asesoria 2</a>
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
          }}
        >
          Contáctanos
        </button>
      </div>
    </div>
  );
};
export default Header;
>>>>>>> c2b00156a82a8937b6ca0eaba8b94c4dc7b866df
