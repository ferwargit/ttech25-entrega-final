import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const login = (req, res) => {
  const { email, password } = req.body;

  // Simulación de validación de usuario (Hardcodeado por ahora)
  const mockUser = {
    email: "admin@test.com",
    password: "123456", // En la vida real, esto estaría encriptado
    role: "admin",
  };

  try {
    // Validar si los datos coinciden
    if (email === mockUser.email && password === mockUser.password) {
      // Creamos el payload (la info que viajará DENTRO del token)
      const tokenPayload = {
        email: mockUser.email,
        role: mockUser.role,
      };

      // Generamos el Token (Firma con la clave secreta)
      const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      // Responde con éxito y el token
      res.status(200).json({
        message: "Autenticación exitosa",
        token: token,
      });
    } else {
      // Error 401: No autorizado (Credenciales mal)
      res.status(401).json({ error: "Credenciales inválidas" });
    }
  } catch (error) {
    // Error 500: Error interno del servidor
    res
      .status(500)
      .json({ error: "Error en el servidor al intentar loguearse" });
  }
};
