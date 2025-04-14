import React from 'react'
import './Contacto.css'
const Contacto = () => {
  return (
    <div id='contacto' className='contacto-container'>

      <div className='contenedor-correo'>
        <h2>Comúnicate con nosotros</h2>
        <form className='formulario' action="">
          <div className='content-inputs'>
            <input type="text" placeholder='Nombre' />
            <input type="email" placeholder='Email'/>
          </div>
          <textarea placeholder='Mensaje...' name="" id="" rows={5}></textarea>
          <button type='submit'>Enviar</button>
        </form>
      </div>
     
      <div className="contacto-lado">
        <img src="./image/Logo2.png" alt="Logo" className="imagen-logo" />
        <p>Síguenos en nuestras redes sociales:</p>
        <div className="redes">
          <img src="./image/Facebook.png" alt="Facebook" />
          <img src="./image/Tiktok.png" alt="TikTok" />
          <img src="./image/Instagram.png" alt="Instagram" />
        </div>
      </div>
    </div>
  )
}

export default Contacto
