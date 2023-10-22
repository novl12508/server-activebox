import { IUser } from "./interface/login.interface";
import { User } from "./entities/user.entite.js";
import { Repository } from "typeorm";
import { AppBD } from "../bd.js";
import bcryptjs from "bcryptjs";
import { jwtGenerate } from "./jwt.generate.js";

class AuthService {
  userRepo: Repository<User>;
  constructor() {
    this.userRepo = AppBD.getRepository(User);
  }

  async login(data: IUser) {
    try {
      const { email, password } = data;
      const user = await this.userRepo.findOneBy({ email });

      if (!user) {
        throw Error("Такого пользователя не существует");
      }

      const compare = await bcryptjs.compare(password, user.password);

      if (!compare) {
        throw Error("Неверный email или пароль");
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
      const candidate = await this.userRepo.findOneBy({ email });

      console.log(name);

      if (candidate) {
        throw Error("Такой пользователь уже зарегистрирован");
      }

      const salt = await bcryptjs.genSalt(5);
      const hash = await bcryptjs.hash(password, salt);

      const user = await this.userRepo.create({ email, name, password: hash });
      await this.userRepo.save(user);

      const tokens = await jwtGenerate(user);
      return { id: user.id, email: user.email, name: user.name, tokens };
    } catch (err) {
      throw err;
    }
  }
}

export default new AuthService();
