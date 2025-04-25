import React, { useState } from "react";
import "./Nosotros.css";

const Nosotros = () => {
  const [activo, setActivo] = useState(null);

  const toggle = (index) => {
    setActivo(activo === index ? null : index);
  };

  return (
    <div id="nosotros" className="nosotros-container">
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
          En 2PROTECTION creemos que la tecnología no solo conecta sistemas,
          sino que construye confianza, protege lo esencial y permite que las
          personas y empresas avancen con seguridad. Somos más que una empresa
          de servicios IT: somos un equipo de especialistas apasionados por la
          seguridad, el monitoreo y la continuidad operativa de nuestros
          clientes. <br /><br />
          2PROTECTION se fundo con un propósito claro: ser el aliado
          estratégico que las organizaciones necesitan para mantenerse fuertes,
          seguras y siempre en marcha. <br /><br />
          2PROTECTION es protección inteligente,
          visión estratégica y corazón tecnológico.
        </p>

        <div className="accordion btn-1" onClick={() => toggle(0)}>
          <span className="btn-txt">Nuestra misión</span>
          <div className={`contenido ${activo === 0 ? "mostrar" : ""}`}>
            En 2PROTECTION nos gusta impulsar la evolución digital de nuestros
            clientes mediante servicios de seguridad, monitoreo y gestión
            tecnológica altamente especializados, que les permitan operar con
            continuidad, eficiencia y visión de futuro en un entorno cada vez
            más conectado y desafiante.
          </div>
        </div>

        <div className="accordion btn-2" onClick={() => toggle(1)}>
          <span className="btn-txt">Nuestra visión</span>
          <div className={`contenido ${activo === 1 ? "mostrar" : ""}`}>
            En 2PROTECTION queremos ser el socio estratégico de confianza para
            nuestros clientes, protegiendo su infraestructura tecnológica,
            potenciando su crecimiento y asegurando que puedan enfocarse en su
            negocio, mientras nosotros garantizamos la continuidad, seguridad y
            eficiencia de su operación.
          </div>
        </div>

        <div className="accordion btn-3" onClick={() => toggle(2)}>
          <span className="btn-txt">Nuestros valores</span>
          <div className={`contenido ${activo === 2 ? "mostrar" : ""}`}>
            Cercanía y empatía Nos conectamos con nuestros clientes desde lo
            humano. Escuchamos, entendemos y respondemos con soluciones
            alineadas a sus necesidades reales. <br />
            <br />
            Enfoque estratégico Actuamos con visión, planificación y objetivos
            claros. Cada acción que tomamos busca generar impacto positivo y
            sostenido en la operación de nuestros clientes. <br />
            <br />
            Seguridad como compromiso La protección de la información y la
            continuidad operativa no solo son servicios, son metas. Cuidamos
            cada red como si fuera la nuestra. <br />
            <br />
            Liderazgo en acción No seguimos tendencias, las marcamos. Guiamos
            con conocimiento, experiencia y responsabilidad para generar
            confianza e inspirar a otros. <br />
            <br />
            Mejora continua Innovamos constantemente, aprendemos todos los días
            y evolucionamos junto con nuestros clientes y los cambios
            tecnológicos. <br />
            <br />
            Integridad y responsabilidad Actuamos con ética, transparencia y
            compromiso. Nuestro trabajo está respaldado por resultados y
            relaciones de largo plazo. <br />
            <br />
          </div>
        </div>
        <img src="/public/image/Logo2.png" alt="Logo" className="logo-2p" />
      </div>
    </div>
  );
};

export default Nosotros;
