import express, { Request } from "express";
import StandardResponse from "../../utils/StandardResponse";
import OrdersService from "./services";
import authMiddleware from "../../middlewares/authentication";

const ordersRouter = express.Router();
const ordersService = new OrdersService();

ordersRouter.post(
  "/insertItemInOrder",
  authMiddleware,
  async (req: Request & { userId?: string }, res) => {
    const { userId } = req;
    const { productId } = req.body;

    if (!userId) {
      return res.status(404).json({ message: "User not authenticated!" });
    }

    if (!productId) {
      return res.status(404).json({ message: "Field can't be empty" });
    }

    try {
      const itemInserted = await ordersService.insertItemInOrder({
        productId,
        userId,
      });

      return StandardResponse.responseWrapper({
        message: "ok",
        res,
        data: itemInserted,
        statusCode: 200,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ mesage: "Erro ao adicionar item ao carrinho" });
    }
  },
);

ordersRouter.get(
  "/getOrders",
  authMiddleware,
  async (req: Request & { userId?: string }, res) => {
    const { userId } = req;

    if (!userId) {
      return res.status(404).json({ message: "You need Login" });
    }

    try {
      const allOrderFromUser = await ordersService.getAllOrders(userId);

      return StandardResponse.responseWrapper({
        message: "ok",
        res,
        data: allOrderFromUser,
        statusCode: 200,
      });
    } catch (error) {
      return res.status(500).json({ mesage: "Erro ao buscar ordem" });
    }
  },
);

ordersRouter.delete(
  "/deleteOrder/:id",
  authMiddleware,
  async (req: Request & { userId?: string }, res) => {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Invalid Order ID format" });
    }

    try {
      const deletedOrder = await ordersService.deleteOrder(id);

      return StandardResponse.responseWrapper({
        message: "Order deleted successfully",
        res,
        data: deletedOrder,
        statusCode: 204,
      });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao deletar carrinho" });
    }
  },
);

ordersRouter.delete(
  "/deleteOrderItem/:id",
  authMiddleware,
  async (req: Request & { userId?: string }, res) => {
    const { id } = req.params;

    if (!id) {
      return res
        .status(404)
        .json({ message: "Necessário passar o id do item a ser deletado!" });
    }

    try {
      const deletedItem = await ordersService.deleteOrderItem(id);

      return StandardResponse.responseWrapper({
        message: "Order item deleted successfully",
        res,
        data: deletedItem,
        statusCode: 204,
      });
    } catch (error) {
      throw error;
    }
  },
);

ordersRouter.patch(
  "/updateOrderStatus/:id",
  authMiddleware,
  async (req: Request & { userId?: string }, res) => {
    const { id } = req.params;
    const { status } = req.body;

    // Validate status
    if (!status || !["active", "closed"].includes(status)) {
      return res
        .status(400)
        .json({ message: "Field 'status' should not be null" });
    }

    try {
      const updatedOrder = await ordersService.updateOrder(id, {
        status,
      });

      return StandardResponse.responseWrapper({
        message: "Order status updated successfully",
        res,
        data: updatedOrder,
        statusCode: 200,
      });
    } catch (error) {
      return res.status(500).json({ mesage: "Erro ao atualizar o carrinho" });
    }
  },
);

// make sure the id it's the orderItemId, not the productId
ordersRouter.patch(
  "/updateOrderItem/:id",
  authMiddleware,
  async (req: Request & { userId?: string }, res) => {
    const { id } = req.params;
    const { quantity } = req.body;


    try {
      const updatedItem = await ordersService.updateOrderItem(id, { quantity });

      return StandardResponse.responseWrapper({
        message: "Order status updated successfully",
        res,
        data: updatedItem,
        statusCode: 200,
      });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },
);

export default ordersRouter;