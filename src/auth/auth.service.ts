class AuthService {
  login() {
    return { message: "login" };
  }
  register() {
    return { message: "register" };
  }
}

export default new AuthService();
