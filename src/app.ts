import express from "express";
import dotenv from "dotenv";
import path from "path";

const dirname = path.resolve();

dotenv.config({ path: path.join(dirname, "env", ".env") });
const app = express();

const HOST = process.env.HOST;
const PORT = Number(process.env.PORT);

const start = async () => {
  try {
    app.listen(PORT, HOST, () => {
      console.log(`Server started ${HOST}:${PORT}`);
    });
  } catch (err) {
    console.error(err, "App.js Error");
  }
};

start();
