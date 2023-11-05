import { Router } from "express";
import postsController from "./posts.controller.js";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";
import { body } from "express-validator";

const posts_router = Router();

posts_router.get("/", postsController.getAll);
posts_router.post(
  "/create",
  AuthMiddleware,
  body("title").notEmpty(),
  body("body").notEmpty(),
  postsController.create
);

export { posts_router };
