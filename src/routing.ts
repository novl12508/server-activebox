import { Router } from "express";

import { posts_router } from "./posts/posts.route.js";
import { auth_router } from "./auth/auth.route.js";
import { AuthMiddleware } from "./middlewares/auth.middleware.js";
import { products_route } from "./products/product.route.js";
import { basket_route } from "./basket/basket.route.js";

const router = Router();

// POST api/auth/login
// POST api/auth/register
router.use("/auth", auth_router);

// GET api/posts
// POST api/posts/create
router.use("/posts", posts_router);

// GET api/products
// POST api/products
router.use("/products", products_route);

router.use("/basket", basket_route);

export { router };
