import React, { useState } from 'react';
import './Header.css'
import logo from '../../../public/Image/Logo.png';


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};

  return (
    <div className="navbar">
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
