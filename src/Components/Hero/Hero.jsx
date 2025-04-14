import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [inView, setInView] = useState(false); // Estado para controlar la visibilidad
  const heroRef = useRef(null); // Referencia para la sección Hero

  useEffect(() => {
    // Crear un Intersection Observer para la sección Hero
    const observer = new IntersectionObserver(
      (entries) => {
        // Cuando la sección Hero esté visible en la pantalla
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true); // Activar animaciones
          } else {
            setInView(false); // Desactivar animaciones si no está visible
          }
        });
      },
      { threshold: 0.5 } // Activar cuando al menos el 50% de la sección esté visible
    );

    if (heroRef.current) {
      observer.observe(heroRef.current); // Observar la sección Hero
    }

    // Limpiar el observer cuando el componente se desmonte
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div id="hero" ref={heroRef} className={`hero-container ${inView ? "animate" : ""}`}>
      <video
        src="/videos/video-Inicio.mp4"
        className="hero-video"
        autoPlay
        muted
        loop
      />
      <div className={`hero-text ${inView ? "animate-text" : ""}`}>
        <img src="/image/Mundo2.png" className="hero-mundo" />
        <h1 className="text1">REDES SEGURAS Y PROTEGIDAS</h1>
        <h2 className="text2">CON</h2>
        <span className="text-container">
          <span className="text3">2PROTECTION</span>
        </span>

        <p className="text4">
          Nuestro objetivo es ser facilitadores del proceso de desarrollo
          tecnológico de su empresa, aportando continuidad operacional, ahorro
          de costos, estabilidad organizacional, productividad y visibilidad de
          la seguridad TI.
        </p>
      </div>
      <button className={`fortinet-button ${inView ? "animate-button" : ""}`}>
        <img src="/image/Fortinet-btn.png" alt="" className="button-fortinet" />
      </button>
    </div>
  );
};

export default Hero;
