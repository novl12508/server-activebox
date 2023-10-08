import path from "path";
import dotenv from "dotenv";

export function configEnv() {
  const dirname = path.resolve();

  return dotenv.config({
    path: path.join(dirname, "env", ".env"),
  });
}
