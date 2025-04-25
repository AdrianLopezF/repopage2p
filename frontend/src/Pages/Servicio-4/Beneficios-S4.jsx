import React from 'react'
import './Beneficios-S4.css'

const beneficios = () => {
  return (
    <section className='beneficio-containerCuatro'>
    <img src="./image/Ellipse-mayor.png" alt="" className='ellipse-s4'/>
    <div className='contenido-beneficio4'>
      <h2>Solución</h2>
      <div className='img-text-S4'>
        <div className='img-beneficio4'>
          <img src="./image/empresaS4.jpg" alt="" className='img-uno-s4'/>
        </div>
        <div className='txt-beneficio4'>
          <p><span><img src="./image/privilegio.png" alt="" className='icono-beneficio-s4'/>  Reducción de tiempos de inactividad (downtime).</span></p>
          <p><span><img src="./image/privilegio.png" alt="" className='icono-beneficio-s4'/>  Mejora continua en la calidad del servicio de red.</span></p>
          <p><span><img src="./image/privilegio.png" alt="" className='icono-beneficio-s4'/>  Seguridad y respaldo en todo momento.</span></p>
          <p><span><img src="./image/privilegio.png" alt="" className='icono-beneficio-s4'/>  Disminución de costos operativos por fallas o soporte reactivo.</span></p>
          <p><span><img src="./image/privilegio.png" alt="" className='icono-beneficio-s4'/>  Enfoque del equipo TI en tareas estratégicas, mientras nosotros cuidamos tu infraestructura.</span></p>
        </div>
        <div  className='fraseS4'>
          <h3>
            "Nos conectamos a tu red como si fuésemos parte de tu equipo. Vigilamos, protegemos y mantenemos tus servicios funcionando sin interrupciones"
          </h3>
        </div>
      </div>
    </div>
  </section>
  )
}

export default beneficios
