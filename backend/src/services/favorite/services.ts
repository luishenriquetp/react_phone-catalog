import { PrismaClient } from "@prisma/client";
import AppError from "../../errors/AppError";

const prisma = new PrismaClient();

class FavoritetServices {
  async getAllFavoritesByUser(userId: string) {
    const allFavorites = await prisma.favorite.findMany({
      where: { userId },
      include: { product: true },
    });

    const favoriteProducts = allFavorites.map((favorite) => favorite.product);

    return favoriteProducts;
  }

  async createFavorite(productId: string, userId: string) {
    if (!userId || !productId) {
      if (!userId) {
        throw new AppError("User Id is missing", 400);
      } else {
        throw new AppError("Product Id is missing", 400);
      }
    }

    const findProduct = await prisma.product.findUnique({
      where: { id: productId },
    });

    const findUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!findUser || !findProduct) {
      if (!findUser) {
        throw new AppError("User NOT FOUND", 404);
      } else {
        throw new AppError("Product NOT FOUND", 404);
      }
    }

    const data = {
      productId,
      userId,
    };

    return prisma.favorite.create({ data });
  }

  async deleteFavorite(productId: string, userId: string) {
    if (!userId || !productId) {
      if (!userId) {
        throw new AppError("User Id is missing", 400);
      } else {
        throw new AppError("Product Id is missing", 400);
      }
    }

    const findFavorite = await prisma.favorite.findFirst({
      where: { productId, userId },
    });

    if (!findFavorite) {
      throw new AppError("Favorite NOT FOUND", 404);
    }

    const idFavorite = findFavorite.id;

    return prisma.favorite.delete({ where: { id: idFavorite } });
  }
}

export default FavoritetServices;