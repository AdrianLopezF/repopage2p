import React, { useState, useEffect } from 'react';
import './Beneficios-S4.css';

const Beneficios = () => {
  // Estado para determinar si los elementos están en vista
  const [isImgInView, setIsImgInView] = useState(false);
  const [isTxtInView, setIsTxtInView] = useState(false);

  // Función para verificar si el elemento está en el viewport
  const checkInView = () => {
    // Obtener los elementos de la imagen y el texto
    const imgElement = document.querySelector('.img-beneficio4');
    const txtElement = document.querySelector('.txt-beneficio4');
    const windowHeight = window.innerHeight;

    // Verificar si la imagen está en el viewport
    if (imgElement) {
      const imgRect = imgElement.getBoundingClientRect();
      if (imgRect.top < windowHeight * 0.75 && imgRect.bottom > windowHeight * 0.25) {
        setIsImgInView(true);
      } else {
        setIsImgInView(false);
      }
    }

    // Verificar si el texto está en el viewport
    if (txtElement) {
      const txtRect = txtElement.getBoundingClientRect();
      if (txtRect.top < windowHeight * 0.75 && txtRect.bottom > windowHeight * 0.25) {
        setIsTxtInView(true);
      } else {
        setIsTxtInView(false);
      }
    }
  };

  // Usar useEffect para agregar el listener del scroll
  useEffect(() => {
    // Agregar el event listener al hacer scroll
    window.addEventListener('scroll', checkInView);

    // Llamar a la función de verificación al montar el componente
    checkInView();

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', checkInView);
    };
  }, []);

  return (
    <section className="beneficio-containerCuatro">
      <img src="./image/Ellipse-mayor.png" alt="" className="ellipse-s4" />
      <div className="contenido-beneficio4">
        <h2>Solución</h2>
        <div className="img-text-S4">
          <div
            className={`img-beneficio4 ${isImgInView ? 'in-view' : ''}`}
          >
            <img src="./image/empresaS4.jpg" alt="" className="img-uno-s4" />
          </div>
          <div
            className={`txt-beneficio4 ${isTxtInView ? 'in-view' : ''}`}
          >
            <p>
              <span>
                <img src="./image/privilegio.png" alt="" className="icono-beneficio-s4" />
                Reducción de tiempos de inactividad (downtime).
              </span>
            </p>
            <p>
              <span>
                <img src="./image/privilegio.png" alt="" className="icono-beneficio-s4" />
                Mejora continua en la calidad del servicio de red.
              </span>
            </p>
            <p>
              <span>
                <img src="./image/privilegio.png" alt="" className="icono-beneficio-s4" />
                Seguridad y respaldo en todo momento.
              </span>
            </p>
            <p>
              <span>
                <img src="./image/privilegio.png" alt="" className="icono-beneficio-s4" />
                Disminución de costos operativos por fallas o soporte reactivo.
              </span>
            </p>
            <p>
              <span>
                <img src="./image/privilegio.png" alt="" className="icono-beneficio-s4" />
                Enfoque del equipo TI en tareas estratégicas, mientras nosotros cuidamos tu infraestructura.
              </span>
            </p>
          </div>
          <div className="fraseS4">
            <h3>
              "Nos conectamos a tu red como si fuésemos parte de tu equipo. Vigilamos, protegemos y mantenemos tus servicios funcionando sin interrupciones"
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
