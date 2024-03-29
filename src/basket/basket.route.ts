import { Router } from "express";
import basketController from "./basket.controller.js";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";

const basket_route = Router();

//GET api/basket
//GET api/basket/:id
//POST api/basket/create
//DELETE api/basket/create
basket_route.get("/", AuthMiddleware, basketController.getAll);
basket_route.get("/:id", AuthMiddleware, basketController.getOne);
basket_route.post("/create", AuthMiddleware, basketController.create);
basket_route.delete("/delete", AuthMiddleware, basketController.delete);

export { basket_route };
