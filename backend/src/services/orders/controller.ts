import express, { Request } from "express";
import StandardResponse from "../../utils/StandardResponse";
import OrdersService from "./services";
import authMiddleware from "../../middlewares/authentication";
import { PrismaClient } from "@prisma/client";

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

ordersRouter.post("/addFav", authMiddleware, async (req: Request & { userId?: string }, res) => {
  const {userId, productId} = req.body;
  const client = new PrismaClient();

  console.log(req.userId, productId);

  await client.favorite.create({
    data: {
      userId: "811ad54b-bd4d-4077-a5a9-306b65d06353",
      productId,
    }
  })
})

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
