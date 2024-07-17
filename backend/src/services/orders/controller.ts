import express, { Request } from "express";
import StandardResponse from "../../utils/StandardResponse";
import OrdersService from "./services";
import authMiddleware from "../../middlewares/authentication";

const ordersRouter = express.Router();
const ordersService = new OrdersService();

ordersRouter.post(
  "/insertOrder",
  authMiddleware,
  async (req: Request & { userId?: string }, res) => {
    const createdOrder = await ordersService.createOrder({
      status: "active",
      userId: req.userId!,
    });

    StandardResponse.responseWrapper({
      message: "ok",
      res,
      data: createdOrder,
      statusCode: 200,
    });
  },
);

ordersRouter.post(
  "/insertItemInOrder",
  authMiddleware,
  async (req: Request & { userId?: string }, res) => {
    const data = req.body;
    const itemInserted = await ordersService.insertItemInOrder(data);

    StandardResponse.responseWrapper({
      message: "ok",
      res,
      data: itemInserted,
      statusCode: 200,
    });
  },
);

ordersRouter.get(
  "/getOrders",
  authMiddleware,
  async (req: Request & { userId?: string }, res) => {
    const { userId } = req.body;

    const allOrderFromUser = await ordersService.getAllOrders(userId);

    StandardResponse.responseWrapper({
      message: "ok",
      res,
      data: allOrderFromUser,
      statusCode: 200,
    });
  },
);

export default ordersRouter;
