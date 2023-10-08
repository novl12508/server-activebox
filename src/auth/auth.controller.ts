import { Request, Response } from "express";
import authService from "./auth.service.js";
import { IUser } from "./interface/login.interface.js";

class AuthController {
  login(req: Request, res: Response) {
    const body: IUser = req.body;
    console.log(body);
    const data = authService.login(body);
    res.json(data);
  }
  register(req: Request, res: Response) {
    const body: IUser = req.body;
    const data = authService.register(body);
    res.json(data);
  }
}

export default new AuthController();
