import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "API funcionando correctamente" });
});

app.use((req, res, next) => {
  res.status(404).json({
    error: "Recurso no encontrado",
    message: "La ruta solicitada no existe.",
  });
});

app.listen(PORT, () => {
  console.log(`El servidor se está ejecutando en http://localhost:${PORT}`);
});
