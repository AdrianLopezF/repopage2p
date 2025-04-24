import React, { useState } from "react";
import "./Contacto.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre) newErrors.nombre = "El nombre es obligatorio.";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Por favor, ingresa un correo electrónico válido.";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (formData.telefono && !phoneRegex.test(formData.telefono)) {
      newErrors.telefono = "El teléfono debe contener solo 10 dígitos numéricos.";
    }

    if (!formData.mensaje) newErrors.mensaje = "El mensaje es obligatorio.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setIsSent(true);

        // Después de 10 segundos, ocultar el mensaje
        setTimeout(() => {
          setIsSent(false);
        }, 10000); // 10000 ms = 10 segundos
      } else {
        alert("Hubo un problema al enviar el mensaje, por favor intenta nuevamente.");
      }

      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        mensaje: "",
      });
    } catch (error) {
      alert("Hubo un error de red, por favor intenta nuevamente.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contacto" className="contacto-container">
      <div className="contenedor-correo">
        <h2>Comúnicate con nosotros</h2>

        {isLoading ? (
          <div className="pantalla-carga">
            <div className="spinner"></div>
            <p>Enviando mensaje...</p>
          </div>
        ) : (
          <form className="formulario" onSubmit={handleSubmit}>
            <div className="content-inputs">
              <input
                type="text"
                placeholder="Nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
              {errors.nombre && <span className="error">{errors.nombre}</span>}

              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="content-inputs">
              <input
                type="tel"
                placeholder="Teléfono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
              />
              {errors.telefono && <span className="error">{errors.telefono}</span>}

              <input
                type="text"
                placeholder="Empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
              />
            </div>

            <textarea
              placeholder="Mensaje..."
              name="mensaje"
              rows={5}
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
            {errors.mensaje && <span className="error">{errors.mensaje}</span>}

            <button className="botonEnv" type="submit">
              <span>Enviar</span>
            </button>
          </form>
        )}

        {isSent && <p className="mensaje-enviado">¡Mensaje enviado con éxito!</p>}
      </div>

      <div className="contacto-lado">
        <img src="./image/Logo2.png" alt="Logo" className="imagen-logo" />
        <p>Síguenos en nuestras redes sociales:</p>
        <div className="redes">
          <img src="./image/Facebook.png" alt="Facebook" />
          <img src="./image/Tiktok.png" alt="TikTok" />
          <img src="./image/Instagram.png" alt="Instagram" />
        </div>
      </div>
    </div>
  );
};

export default Contacto;
