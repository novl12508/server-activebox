import { Request, Response, Router } from "express";
import authController from "./auth.controller.js";

const auth_router = Router();

auth_router.post("/login", authController.login);
auth_router.post("/register", authController.register);
auth_router.post("/logout", authController.logout);

export { auth_router };
