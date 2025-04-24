import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './HeroS3.css'

const HeroS3 = () => {

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
    <div id="hero3" className="hero3-container">
         <img src="./image/FondoHeroS3.png" alt="" className="hero3-imagen"/>
         <div className="overlay"></div>
         <div className='hero3-content'>
            <div className="img-asesoria">
              <img src="./image/img-hero3.png" alt="" />
            </div>
            <div className='tit-asesoria'>
            <h1>ASESORIA Y CONSULTORIA EN SEGURIDAD INFORMATICA</h1>
            </div>
         </div>
    </div>
  )
}

export default HeroS3
