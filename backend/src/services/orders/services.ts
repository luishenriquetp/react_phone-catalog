import { PrismaClient } from "@prisma/client";
import AppError from "../../errors/AppError";

const prisma = new PrismaClient();

class OrdersService {
  async createOrder(order: { userId: string; status: "active" | "closed" }) {
    const { userId, status } = order;
    try {
      const createdOrder = await prisma.order.create({
        data: {
          userId,
          status,
        },
      });

      return createdOrder;
    } catch {
      throw new AppError("Erro ao criar ordem", 404);
    }
  }

  async insertItemInOrder(item: {
    orderId: string;
    productId: string;
    quantity: number;
    totalPrice: number;
  }) {
    const { orderId, productId, quantity, totalPrice } = item;
    try {
      const createdItem = await prisma.orderItem.create({
        data: {
          orderId,
          productId,
          quantity,
          totalPrice,
        },
      });

      return createdItem;
    } catch {
      throw new AppError("Erro ao criar item na order", 404);
    }
  }

  async getAllOrders(userId: string) {
    const allOrders = prisma.order.findMany({
      where: { userId },
      include: { orderItems: true },
    });

    return allOrders;
  }
}

export default OrdersService;
