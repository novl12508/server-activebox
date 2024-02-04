export class ApiError {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }
  static badRequest(message: string = "Некорректные данные") {
    return new ApiError(400, message);
  }
  static noAuthorizer(message: string = "Не авторизован") {
    return new ApiError(401, message);
  }
  static notFound(message: string = "Не найдено") {
    return new ApiError(404, message);
  }
}
