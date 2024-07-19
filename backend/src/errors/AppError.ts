class AppError {
  msg: string;
  statusCode: number;

  constructor(message: string = "", statusCode: number = 400) {
    this.msg = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
