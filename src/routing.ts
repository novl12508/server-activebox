import { Router } from "express";
import { posts_router } from "./posts/posts.route.js";
import { auth_router } from "./auth/auth.route.js";

const router = Router();

// POST api/auth/login
// POST api/auth/register
router.use("/auth", auth_router);

// GET api/posts
router.use("/posts", posts_router);

export { router };
