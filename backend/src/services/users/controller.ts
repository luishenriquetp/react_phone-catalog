import express, { Request } from "express";

import UserService from "./services";
import StandardResponse from "../../utils/StandardResponse";
import authMiddleware from "../../middlewares/authentication";

const usersRouter = express.Router();
const usersService = new UserService();

usersRouter.post("/createUser", async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const user = await usersService.createUser(name, email, password);

    StandardResponse.responseWrapper({
      message: "User Create with Success",
      res,
      data: user,
      statusCode: 200,
    });
  } catch (error) {
    next(error);
  }
});

usersRouter.post("/authenticateUser", async (req, res) => {
  const { email, password } = req.body;
  const dataAditional = await usersService.authenticateUser(email, password);

  StandardResponse.responseWrapper({
    message: "ok",
    res,
    data: {email, ...dataAditional},
    statusCode: 200,
  });
});

usersRouter.get(
  "/getUserData",
  authMiddleware,
  async (req: Request & { userId?: string }, res) => {
    const user = await usersService.getUserData(req.userId);

    StandardResponse.responseWrapper({
      message: "ok",
      res,
      data: user,
      statusCode: 200,
    });
  },
);

export default usersRouter;
