import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { router } from "./routing.js";
import { configEnv } from "./config.env.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

configEnv();
const app = express();

const HOST = process.env.HOST;
const PORT = Number(process.env.PORT);

const start = async () => {
  try {
    app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
    app.use(cookieParser());
    app.use(express.json());
    app.use("/api", router);
    app.use(errorMiddleware);

    app.listen(PORT, HOST, () => {
      console.log(`Server started http://${HOST}:${PORT}`);
    });
  } catch (err) {
    console.error(err, "App.js Error");
  }
};

start();
