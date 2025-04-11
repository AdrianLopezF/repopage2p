import React from 'react'
import "./Servicios.css"

const Servicios = () => {
  return (
    <div className='servicios-container'>
        <img src="/image/Ellipse-mayor.png" alt="" className='ellipse'/>
        <img src="/image/Ellipse-mayor.png" alt="" className='ellipse2'/>
      <div className='content-servicios'>
        <h2>NUESTROS SERVICIOS</h2>
        <p>Entendemos el reto que implica el contar con un equipo de especialistas en seguridad de la información y ciberseguridad en tu empresa. Es por eso que hemos diseñado un servicio en el cual tu te enfocas en cumplir los objetivos de tu negocio y 2Protection en proteger tu información y tu negocio.</p>
        <div className='cuadros-container'>
          <div className='cuadro1 cuadro'>
            <div className='icono1'><img src="/image/Servicios-icono1.png" alt="" /></div>
            <p>Soluciones de ciberseguridad.</p>
            <button className='btn1'>Ver más</button>
          </div>
          <div className='cuadro2 cuadro'>
            <div className='icono2'><img src="/image/Servicios-icono2.png" alt="" /></div>
            <p>Servicio de monitoreo SOC.</p>
            <button className='btn2'>Ver más</button>
          </div>
          <div className='cuadro3 cuadro'>
            <div className='icono3'><img src="/image/Servicios-icono3.png" alt="" /></div>
            <p>Asesoría y consultoría en seguridad Informática.</p>
            <button className='btn3'>Ver más</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Servicios

