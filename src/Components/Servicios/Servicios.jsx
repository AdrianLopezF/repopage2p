import React from "react";
import "./Servicios.css";
import { Link } from "react-router-dom";

const Servicios = () => {
  return (
    <section id="servicios" className="servicios-inicio">
      <div className="servicios-container">
        <img src="/image/Ellipse-mayor.png" alt="" className="ellipse" />
        <img src="/image/Ellipse-mayor.png" alt="" className="ellipse2" />
        <div className="content-servicios">
          <h2>NUESTROS SERVICIOS</h2>
          <hr className="linea-divisora" />
          <p>
            Entendemos el reto que implica el contar con un equipo de
            especialistas en seguridad de la información y ciberseguridad en tu
            empresa. Es por eso que hemos diseñado un servicio en el cual tu te
            enfocas en cumplir los objetivos de tu negocio y 2Protection en
            proteger tu información y tu negocio.
          </p>
          <div className="cuadros-container">
            <div className="cuadro1 cuadro">
              <div className="icono1">
                <img src="/image/Servicios-icono1.png" alt="" />
              </div>
              <p>Soluciones de ciberseguridad.</p>
              <Link to="/servicio1" className="btn1">Ver más</Link>
            </div>
            <div className="cuadro2 cuadro">
              <div className="icono2">
                <img src="/image/Servicios-icono2.png" alt="" />
              </div>
              <p>Servicio de monitoreo SOC.</p>
              <Link to="/servicio2" className="btn2">Ver más</Link>
            </div>
            <div className="cuadro3 cuadro">
              <div className="icono3">
                <img src="/image/Servicios-icono3.png" alt="" />
              </div>
              <p>Asesoría y consultoría en seguridad Informática.</p>
              <Link to="/servicio3" className="btn3">Ver más</Link>
            </div>
          </div>
          <hr className="linea-divisora" />
        </div>
      </div>
    </section>
  )
}

export default Servicios

