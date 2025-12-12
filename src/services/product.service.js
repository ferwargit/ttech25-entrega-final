import { ProductModel } from "../models/product.model.js";

export const ProductService = {
  async getAllProducts() {
    return await ProductModel.getAll();
  },

  async getProductById(id) {
    const product = await ProductModel.getById(id);
    if (!product) {
      throw new Error("Producto no encontrado");
    }
    return product;
  },

  async createProduct(data) {
    // Validaciones básicas
    if (!data.name || !data.price) {
      throw new Error("El nombre y el precio son obligatorios");
    }

    const priceNumber = Number(data.price);
    if (isNaN(priceNumber)) {
      throw new Error("El precio debe ser un número válido");
    }

    // Aseguramos que el precio sea un número y categorías un array
    const cleanData = {
      name: data.name,
      price: priceNumber,
      categories: Array.isArray(data.categories) ? data.categories : [],
    };

    return await ProductModel.create(cleanData);
  },

  async deleteProduct(id) {
    // Primero verificamos si existe
    const exists = await ProductModel.getById(id);
    if (!exists) {
      throw new Error("No se puede eliminar: Producto no encontrado");
    }
    return await ProductModel.remove(id);
  },
};
