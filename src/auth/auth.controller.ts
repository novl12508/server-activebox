import { Request, Response } from "express";
import authService from "./auth.service.js";
import { IUser } from "./interface/login.interface.js";

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const body: IUser = req.body;
      console.log(body);
      const { tokens, ...data } = await authService.login(body);

      res.cookie("refresh_token", tokens.refresh_token, { httpOnly: true });
      res.json({ data, access_token: tokens.access_token });
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message });
      }
      console.error(err);
    }
  }
  async register(req: Request, res: Response) {
    try {
      const body: IUser = req.body;
      const { tokens, ...data } = await authService.register(body);

      res.cookie("refresh_token", tokens.refresh_token, { httpOnly: true });
      res.json({ data, access_token: tokens.access_token });
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message });
      }
      console.error(err);
    }
  }
}

export default new AuthController();
