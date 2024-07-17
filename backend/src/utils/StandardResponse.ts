import { Response } from "express";

export type ResponseType = {
  message?: string;
  statusCode?: number;
  data?: unknown;
  res: Response;
};

class StandardResponse {
  static responseWrapper(arg: ResponseType) {
    const { message, statusCode: status, data, res } = arg;
    res.status(status ?? 404).json({
      message,
      status,
      data,
    });
  }
}

export default StandardResponse;
