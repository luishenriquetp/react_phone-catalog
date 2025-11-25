import { OrderStatus, PrismaClient } from "@prisma/client";
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
    productId: string;
    userId: string | undefined;
  }) {
    const { productId, userId } = item;
    const order = await this.getAllOrders(userId!);
    let orderId = "";

    if (order.length === 0) {
      const newOrderId = await this.createOrder({
        userId: userId || "",
        status: "active",
      });
      orderId = newOrderId.id;
    } else {
      orderId = order[0].id;
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      throw new AppError("Product not found", 404);
    }

    const totalPrice = product.priceDiscount || product.priceRegular;

    try {
      const createdItem = await prisma.orderItem.create({
        data: {
          orderId,
          productId,
          quantity: 1,
          totalPrice,
        },
      });

      return createdItem;
    } catch {
      throw new AppError("Erro ao criar item na order", 404);
    }
  }

  async getAllOrders(userId: string) {
    const allOrders = await prisma.order.findMany({
      where: { userId },
      include: { orderItems: true },
    });

    return allOrders;
  }

  async deleteOrder(id: string) {
    try {
      await prisma.orderItem.deleteMany({
        where: {
          orderId: id,
        },
      });
      const deletedOrder = await prisma.order.delete({
        where: { id },
      });

      return deletedOrder;
    } catch {
      throw new AppError("Erro ao deletar a ordem", 404);
    }
  }

  async deleteOrderItem(id: string) {
    try {
      const deletedOrderItem = await prisma.orderItem.delete({
        where: { id },
      });

      return deletedOrderItem;
    } catch {
      throw new AppError("Erro ao deletar o item da ordem", 404);
    }
  }

  async updateOrder(orderId: string, updatedData: { status: OrderStatus }) {
    try {
      const updatedOrder = await prisma.order.update({
        where: { id: orderId },
        data: updatedData,
      });

      return updatedOrder;
    } catch {
      throw new AppError("Erro ao atualizar o carrinho", 404);
    }
  }

  async updateOrderItem(id: string, updatedData: { quantity: number }) {
    try {
      const orderItem = await prisma.orderItem.findUnique({
        where: { id },
        include: { product: true },
      });

      if (!orderItem) {
        throw new AppError("Order item not found", 404);
      }

      const productPrice =
        orderItem.product.priceDiscount || orderItem.product.priceRegular;
      const totalPrice = productPrice * (updatedData.quantity);

      const updatedOrderItem = await prisma.orderItem.update({
        where: { id },
        data: {
          quantity: updatedData.quantity,
          totalPrice,
        },
      });

      return updatedOrderItem;
    } catch {
      throw new AppError("Erro ao atualizar o item do carrinho", 404);
    }
  }
}

export default OrdersService;