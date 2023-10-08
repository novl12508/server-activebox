import express from "express";
import dotenv from "dotenv";
import path from "path";
import { router } from "./routing.js";

const dirname = path.resolve();

dotenv.config({ path: path.join(dirname, "env", ".env") });
const app = express();

const HOST = process.env.HOST;
const PORT = Number(process.env.PORT);

const start = async () => {
  try {
    app.use("/api", router);

    app.listen(PORT, HOST, () => {
      console.log(`Server started http://${HOST}:${PORT}`);
    });
  } catch (err) {
    console.error(err, "App.js Error");
  }
};

start();
