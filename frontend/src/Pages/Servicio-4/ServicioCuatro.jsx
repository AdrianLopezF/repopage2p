import React from 'react'
import './ServicioCuatro.css'

const ServicioCuatro = () => {
  return (
    <section className='servicios-containerCuatro'>
        <div className='contenido-servicios4'>
            <div className='txt-servicio4'><br />
                <p className='texto-arriba'>
                    En <span className="azul">2PROTECTION</span>, nuestro Centro de Operaciones de <span className="azul">Red (NOC)</span> ofrece monitoreo proactivo, gestión continua y soporte técnico especializado para la infraestructura de red de nuestros clientes, garantizando alta disponibilidad, <span className="azul"> rendimiento óptimo </span>  y respuesta inmediata ante incidentes.
                </p>
            </div>
            <div className='img-lineas4'>
                <img src="./image/Linea-textos4.png" alt="" />
            </div>
            <div className='txt-servicio4'><br />
                <p className='texto-abajo'>
                    ¿Qué incluye nuestro servicio de NOC?
                </p>
            </div>
            <div className='servicios-s4'>
                    <div className='box-s4'>
                        <div className="circle-s4"><img src="./image/uno-S4.png" alt="" /></div>
                        <p>Monitoreo 24/7 de equipos de red (switches, routers, firewalls, access points, enlaces, etc.)</p>
                    </div>
                    <div className='box-s4'>
                        <div className="circle-s4"><img src="./image/dos-S4.png" alt="" /></div>
                        <p>Detección temprana de fallas, caídas o anomalías en la red.</p>
                    </div>
                    <div className='box-s4'>
                        <div className="circle-s4"><img src="./image/tres-S4.png" alt="" /></div>
                        <p>Gestión y respuesta a incidentes con protocolos definidos por SLA.</p>
                    </div>

  
                    <div className='box-s4'>
                        <div className="circle-s4"><img src="./image/cuatro-S4.png" alt="" /></div>
                        <p>Análisis de tráfico y rendimiento para evitar cuellos de botella y optimizar recursos.</p>
                    </div>
                    <div className='box-s4'>
                        <div className="circle-s4"><img src="./image/cinco-S4.png" alt="" /></div>
                        <p>Reportes periódicos y alertas en tiempo real.</p>
                    </div>
                    <div className='box-s4'>
                        <div className="circle-s4"><img src="./image/seis-S4.png" alt="" /></div>
                        <p>Escalamiento técnico hacia fabricantes o integradores si es necesario.</p>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default ServicioCuatro
