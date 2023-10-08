import { IUser } from "./interface/login.interface";

class AuthService {
  login(data: IUser) {
    return data;
  }
  register(data: IUser) {
    return data;
  }
}

export default new AuthService();
