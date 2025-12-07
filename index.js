import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import authRoutes from "./src/routes/auth.routes.js";
import productRoutes from "./src/routes/product.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "API funcionando correctamente" });
});

// Rutas de Autenticación
app.use("/auth", authRoutes);

// Rutas de Productos
app.use("/api/products", productRoutes);

// MANEJO DE ERRORES (Siempre al final)
app.use((req, res, next) => {
  res.status(404).json({
    error: "Recurso no encontrado",
    message: "La ruta solicitada no existe.",
  });
});

app.listen(PORT, () => {
  console.log(`El servidor se está ejecutando en http://localhost:${PORT}`);
});
