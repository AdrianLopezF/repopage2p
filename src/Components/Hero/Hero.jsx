import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video-Inicio.mp4" className="hero-video" autoPlay muted loop />
      <div className="hero-text">
        <img src="/image/Mundo2.png" className="hero-mundo" />
        <h1 className="text1">REDES SEGURAS Y PROTEGIDAS</h1>
        <h2 className="text2">CON</h2>
        <h2 className="text3">2PROTECTION</h2>
          <p className="text4">
            Nuestro objetivo es ser facilitadores del proceso de desarrollo tecnológico de su empresa, aportando continuidad operacional, ahorro de costos, estabilidad organizacional, productividad y visibilidad de la seguridad TI.
          </p>
      </div>
      <button className="fortinet-button">
        <img src="/image/Fortinet-btn.png" alt="" className="button-fortinet" />
      </button>
    </div>
  );
};

export default Hero;

