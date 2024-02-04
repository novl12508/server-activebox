import { Response } from "express";
import { validationResult } from "express-validator";

import { IRequest } from "../middlewares/auth.middleware.js";
import { IProductData } from "./products.interface.js";
import productsService from "./products.service.js";

export interface IProduct {
  title: string;
  body: string;
}

class ProductController {
  async getAll(req: IRequest, res: Response) {
    try {
      const products = await productsService.all();
      res.status(200).json(products);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      }
      console.log(error);
      res.status(500).end();
    }
  }
  async create(req: IRequest, res: Response) {
    try {
      const result = validationResult(req);

      if (!result.isEmpty()) {
        return res.status(400).json(result.array());
      }
      const data = req.body as IProductData;
      const product = await productsService.create(data);
      res.status(201).json(product);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      }
      console.log(error);
      res.status(500).end();
    }
  }

  async getOne(req: IRequest, res: Response) {
    try {
      const { id } = req.params;
      const product = await productsService.getOne(id);
      res.status(200).json(product);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      }
      console.log(error);
      res.status(500).end();
    }
  }
}

export default new ProductController();
