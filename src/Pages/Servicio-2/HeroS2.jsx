import React from 'react'
import './HeroS2.css'

const Hero = () => {
  return (
    <div id="hero2" className="hero2-container">
      <img src="./image/FondoHeroS2.png" alt="" className="hero2-imagen"/>

      <div className="overlay"></div>

      <div className="hero-content">
        <div className="tit-soc">
          <h1>MONITOREO DE</h1>
          <h1>SOC</h1>
        </div>
        <div className="img-1">
          <img src="./image/ImgHeroS2.png" alt="" className='imgService2' />
        </div>
      </div>
    </div>
  )
}

export default Hero
