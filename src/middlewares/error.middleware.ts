import { NextFunction, Request, Response } from "express";
import { ApiError } from "../error/ApiError.js";

export const errorMiddleware = (
  err: any | ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    console.error(err.message, "ApiError");
    return res.status(err.status).json({ message: err.message });
  }
  console.error(err);
  res.status(500).json({ message: "Server Error" });
};
