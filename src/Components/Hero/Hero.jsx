import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const videos = [
    { src: "/videos/vid1.mp4", text1: "Águila majestuosa sobrevolando las montañas", text2: "Una visión única desde el cielo" },
    { src: "/videos/vid2.mp4", text1: "Búho observando la noche con sabiduría", text2: "Guardian de la oscuridad" },
    { src: "/videos/vid1.mp4", text1: "Cuervo en vuelo, símbolo de misterio", text2: "La sombra que guía" },
    { src: "/videos/vid2.mp4", text1: "Mariposa revoloteando en el jardín", text2: "El color de la naturaleza" },
    { src: "/videos/vid1.mp4", text1: "Búho posado, guardian de la oscuridad", text2: "Silencio y misterio" },
    { src: "/videos/vid2.mp4", text1: "Águila surcando los cielos al amanecer", text2: "La fuerza del viento" },
    { src: "/videos/vid1.mp4", text1: "Pino real en su esplendor", text2: "La majestuosidad de la naturaleza" },
    { src: "/videos/vid2.mp4", text1: "Loro colorido en el paraíso tropical", text2: "La alegría de la selva" },
    { src: "/videos/vid1.mp4", text1: "Garza en su hábitat natural", text2: "La serenidad del agua" },
    { src: "/videos/vid2.mp4", text1: "Mariposa descansando sobre una flor", text2: "La belleza efímera" },
  ];

  const [currentVideo, setCurrentVideo] = useState(0);
  const [fadeOutVideo, setFadeOutVideo] = useState(false);
  const [visibleThumbnails, setVisibleThumbnails] = useState([9, 0, 1]);

  const intervalRef = useRef(null);

  // Función para avanzar el video
  const nextVideo = () => {
    setFadeOutVideo(true); // Video actual saliendo
    setTimeout(() => {
      setCurrentVideo((prev) => {
        const next = (prev + 1) % videos.length;
        updateThumbnails(next);
        return next;
      });
      setFadeOutVideo(false); // Video nuevo entrando
    }, 200); // Duración de la animación de desvanecimiento (200ms)
  };

  // Función para retroceder el video
  const prevVideo = () => {
    setFadeOutVideo(true); // Video actual saliendo
    setTimeout(() => {
      setCurrentVideo((prev) => {
        const prevVideo = (prev - 1 + videos.length) % videos.length;
        updateThumbnails(prevVideo);
        return prevVideo;
      });
      setFadeOutVideo(false); // Video nuevo entrando
    }, 200); // Duración de la animación de desvanecimiento (200ms)
  };

  // Función para cambiar el video al hacer clic en una miniatura
  const changeVideo = (index) => {
    setFadeOutVideo(true); // Video actual saliendo
    setTimeout(() => {
      setCurrentVideo(index);
      updateThumbnails(index);
      setFadeOutVideo(false); // Video nuevo entrando
    }, 200); // Duración de la animación de desvanecimiento (200ms)
  };

  // Función para actualizar las miniaturas visibles
  const updateThumbnails = (currentIndex) => {
    const start = currentIndex === 0 ? videos.length - 1 : currentIndex - 1;
    const nextThumbnails = [
      (start) % videos.length,
      (start + 1) % videos.length,
      (start + 2) % videos.length
    ];
    setVisibleThumbnails(nextThumbnails);
  };

  // useEffect para el cambio automático de video cada 8 segundos
  useEffect(() => {
    // Solo iniciamos el intervalo si no existe uno activo
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setFadeOutVideo(true); // Activamos el desvanecimiento
        setTimeout(() => {
          nextVideo(); // Cambiar el video
        }, 200); // Aseguramos que la animación de desvanecimiento dure 200ms
      }, 8000); // 8000ms = 8 segundos
    }

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalRef.current);
  }, []); // Solo se ejecuta al montar el componente

  // useEffect para reiniciar el intervalo cuando el usuario cambia el video manualmente
  useEffect(() => {
    // Limpiar el intervalo previo
    clearInterval(intervalRef.current);

    // Reiniciar el intervalo cuando cambie el video manualmente
    intervalRef.current = setInterval(() => {
      setFadeOutVideo(true);
      setTimeout(() => {
        nextVideo(); // Cambiar el video automáticamente
      }, 200);
    }, 8000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalRef.current);
  }, [currentVideo]); // Esto se ejecutará cada vez que se cambie `currentVideo`

  return (
    <div className="hero-container">
      <div className="hero-video-container">
        <video
          src={videos[currentVideo].src}
          alt={`hero-video-${currentVideo}`}
          className={`hero-video ${fadeOutVideo ? 'fade-out' : 'fade-in'}`}
          autoPlay
          muted
          loop
        />
        <div className="hero-text">
          <p key={`text1-${currentVideo}`} className="text1">{videos[currentVideo].text1}</p>
          <p key={`text2-${currentVideo}`} className="text2">{videos[currentVideo].text2}</p>
        </div>

        <button className="arrow-button left-arrow" onClick={prevVideo}>
          &lt;
        </button>
        <button className="arrow-button right-arrow" onClick={nextVideo}>
          &gt;
        </button>
      </div>

      <div className="thumbnail-container">
        {visibleThumbnails.map((index) => (
          <video
            key={index}
            src={videos[index].src}
            className={`thumbnail ${index === currentVideo ? 'active' : ''}`}
            onClick={() => changeVideo(index)}
            muted
            loop
            autoPlay
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
