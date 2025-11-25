import { PrismaClient } from "@prisma/client";
import AppError from "../../errors/AppError";

const prisma = new PrismaClient();

class HomepageService {
  async getNewestModels() {
    try {
      const models = await prisma.product.findMany({
        orderBy: {
          year: "desc",
        },
        take: 20,
      });
      return models;
    } catch {
      throw new AppError("Error getting newer models", 404);
    }
  }

  async getHotPrices() {
    try {
      const hotPrices = await prisma.product.findMany({
        orderBy: {
          priceDiscount: "asc",
        },
        take: 20,
      });
      return hotPrices;
    } catch {
      throw new AppError("Error when obtaining products with HotPrices", 404);
    }
  }
}

export default HomepageService;