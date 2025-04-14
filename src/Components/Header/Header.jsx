import React from "react";
import "./Header.css";
import logo from "../../../public/Image/Logo.png";

const Header = () => {
  return (
    <div className="navbar">
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
