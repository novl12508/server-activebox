import { Request, Response, Router } from "express";
import authController from "./auth.controller.js";
import { body } from "express-validator";

const auth_router = Router();

auth_router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 15 }),
  authController.login
);
auth_router.post(
  "/register",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 15 }),
  body("name").notEmpty(),
  authController.register
);
auth_router.post("/logout", authController.logout);

export { auth_router };
