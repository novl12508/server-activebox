import { Router } from "express";
import { body } from "express-validator";
import basketController from "./basket.controller.js";

const basket_route = Router();

//GET api/basket
//GET api/basket/:id
//POST api/basket/create
basket_route.get("/", basketController.getAll);
basket_route.get("/:id", basketController.getOne);
basket_route.post("/create/:productId", basketController.create);

export { basket_route };
