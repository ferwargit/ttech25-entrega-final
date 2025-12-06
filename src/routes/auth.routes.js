import { Router } from "express";
import { login } from "../controllers/auth.controller.js";

const router = Router();

// Definimos la ruta POST para /login
// La ruta final será: /auth/login (porque el prefijo /auth lo ponemos en index.js)
router.post("/login", login);

export default router;
