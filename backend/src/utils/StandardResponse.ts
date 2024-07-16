import { Response } from "express";

export type ResponseType = {
  message?: string;
  status?: number;
  data?: unknown;
  res: Response;
};

class StandardResponse {
  static responseWrapper(arg: ResponseType) {
    const { message, status, data, res } = arg;
    res.status(status ?? 404).json({
      message,
      status,
      data,
    });
  }
}

export default StandardResponse;

// Object in arg of responseWrapper :FIXME
