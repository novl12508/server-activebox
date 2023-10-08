import { Request, Response } from "express";
import authService from "./auth.service.js";

class AuthController {
  login(req: Request, res: Response) {
    const data = authService.login();
    res.json(data);
  }
  register(req: Request, res: Response) {
    const data = authService.register();
    res.json(data);
  }
}

export default new AuthController();
