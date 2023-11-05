import { Posts } from "./posts/entities/posts.entite.js";
import { User } from "./auth/entities/user.entite.js";
import { configEnv } from "./config.env.js";
import { DataSource } from "typeorm";

configEnv();

export const AppBD = new DataSource({
  type: "postgres",
  host: process.env.BD_HOST,
  port: Number(process.env.BD_PORT),
  database: process.env.BD_NAME,
  username: process.env.BD_USERNAME,
  password: process.env.BD_PASSWORD,
  logging: true,
  synchronize: true,
  entities: [User, Posts],
});
