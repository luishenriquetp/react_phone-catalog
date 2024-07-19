import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import StandardResponse from "../utils/StandardResponse";

function errorHandling(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof AppError) {
    StandardResponse.responseWrapper({
      res,
      data: [],
      message: err.msg,
      statusCode: err.statusCode
    })
    
    return;
  }

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
}

export default errorHandling;