import { NextFunction, Response } from "express";

import { IRequest } from "../middlewares/auth.middleware.js";
import basketService from "./basket.service.js";

class BasketController {
  async getAll(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.user;
      const productsByUser = await basketService.getAll(id);
      console.log(productsByUser?.products);
      res.status(200).json(productsByUser?.products);
    } catch (error) {
      next(error);
    }
  }

  async create(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.user;
      const { id: productId, img } = req.body;
      console.log(productId);
      const basket = await basketService.create(id, productId, img);
      res.status(201).json(basket);
    } catch (error) {
      next(error);
    }
  }

  async getOne(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      console.log(id);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { productId } = req.body;
      await basketService.delete(+productId);
      res.status(200).json({ message: "Продукт успешно удален" });
    } catch (error) {
      next(error);
    }
  }
}

export default new BasketController();
