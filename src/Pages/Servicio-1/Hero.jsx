import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div id="hero1" className="hero1-container">
      <video src="/videos/FondoServicioDos.mp4" className="hero1-video" autoPlay muted loop />

      <div className="overlay"></div>

      <div className="hero-content">
        <div className="tit-1">
          <h1 className="h1">SOLUCIONES DE</h1>
          <h1 className ="h2">CIBERSEGURIDAD</h1>
        </div>
        <div className="img-1">
          <img src="./image/EscudoServicioUno.png" alt="" className='imgEscudo' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
