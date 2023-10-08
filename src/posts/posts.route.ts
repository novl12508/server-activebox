import { Router } from "express";
import postsController from "./posts.controller.js";

const posts_router = Router();

posts_router.get("/", postsController.getAll);

export { posts_router };
