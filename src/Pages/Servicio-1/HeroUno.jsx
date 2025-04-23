import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./HeroUno.css";

const Hero = () => {
  const location = useLocation();

  useEffect(() => {
    // Verifica si hay un hash en la URL
    if (location.hash) {
      // Selecciona el elemento con ese id
      const element = document.querySelector(location.hash);
      if (element) {
        // Realiza un desplazamiento suave hacia ese elemento
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div id="hero1" className="hero1-container">
      <video
        src="/videos/FondoServicioDos.mp4"
        className="hero1-video"
        autoPlay
        muted
        loop
      />

      <div className="overlay"></div>

      <div className="hero-content">
        <div className="tit-1">
          <h1 className="h1">SOLUCIONES DE</h1>
          <h1 className="h2">CIBERSEGURIDAD</h1>
        </div>
        <div className="img-1">
          <img
            src="./image/EscudoServicioUno.png"
            alt=""
            className="imgEscudo"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
