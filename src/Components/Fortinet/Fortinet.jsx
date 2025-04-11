import React from 'react'
import "./Fortinet.css"

const Fortinet = () => {
  return (
    <div className="fortinet-container">
            <img src="/image/Ellipse-mayor.png" className="ellipse-mov" />
            <img src="/image/Ellipse-mayor.png" className="ellipse-mov2" />
      <div className='fortinet-titulo'>
        <img src="./image/Fortinet.png" alt="" className='logo-fortinet'/>
        <div className="etiqueta-diagonal">
          Comprende tus vulnerabilidades.
        </div>
      </div>
      
      <div className='ejemplos'>
        <div className='empresaA'>
          <img src="./image/EmpresaA.png" alt=""/>
              <h4>Empresa A</h4>  
            <div className="etiqueta">
              No conoce el estado de vulnerabilidad de su red.
            </div>
        </div>

        <div className='empresaB'>
          <img src="./image/EmpresaB.png" alt=""/>
              <h4>Empresa B</h4>  
            <div className="etiqueta">
              Pidió ayuda para conocer las vulnerabilidades de su red.
            </div>
        </div>   
      </div>

      <div className='resultado'>
        <div className="etiqueta-diagonal2">
          Como resultado...
        </div>
        <div className='text-img'>
          <div className='text'>
              <p>1 - Detección de amenazas ocultas.</p>
              <p>2- Evaluación del rendimiento de la red.</p>
              <p>3-  Medición de la eficacia de la seguridad actual.</p>
              <p>4- Identificación de aplicaciones de alto riesgo.</p>
              <p>5-  Visibilidad completa del trafico de la red.</p>
              <p>6- Recomendaciones de mejora.</p>
              <p>7- Informes detallados y personalizados.</p>
          </div>
          <div className='imagen'>
              <img src="./image/Empresa-fortinet.png" alt="" />
          </div>
        </div>
      </div>

      <div className='contactanos'>
        <div className="etiqueta-diagonal3">
          ¿Con cuál de los dos te gustaría identificarte?
        </div>
        
        <div className='cuadro0 cuadroG'>
          <p>¿Qué esperas para tener visibilidad y control de lo que pasa en tu red?</p>
          <p>¿Estás cansado de pagar planes costosos de internet y sigue lenta tú red?</p>
          <div className='actualizate'>
            <p>Actualízate con</p>
            <img src="./image/Fortinet.png" alt="" />
          </div>
            <hr className="linea-divisora" />
            <button type='submit'>Contactanos aquí</button>
        </div>
      </div>
    </div>
  );
};

export default Fortinet
