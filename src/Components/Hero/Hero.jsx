import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const videos = [
    {
      src: "/videos/vid5.mp4",
      text1: "Águila majestuosa sobrevolando las montañas",
      text2: "Una visión única desde el cielo",
    },
    {
      src: "/videos/vid2.mp4",
      text1: "Búho observando la noche con sabiduría",
      text2: "Guardian de la oscuridad",
    },
    {
      src: "/videos/vid3.mp4",
      text1: "Cuervo en vuelo, símbolo de misterio",
      text2: "La sombra que guía",
    },
    {
      src: "/videos/vid4.mp4",
      text1: "Mariposa revoloteando en el jardín",
      text2: "El color de la naturaleza",
    },
    {
      src: "/videos/vid9.mp4",
      text1: "Búho posado, guardian de la oscuridad",
      text2: "Silencio y misterio",
    },
    {
      src: "/videos/vid6.mp4",
      text1: "Águila surcando los cielos al amanecer",
      text2: "La fuerza del viento",
    },
    {
      src: "/videos/vid7.mp4",
      text1: "Pino real en su esplendor",
      text2: "La majestuosidad de la naturaleza",
    },
    {
      src: "/videos/vid8.mp4",
      text1: "Loro colorido en el paraíso tropical",
      text2: "La alegría de la selva",
    },
    {
      src: "/videos/vid1.mp4",
      text1: "Garza en su hábitat natural",
      text2: "La serenidad del agua",
    },
    {
      src: "/videos/vid10.mp4",
      text1: "Mariposa descansando sobre una flor",
      text2: "La belleza efímera",
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(0);
  const [fadeOutVideo, setFadeOutVideo] = useState(false);
  const [visibleThumbnails, setVisibleThumbnails] = useState([9, 0, 1]);
  const [isPlaying, setIsPlaying] = useState(true); // Estado para controlar play/pause

  const intervalRef = useRef(null);
  const videoRefs = useRef(videos.map(() => React.createRef())); // Referencias para los videos

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
      start % videos.length,
      (start + 1) % videos.length,
      (start + 2) % videos.length,
    ];
    setVisibleThumbnails(nextThumbnails);
  };

  // useEffect para el cambio automático de video cada 8 segundos
  useEffect(() => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setFadeOutVideo(true); // Activar el desvanecimiento
        setTimeout(() => {
          nextVideo(); // Cambiar el video
        }, 200); // Duración de la animación de desvanecimiento (200ms)
      }, 8000); // 8000ms = 8 segundos
    }

    return () => clearInterval(intervalRef.current);
  }, []); // Este useEffect solo se ejecuta una vez al montar el componente

  // useEffect para reiniciar el intervalo cuando el usuario cambia el video manualmente
  useEffect(() => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setFadeOutVideo(true);
      setTimeout(() => {
        nextVideo();
      }, 200);
    }, 8000);

    return () => clearInterval(intervalRef.current);
  }, [currentVideo]); // Esto se ejecutará cada vez que se cambie `currentVideo`

  // Función para alternar play/pause
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
    if (isPlaying) {
      // Si está en play, pausamos todos los videos
      videoRefs.current.forEach((videoRef) => {
        if (videoRef.current) videoRef.current.pause();
      });
    } else {
      // Si está en pause, reproducimos todos los videos
      videoRefs.current.forEach((videoRef) => {
        if (videoRef.current) videoRef.current.play();
      });
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-video-container">
        <video
          ref={videoRefs.current[currentVideo]} // Asignar la referencia
          src={videos[currentVideo].src}
          alt={`hero-video-${currentVideo}`}
          className={`hero-video ${fadeOutVideo ? "fade-out" : "fade-in"}`}
          autoPlay={isPlaying} // Controlar si se reproduce automáticamente
          muted
          loop
        />
        <div className="hero-text">
          <p key={`text1-${currentVideo}`} className="text1">
            {videos[currentVideo].text1}
          </p>
          <p key={`text2-${currentVideo}`} className="text2">
            {videos[currentVideo].text2}
          </p>
        </div>

        <button className="arrow-button left-arrow" onClick={prevVideo}>
          &lt;
        </button>
        <button className="arrow-button right-arrow" onClick={nextVideo}>
          &gt;
        </button>
      </div>

      <div className="thumbnail-container">
        {/* Botón de Play/Pause */}
        <button className="play-pause-button" onClick={togglePlayPause}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>

        {visibleThumbnails.map((index) => (
          <video
            key={index}
            ref={videoRefs.current[index]} // Asignar la referencia
            src={videos[index].src}
            className={`thumbnail ${index === currentVideo ? "active" : ""}`}
            onClick={() => changeVideo(index)}
            muted
            loop
            autoPlay={false} // Las miniaturas nunca se reproducen
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
