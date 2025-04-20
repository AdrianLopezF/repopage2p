import React from 'react'
import './ServiciosUno.css'

const Servicios = () => {
  return (
    <section className='servicios-containerUno'>
        <div className='contenido-servicios'>
          <p className='texto'>
            Contamos con <span className="azul">soluciones integrales de ciberseguridad</span> enfocadas en la mitigación de los riesgos cibernéticos que puedan presentarse en <span className="azul">su organización</span>. Estos servicios apoyan en la identificación, <span className="azul">protección, prevención y recuperación </span>de sus activos digitales.
          </p>
          <div className='ciberseguridad-servicios'>
            <div className='par-uno'>
              <div className='box'> 
                <div className="corner-top-right"></div>
                <div className="circle"><img src="./image/Firewall.png" alt="" /></div>
                <p>Next Generation Firewall.</p>
              </div>
              <div className='box'> 
                <div className="corner-top-right"></div>
                <div className="circle"><img src="./image/EndPoints.png" alt="" /></div>
                <p>Protección de EndPoints.</p>
              </div>
            </div>

            <div className='par-dos'>
              <div className='box2'> 
              <div className="corner-bottom-right"></div>
                <div className="circle"><img src="./image/Correo.png" alt="" /></div>
                <p>Protección de Correo Electrónico.</p>
              </div>
              <div className='box2'> 
                <div className="corner-bottom-right"></div>
                <div className="circle"><img src="./image/PrevencionDatos.png" alt="" /></div>
                <p>Prevención de  Perdida de Datos.</p>
              </div>
            </div>

            <div className='par-tres'>
              <div className='box'> 
                <div className="corner-top-right"></div>
                <div className="circle"><img src="./image/RedesSeguras.png" alt="" /></div>
                <p>Redes Seguras.</p>
              </div>
              <div className='box'> 
                <div className="corner-top-right"></div>
                <div className="circle"><img src="./image/AppWeb.png" alt="" /></div>
                <p>Seguridad de Aplicaciones Web.</p>
              </div>
            </div>

            <div className='par-cuatro'>
              <div className='box2'> 
                <div className="corner-bottom-right"></div>
                <div className="circle"><img src="./image/Monitoreo.png" alt="" /></div>
                <p>Monitoreo de Red.</p>
              </div>
              <div className='box2'> 
                <div className="corner-bottom-right"></div>
                <div className="circle"><img src="./image/Threat.png" alt="" /></div>
                <p>Threat Hunting.</p>
              </div>
            </div>
          </div>
        </div>
    </section>

  )
}

export default Servicios

