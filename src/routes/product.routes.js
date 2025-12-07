import { Router } from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

// GET /api/products -> Público (cualquiera puede ver el catálogo de productos)
router.get("/", getProducts);

// GET /api/products/:id -> Público
router.get("/:id", getProductById);

// POST /api/products/create -> Privado (requiere Token)
router.post("/create", verifyToken, createProduct);

// DELETE /api/products/:id -> Privado (requiere Token)
router.delete("/:id", verifyToken, deleteProduct);

export default router;
