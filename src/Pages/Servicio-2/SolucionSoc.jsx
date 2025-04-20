import React from 'react'
import './SolucionSoc.css'

const BeneficiosSOC = () => {
  return (
    <section className='solucion-container'>
        
          <div className='imagenes-arriba'>
            <img src="./image/imgSolucion-izquierda.png" alt="" />
            <img src="./image/imgSolucion-derecha.png" alt="" />
          </div>

          <div className='contenido-solucion'>
            <h1 className='tit-soluciones'>Soluciones</h1>

            <div className='txt-img-soluciones'>

              <div className='soluciones-txt'>
                <p><span><img src="./image/icono-solucion.png" alt="" className='icono-solucion'/>Atención de eventos e incidentes.</span></p>
                <p><span><img src="./image/icono-solucion.png" alt="" className='icono-solucion'/>Gestión de eventos e incidentes de seguridad.</span></p>
                <p><span><img src="./image/icono-solucion.png" alt="" className='icono-solucion'/>Monitoreo 24/7 los 365 días del año por analistas de seguridad certificados.</span></p>
                <p><span><img src="./image/icono-solucion.png" alt="" className='icono-solucion'/>Sesiones mensuales para reportes y seguimiento a incidentes.</span></p>
                <p><span><img src="./image/icono-solucion.png" alt="" className='icono-solucion'/>Uso de metodologías de MITRE Attack y Cyber Kill.</span></p>
                <p><span><img src="./image/icono-solucion.png" alt="" className='icono-solucion'/>Chain para gestión de incidentes.</span></p>
                <p><span><img src="./image/icono-solucion.png" alt="" className='icono-solucion'/>Generación de reportes para cumplimiento de normativas y certificaciones.</span></p>
              </div>
              <div className='img-solucion'>
                <img src="./image/img-solucion.png" alt="" />
              </div>

            </div>

            <div className="esquina-inferior-izq"></div>
            <div className="esquina-inferior-der"></div>

          </div>  
    </section>
  )
}

export default BeneficiosSOC
