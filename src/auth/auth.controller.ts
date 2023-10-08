import { Request, Response } from "express";
import authService from "./auth.service.js";
import { IUser } from "./interface/login.interface.js";

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const body: IUser = req.body;
      console.log(body);
      const data = await authService.login(body);
      res.json(data);
    } catch (err) {
      if (err instanceof Error) {
        res.json({ message: err.message });
      }
      console.error(err);
    }
  }
  async register(req: Request, res: Response) {
    try {
      const body: IUser = req.body;
      const data = await authService.register(body);
      res.json(data);
    } catch (err) {
      if (err instanceof Error) {
        res.json({ message: err.message });
      }
      console.error(err);
    }
  }
}

export default new AuthController();
