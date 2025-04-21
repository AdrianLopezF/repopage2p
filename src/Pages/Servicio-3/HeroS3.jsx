import React from 'react'
import './HeroS3.css'

const HeroS3 = () => {
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
