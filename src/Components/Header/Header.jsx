import React from 'react'
import './Header.css'
import logo from '../../../public/Image/Logo.png';

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
        </button>
      </div>
    </div>
  )
}
export default Header
