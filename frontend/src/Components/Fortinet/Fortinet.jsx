import React, { useEffect, useState } from "react";
import "./Fortinet.css";

const Fortinet = () => {
  const [visible, setVisible] = useState({
    titulo: false,
    ejemplos: false,
    resultado: false,
    contactanos: false,
  });

  // Función que se ejecuta en el evento de scroll
  const handleScroll = () => {
    // Obtenemos el área visible del viewport
    const viewportHeight = window.innerHeight;

    // Verificamos la posición de cada elemento
    const titulo = document.querySelector(".fortinet-titulo");
    const ejemplos = document.querySelector(".ejemplos");
    const resultado = document.querySelector(".resultado");
    const contactanos = document.querySelector(".contactanos");

    // Comprobamos si los elementos están dentro del viewport
    const checkVisibility = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top <= viewportHeight * 0.8 && rect.bottom >= 0;
    };

    // Si el elemento está dentro del viewport, aplicamos la animación
    setVisible({
      titulo: checkVisibility(titulo),
      ejemplos: checkVisibility(ejemplos),
      resultado: checkVisibility(resultado),
      contactanos: checkVisibility(contactanos),
    });
  };

  // Hacer scroll al cargar la página
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Ejecutamos la comprobación al inicio
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="fortinet" className="fortinet-container">
      <img src="/image/Ellipse-mayor.png" className="ellipse-mov" />
      <img src="/image/Ellipse-mayor.png" className="ellipse-mov2" />

      <div
        className={`fortinet-titulo ${visible.titulo ? "animate-slide" : ""}`}
      >
        <img src="./image/Fortinet.png" alt="" className="logo-fortinet" />
        <div className="etiqueta-diagonal">Comprende tus vulnerabilidades.</div>
      </div>

      <div className={`ejemplos ${visible.ejemplos ? "animate-slide" : ""}`}>
        <div className="empresaA">
          <img src="./image/EmpresaA.png" alt="" />
          <h4>Empresa A</h4>
          <div className="etiqueta">
            No conoce el estado de vulnerabilidad de su red.
          </div>
        </div>

        <div className="empresaB">
          <img src="./image/EmpresaB.png" alt="" />
          <h4>Empresa B</h4>
          <div className="etiqueta">
            Pidió ayuda para conocer las vulnerabilidades de su red.
          </div>
        </div>
      </div>

      <div
        className={`resultado ${
          visible.resultado ? "animate-slide-right" : ""
        }`}
      >
        <div className="etiqueta-diagonal2">Como resultado...</div>
        <div className="text-img">
          <div className="text">
            <p>1 - Detección de amenazas ocultas.</p>
            <p>2- Evaluación del rendimiento de la red.</p>
            <p>3- Medición de la eficacia de la seguridad actual.</p>
            <p>4- Identificación de aplicaciones de alto riesgo.</p>
            <p>5- Visibilidad completa del trafico de la red.</p>
            <p>6- Recomendaciones de mejora.</p>
            <p>7- Informes detallados y personalizados.</p>
          </div>
          <div className="imagen">
            <img src="./image/Empresa-fortinet.png" alt="" />
          </div>
        </div>
      </div>

      <div
        className={`contactanos ${visible.contactanos ? "animate-slide" : ""}`}
      >
        <div className="etiqueta-diagonal3">
          ¿Con cuál de los dos te gustaría identificarte?
        </div>

        <div className="cuadro0 cuadroG">
          <p>
            ¿Qué esperas para tener visibilidad y control de lo que pasa en tu
            red?
          </p>
          <p>
            ¿Estás cansado de pagar planes costosos de internet y sigue lenta tú
            red?
          </p>
          <div className="actualizate">
            <p>Actualízate con</p>
            <img src="./image/Fortinet.png" alt="" />
          </div>
          <hr className="linea-divisora" />
          <button
            type="submit"
            onClick={() => {
              const section = document.getElementById("contacto");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
              setMenuOpen(false); // cerrar el menú al hacer clic
            }}
          >
            Contactanos aquí
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fortinet;
