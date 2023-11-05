import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export interface IUser {
  id: number;
  email: string;
  password: string;
}

export interface IRequest extends Request {
  user: IUser;
}

export const AuthMiddleware = (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  const refresh_token = req.cookies.refresh_token;
  console.log(refresh_token);

  if (!refresh_token) {
    return res.status(401).json({ message: "Не авторизован" });
  }

  const user = jwt.verify(
    refresh_token,
    process.env.SECRET_REFRESH_TOKEN
  ) as IUser;

  if (!user) {
    return res.status(401).json({ message: "Не авторизован" });
  }
  req.user = user;
  next();
};
