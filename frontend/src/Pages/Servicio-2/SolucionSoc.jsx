import React, { useEffect } from 'react';
import './SolucionSoc.css';

const BeneficiosSOC = () => {
  // Función que revisa la visibilidad de un elemento
  const checkVisibility = (element) => {
    // Obtenemos la posición del elemento
    const rect = element.getBoundingClientRect();
    // Obtenemos la altura de la ventana
    const windowHeight = window.innerHeight;
    
    // Verificamos si el elemento está visible en la ventana (80% de la altura del viewport)
    return rect.top <= windowHeight * 0.8 && rect.bottom >= 0;
  };

  // Función que maneja el evento de scroll
  const handleScroll = () => {
    const textElement = document.querySelector('.soluciones-txt');
    const imageElement = document.querySelector('.img-solucion');
    
    // Si el texto está visible, agregamos la clase 'animate'
    if (textElement && checkVisibility(textElement)) {
      textElement.classList.add('animate');
    } else {
      // Si el texto no está visible, removemos la clase 'animate' para reiniciar la animación
      textElement.classList.remove('animate');
    }
    
    // Si la imagen está visible, agregamos la clase 'animate'
    if (imageElement && checkVisibility(imageElement)) {
      imageElement.classList.add('animate');
    } else {
      // Si la imagen no está visible, removemos la clase 'animate' para reiniciar la animación
      imageElement.classList.remove('animate');
    }
  };

  useEffect(() => {
    // Detectamos el evento de scroll
    window.addEventListener('scroll', handleScroll);
    
    // Comprobamos la visibilidad al cargar la página
    handleScroll();

    // Limpiamos el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
            <p><span><img src="./image/icono-beneficios.png" alt="" className='icono-solucion' />Atención de eventos e incidentes.</span></p>
            <p><span><img src="./image/icono-beneficios.png" alt="" className='icono-solucion' />Gestión de eventos e incidentes de seguridad.</span></p>
            <p><span><img src="./image/icono-beneficios.png" alt="" className='icono-solucion' />Monitoreo 24/7 los 365 días del año por analistas de seguridad certificados.</span></p>
            <p><span><img src="./image/icono-beneficios.png" alt="" className='icono-solucion' />Sesiones mensuales para reportes y seguimiento a incidentes.</span></p>
            <p><span><img src="./image/icono-beneficios.png" alt="" className='icono-solucion' />Uso de metodologías de MITRE Attack y Cyber Kill.</span></p>
            <p><span><img src="./image/icono-beneficios.png" alt="" className='icono-solucion' />Chain para gestión de incidentes.</span></p>
            <p><span><img src="./image/icono-beneficios.png" alt="" className='icono-solucion' />Generación de reportes para cumplimiento de normativas y certificaciones.</span></p>
          </div>

          <div className='img-solucion'>
            <img src="./image/img-solucion.png" alt="" />
          </div>

        </div>

        <div className="esquina-inferior-izq"></div>
        <div className="esquina-inferior-der"></div>

      </div>
    </section>
  );
}

export default BeneficiosSOC;
