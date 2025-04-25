import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './HeroS4.css'

const HeroS4 = () => {


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
    <div id="hero4" className="hero4-container">
      <img src="./image/FondoHeroS4.png" alt="" className="hero4-imagen"/>  
      <div className='hero4-content'>
        <div className='txt-HeroS4'>
          <h1>SERVICIO DE NOC</h1>
          <h2>NETWORK OPERATIONS CENTER</h2>
        </div>
        <div className='img-HeroS4'>
          <img src="./image/Img-hero4.png" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default HeroS4
