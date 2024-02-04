import { Router } from "express";
import { body } from "express-validator";

import productController from "./product.controller.js";

const products_route = Router();

// GET api/products/
// POST api/products/create
products_route.get("/", productController.getAll);
products_route.post("/create", productController.create);

export { products_route };
