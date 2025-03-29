import React from 'react'
import './Header.css'
import logo from '../../../public/Image/logo.png';
import contactIcon from '../../../public/Image/flecha-correcta.png';

const Header = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <div className="navbar-right">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Servicios</a></li>
        </ul>
        <button className="contact-button">
          Contáctanos
          <img src={contactIcon} alt="Ícono de contacto" className="contact-icon" />
        </button>
      </div>
    </div>
  )
}

export default Header
