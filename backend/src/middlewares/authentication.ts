import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import AppError from "../errors/AppError";

const JWT_SECRET = "seu_segredo_jwtmuitosecretonossa"; // This will be env FIXME:

function authMiddleware(
  req: Request & { userId?: string },
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token not found!" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET) as { userId: string };
    req.userId = decodedToken.userId;

    return next();
  } catch (error) {
    throw new AppError("Not valid Token Auth", 400);
  }
}

export default authMiddleware;
