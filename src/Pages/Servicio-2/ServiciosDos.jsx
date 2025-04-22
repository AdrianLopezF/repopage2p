import React from 'react'
import './ServiciosDos.css'

const ServiciosDos = () => {
  return (
    <section className='servicios-containerDos'>
        <div className='contenido-servicios2'>
            <div className='txt-inicioS2'>
                <img src="./image/textoS2-izquierda.png" alt="" className='img1-txt img-decoraciones'/>
                <p className='textoS2 texto-arriba uno'>
                  Detecta y responde a tiempo ante amenazas e incidentes de ciberseguridad integrando tu infraestructura tecnológica a los servicios administrados de un SOC, tu seguridad es nuestra prioridad.
                </p>
                <img src="./image/textoS2-derecha.png" alt="" className='img2-txt img-decoraciones' />
            </div>
            <p className='textoS2 texto-arriba dos'>
                  Detecta y responde a tiempo ante amenazas e incidentes de ciberseguridad integrando tu infraestructura tecnológica a los servicios administrados de un SOC, tu seguridad es nuestra prioridad.
            </p>
            <div className='serviciosDos'>
              <img src="./image/Ellipse-mayor.png" alt="" className='ellipse-centro'/>
              
              <div className='primer-tercio'>

                <div className='contenedor'>
                  <img src="./image/MonitorioSev2.png" alt="" />
                  <div className='descripcion'>
                    <h3>Monitoreo 24 x 7</h3>
                    <p>Protección las 24 horas del día los 365 días del año.</p>
                  </div>
                </div>

                <div className='contenedor'>
                  <img src="./image/IASev2.png" alt="" />
                  <div className='descripcion'>
                    <h3>Uso de IA y ML</h3>
                    <p>Uso de OPEN XDR, EDR y herramientas basadas en Inteligencia Artificial y Machine Learnig.</p>
                  </div>
                </div>
                <div className='contenedor'>
                  <img src="./image/ManagerSev2.png" alt="" />
                  <div className='descripcion'>
                    <h3>Customer Succes Manager</h3>
                    <p>Asignación de un CSM responsable del habilitamiento, escalación, reportes y comunicación continua.</p>
                  </div>
                </div>

              </div>

              <div className='segundo-tercio'>

                <div className='contenedor'>
                  <img src="./image/EficienteSev2.png" alt="" />
                  <div className='descripcion'>
                    <h3>Eficaz y eficiente</h3>
                    <p>Reduce el tiempo de detección en 8x y el tiempo de respuesta en 20x.</p>
                  </div>
                </div>
                <div className='contenedor'>
                  <img src="./image/MedidaSev2.png" alt="" />
                  <div className='descripcion'>
                    <h3>A la medida de tu negocio</h3>
                    <p>Implementación de plan de respuesta a incidentes de acuerdo al contexto de tu negocio.</p>
                  </div>
                </div>
                <div className='contenedor'>
                  <img src="./image/ReportesSev2.png" alt="" />
                  <div className='descripcion'>
                    <h3>Generación de Reportes</h3>
                    <p>Reportes sobre el cumplimiento normativo.</p>
                  </div>
                </div>

              </div>
            </div>
        </div>
    </section>
  )
}

export default ServiciosDos
