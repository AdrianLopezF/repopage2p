import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <img src="./image/Footer-img.png" alt="" className='img-izquierda'/>
          <div className='centro'>
            <img src="./image/Logo3.png" alt="" className='Nombre-empresa'/>
            <p>Copyright 2025. 2-Protection Todos los derechos reservados.</p>
          </div>
        <img src="./image/Footer-img2.png" alt="" className='img-derecha' />
        <img src="./image/Ellipse-mayor.png" className="ellipse-movimiento3" />
        <img src="./image/Ellipse-mayor.png" className="ellipse-movimiento4" />
        <img src="./image/Ellipse-mayor.png" className="ellipse-movimiento5" />
        <div className="overlay"></div>
    </div>
  )
}

export default Footer
