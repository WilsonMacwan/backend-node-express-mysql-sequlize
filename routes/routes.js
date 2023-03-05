import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/Product.js";

const router = express.Router();

// Get all Products
router.get("/products", getProducts);
// Create a new Product
router.post("/products", createProduct);
// Get Product by ID
router.get("/products/:id", getProductById);
// Update Product
router.put("/products/:id", updateProduct);
// Delete Product
router.delete("/products/:id", deleteProduct);

export default router;
