import React from 'react'
import './RutaAsesoria.css'

const RutaAsesoria = () => {
  return (
    <section className='servicios-containerTres'>
        <div className='contenido-servicios3'>
            <div className='txt-asesoria'><br />
                <p className='textoS3 texto-arriba'>
                    Detecta y responde a tiempo ante amenazas e incidentes de ciberseguridad integrando tu infraestructura tecnológica a los servicios administrados de un SOC, tu seguridad es nuestra prioridad.
                </p>
            </div>
            <div className='frase-asesoria'>
                <p>
                    No tomes atajos. Toma la ruta segura.
                </p>
            </div>
            <div className='diagrama-asesoria'>
                <img src="./image/img-ruta.png" alt="" />
            </div>
            <div className='descripciones-asesoria'>
                <p><span class="titulo-s3">Confidencialidad:</span> Proteccion de la información contra el acceso no autorizado</p>
                <p><span class="titulo-s3">Disponibilidad:</span> Asegurar que la información esté disponible y accesible cuando sea necesario.</p>
                <p><span class="titulo-s3">Integridad:</span> Asegurarse de que los datos no sean alterados de manera no autorizada, garantizando su exactitud y confiabilidad.</p>
            </div>
        </div>
    </section>
  )
}

export default RutaAsesoria
