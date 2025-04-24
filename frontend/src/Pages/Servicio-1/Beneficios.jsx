import React from 'react'
import './Beneficios.css'

const Beneficios = () => {
  return (
    <section className='beneficios-container'>
        <img src="/image/Ellipse-mayor.png" className="ellipse-s1" />
        <img src="/image/Ellipse-mayor.png" className="ellipse-s2" />
        <div className='content-beneficios'>
            <h2>Beneficios</h2>
            <div className='text-img-beneficios'>
                <div className='img-beneficios'>
                    <img src="./image/img-beneficios-uno.png" alt="" />
                </div>
                <div className='txt-beneficios'>
                    <p><span><img src="./image/icono-beneficios.png" alt="" className='icn' />Aumenta la productividad de tu negocio.</span></p>
                    <p><span><img src="./image/icono-beneficios.png" alt="" className='icn' />Administración de tecnología y sistemas de ciberseguridad de última generación como servicio.</span></p>
                    <p><span><img src="./image/icono-beneficios.png" alt="" className='icn' />Tu seguridad, nuestra prioridad. En 2PROTECTION gestionamos y protegemos tu infraestructura TI con expertos en ciberseguridad.</span></p>
                    <p><span><img src="./image/icono-beneficios.png" alt="" className='icn' />De la mano de personas altamente calificadas.</span></p>
                    <p><span><img src="./image/icono-beneficios.png" alt="" className='icn' />Tareas diarias de mantenimiento como el rastreo de amenazas emergentes y acciones para defenderse de ellas.</span></p>
                    <p><span><img src="./image/icono-beneficios.png" alt="" className='icn' />Facilita el crecimiento en capacidad y servicios.</span></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Beneficios
