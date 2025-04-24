import React, { useEffect, useState } from 'react';
import './Beneficios.css';

const Beneficios = () => {
  const [isVisibleImg, setIsVisibleImg] = useState(false);
  const [isVisibleTxt, setIsVisibleTxt] = useState(false);

  // Función para verificar si un elemento está en el viewport
  const checkVisibility = () => {
    const imgElement = document.querySelector('.img-beneficios');
    const txtElement = document.querySelector('.txt-beneficios');

    // Verifica la visibilidad de la imagen
    if (imgElement) {
      const imgRect = imgElement.getBoundingClientRect();
      if (imgRect.top <= window.innerHeight && imgRect.bottom >= 0) {
        setIsVisibleImg(true);
      } else {
        setIsVisibleImg(false); // Cuando sale del viewport
      }
    }

    // Verifica la visibilidad del texto
    if (txtElement) {
      const txtRect = txtElement.getBoundingClientRect();
      if (txtRect.top <= window.innerHeight && txtRect.bottom >= 0) {
        setIsVisibleTxt(true);
      } else {
        setIsVisibleTxt(false); // Cuando sale del viewport
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);

    // Ejecutamos la verificación una vez al cargar el componente
    checkVisibility();

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <section className="beneficios-container">
      <img src="/image/Ellipse-mayor.png" className="ellipse-s1" />
      <img src="/image/Ellipse-mayor.png" className="ellipse-s2" />
      <div className="content-beneficios">
        <h2>Beneficios</h2>
        <div className="text-img-beneficios">
          <div
            className={`img-beneficios ${isVisibleImg ? 'in-view' : ''}`}
          >
            <img src="./image/img-beneficios-uno.png" alt="" />
          </div>
          <div
            className={`txt-beneficios ${isVisibleTxt ? 'in-view' : ''}`}
          >
            <p>
              <span>
                <img
                  src="./image/icono-beneficios.png"
                  alt=""
                  className="icn"
                />
                Aumenta la productividad de tu negocio.
              </span>
            </p>
            <p>
              <span>
                <img
                  src="./image/icono-beneficios.png"
                  alt=""
                  className="icn"
                />
                Administración de tecnología y sistemas de ciberseguridad de
                última generación como servicio.
              </span>
            </p>
            <p>
              <span>
                <img
                  src="./image/icono-beneficios.png"
                  alt=""
                  className="icn"
                />
                Tu seguridad, nuestra prioridad. En 2PROTECTION gestionamos y
                protegemos tu infraestructura TI con expertos en ciberseguridad.
              </span>
            </p>
            <p>
              <span>
                <img
                  src="./image/icono-beneficios.png"
                  alt=""
                  className="icn"
                />
                De la mano de personas altamente calificadas.
              </span>
            </p>
            <p>
              <span>
                <img
                  src="./image/icono-beneficios.png"
                  alt=""
                  className="icn"
                />
                Tareas diarias de mantenimiento como el rastreo de amenazas
                emergentes y acciones para defenderse de ellas.
              </span>
            </p>
            <p>
              <span>
                <img
                  src="./image/icono-beneficios.png"
                  alt=""
                  className="icn"
                />
                Facilita el crecimiento en capacidad y servicios.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
