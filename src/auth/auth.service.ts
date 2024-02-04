import { IUser } from "./interface/login.interface";
import bcryptjs from "bcryptjs";
import { jwtGenerate } from "./jwt.generate.js";
import userRepository from "../repositories/user.repository.js";
import { ApiError } from "../error/ApiError.js";

class AuthService {
  async login(data: IUser) {
    try {
      const { email, password } = data;
      const user = await userRepository.findByOne(email);

      if (!user) {
        throw ApiError.badRequest("Такого пользователя не существует");
        // throw Error("Такого пользователя не существует");
      }

      const compare = await bcryptjs.compare(password, user.password);

      if (!compare) {
        throw ApiError.badRequest("Неверный email или пароль");
        // throw Error();
      }

      const tokens = await jwtGenerate(user);
      return { id: user.id, email: user.email, name: user.name, tokens };
    } catch (err) {
      throw err;
    }
  }
  async register(data: IUser) {
    try {
      const { email, name, password } = data;

      if (!name) {
        throw ApiError.badRequest("Поле name не может быть пустым");
        // throw Error("Поле name не может быть пустым");
      }

      const candidate = await userRepository.findByOne(email);

      if (candidate) {
        throw ApiError.badRequest("Такой пользователь уже зарегистрирован");
        // throw Error("Такой пользователь уже зарегистрирован");
      }

      const salt = await bcryptjs.genSalt(5);
      const hash = await bcryptjs.hash(password, salt);

      const user = await userRepository.create({ email, name, password: hash });

      const tokens = await jwtGenerate(user);
      return { id: user.id, email: user.email, name: user.name, tokens };
    } catch (err) {
      throw err;
    }
  }
}

export default new AuthService();
