import React, { useState } from 'react';
import "./Nosotros.css"

const Nosotros = () => {
  const [activo, setActivo] = useState(null);

  const toggle = (index) => {
    setActivo(activo === index ? null : index);
  };

  return (
    <div id='nosotros' className="nosotros-container">

      <img src="/image/Ellipse-mayor.png" className="ellipse-movimiento" />
      <img src="/image/Ellipse-mayor.png" className="ellipse-movimiento2" />
      <img src="/image/Ellipse-menor.png" className="ellipse-estatica" />
      {/*<img src="/image/Logo2.png" alt="" className="logo-img"/>*/}

      <div className="nosotros-img">
        <img src="/image/Nosotros-img.png" alt="" className="img-nosotros" />
      </div>
      <div className="nosotros-txtbtn">
        <h2>NOSOTROS</h2>
        <p>
          Somos una empresa especializada en brindar servicios y soluciones de Seguridad Informática y Tecnologías de la Información y Comunicación. Nuestra misión es respaldar la operación de nuestros clientes a través de profesionales y herramientas tecnológicas que hagan más simple y segura su operación.
        </p>

        <div className="accordion btn-1" onClick={() => toggle(0)}>
          <span className='btn-txt'>Nuestra misión</span>
          <div className={`contenido ${activo === 0 ? 'mostrar' : ''}`}>
            Respaldar la operación de nuestros clientes con soluciones seguras y eficientes. Respaldar la operación de nuestros clientes con soluciones seguras y eficientes.Respaldar la operación de nuestros clientes con soluciones seguras y eficientes.
            Respaldar la operación de nuestros clientes con soluciones seguras y eficientes. Respaldar la operación de nuestros clientes con soluciones seguras y eficientes.Respaldar la operación de nuestros clientes con soluciones seguras y eficientes.
            Respaldar la operación de nuestros clientes con soluciones seguras y eficientes. Respaldar la operación de nuestros clientes con soluciones seguras y eficientes.Respaldar la operación de nuestros clientes con soluciones seguras y eficientes.
          </div>
        </div>

        <div className="accordion btn-2" onClick={() => toggle(1)}>
          <span className='btn-txt'>Nuestra visión</span>
          <div className={`contenido ${activo === 1 ? 'mostrar' : ''}`}>
            Ser líderes en soluciones de seguridad informática en Latinoamérica.Ser líderes en soluciones de seguridad informática en Latinoamérica.Ser líderes en soluciones de seguridad informática en Latinoamérica.Ser líderes en soluciones de seguridad informática en Latinoamérica.
            Ser líderes en soluciones de seguridad informática en Latinoamérica.Ser líderes en soluciones de seguridad informática en Latinoamérica.Ser líderes en soluciones de seguridad informática en Latinoamérica.Ser líderes en soluciones de seguridad informática en Latinoamérica.
            Ser líderes en soluciones de seguridad informática en Latinoamérica.Ser líderes en soluciones de seguridad informática en Latinoamérica.Ser líderes en soluciones de seguridad informática en Latinoamérica.Ser líderes en soluciones de seguridad informática en Latinoamérica.
          </div>
        </div>

        <div className="accordion btn-3" onClick={() => toggle(2)}>
          <span className='btn-txt'>Nuestros valores</span>
          <div className={`contenido ${activo === 2 ? 'mostrar' : ''}`}>
            Compromiso, innovación, integridad y trabajo en equipo.
            Compromiso, innovación, integridad y trabajo en equipo.
            Compromiso, innovación, integridad y trabajo en equipo.
            Compromiso, innovación, integridad y trabajo en equipo.
            Compromiso, innovación, integridad y trabajo en equipo.
            Compromiso, innovación, integridad y trabajo en equipo.
            Compromiso, innovación, integridad y trabajo en equipo.
            Compromiso, innovación, integridad y trabajo en equipo.
          </div>
        </div>
        <img src="/public/image/Logo2.png" alt="Logo" className="logo-2p" />
      </div>
    </div>
  );
};

export default Nosotros;


