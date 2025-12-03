import express from "express";

const app = express();

app.use((req, res, next) => {
  res.status(404).json({ error: "Recurso no encontrado" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`El servidor se está ejecutando en http://localhost:${PORT}`);
});
