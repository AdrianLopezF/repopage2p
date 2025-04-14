import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video-Inicio.mp4" className="hero-video" autoPlay muted loop />
      <div className="hero-text">
        <img src="/image/Mundo2.png" className="hero-mundo" alt="Mundo" />
        <h1 className="text1">REDES SEGURAS Y PROTEGIDAS</h1>
        <h2 className="text2">CON</h2>
        <span className="text-container">
          <span className="text3">2PROTECTION</span>
        </span>

        <p className="text4">
          Nuestro objetivo es ser facilitadores del proceso de desarrollo tecnológico de su empresa, aportando continuidad operacional, ahorro de costos, estabilidad organizacional, productividad y visibilidad de la seguridad TI.
        </p>
      </div>
      <button className="fortinet-button">
        <img src="/image/Fortinet-btn.png" alt="Fortinet" className="button-fortinet" />
      </button>
    </div>
  );
};

export default Hero;

