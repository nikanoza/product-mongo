import {
  createProduct,
  getProducts,
} from "../controllers/product-controller.js";
import express from "express";

const productRouter = express.Router();

productRouter.get("/products", getProducts);
productRouter.post("/products", createProduct);

export default productRouter;
