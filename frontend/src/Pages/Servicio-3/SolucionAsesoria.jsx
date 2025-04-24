import React, { useEffect } from 'react';
import './SolucionAsesoria.css';

const SolucionAsesoria = () => {

  const checkVisibility = (element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    return rect.top <= windowHeight * 0.8 && rect.bottom >= 0;
  };

  const handleScroll = () => {
    const textElement = document.querySelector('.txt-solucion3');
    const imageElement = document.querySelector('.img-solucion3');
    
    if (textElement && checkVisibility(textElement)) {
      textElement.classList.add('animate-text');
    } else {
      textElement.classList.remove('animate-text');
    }
    
    if (imageElement && checkVisibility(imageElement)) {
      imageElement.classList.add('animate-image');
    } else {
      imageElement.classList.remove('animate-image');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility when the component loads

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='solucion-containerTres'>
      <img src="./image/Ellipse-mayor.png" alt="" className='ellipse-s3'/>
      <div className='contenido-solucion3'>
        <h2>Solución</h2>
        <div className='img-text-S3'>
          <div className='txt-solucion3'>
            <p><span><img src="./image/icono-beneficios.png" alt="" className='icono-solucion'/>Creación de estrategias de seguridad para tu negocio.</span></p>
            <p><span><img src="./image/icono-beneficios.png" alt="" className='icono-solucion'/>Seguimiento de cumplimiento de certificación.</span></p>
            <p><span><img src="./image/icono-beneficios.png" alt="" className='icono-solucion'/>Pruebas de ingeniería social.</span></p>
            <p><span><img src="./image/icono-beneficios.png" alt="" className='icono-solucion'/>Pláticas de concientización a altos directivos y usuarios.</span></p>
          </div>
          <div className='img-solucion3'>
            <img src="./image/solucionS3.png" alt="" className='img-uno'/>
            <img src="./image/solucionS3-opcion2.png" alt="" className='img-dos' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolucionAsesoria;
