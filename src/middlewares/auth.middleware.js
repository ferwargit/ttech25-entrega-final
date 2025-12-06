import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = (req, res, next) => {
  // Leemos el header 'Authorization'
  // El cliente suele enviar: "Bearer eyJhbGciOiJIUz..."
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(403).json({
      error: "Acceso denegado",
      message: "No se proporcionó un token de autenticación.",
    });
  }

  // Quitamos la palabra "Bearer "
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).json({
      error: "Acceso denegado",
      message: "Formato de token inválido.",
    });
  }

  // Verificamos el token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Si es válido, guardamos los datos del usuario en la request
    // para poder usarlos luego si es necesario
    req.user = decoded;

    // Pasa al siguiente paso - (El controlador)
    next();
  } catch (error) {
    return res.status(401).json({
      error: "Token inválido o expirado",
      message: "Por favor, inicie sesión nuevamente.",
    });
  }
};
