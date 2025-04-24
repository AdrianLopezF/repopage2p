import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";  // Cambio de require a import

dotenv.config(); // Cargar las variables de entorno desde .env


const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173"
}));

const PORT = process.env.PORT || 5000;

// Configuración del transporte SMTP de Resend
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // notificaciones@2-protection.com
      pass: process.env.GMAIL_PASS, // Contraseña o App Password
    },
  });

app.post("/send-email", (req, res) => {
  const { nombre, email, telefono, empresa, mensaje } = req.body;
  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ success: false, error: "Faltan campos requeridos." });
  }

  const mailOptions = {
    from: `"${nombre} - ${empresa}" <${process.env.GMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `Nuevo mensaje de ${nombre} - ${empresa}`,
    text: `
      Nombre: ${nombre}
      Email: ${email}
      Teléfono: ${telefono}
      Empresa: ${empresa}
  
      Mensaje:
      ${mensaje}
    `,
    replyTo: email // Esto sí hará que al responder, se vaya al correo del usuario
  };
   

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ success: false, error: error.message });
    }
    console.log("Correo enviado: " + info.response);
    return res.status(200).json({ success: true });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
