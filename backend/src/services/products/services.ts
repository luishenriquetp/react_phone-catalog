import { PrismaClient } from "@prisma/client";
import AppError from "../../errors/AppError";

const prisma = new PrismaClient();

class ProductServices {
  async getAllProducts(category: string) {
    const allData = await prisma.product.findMany({where: {
      category: category
    }});
    return allData;
  }

  async getProductById(id: string) {
    const allData = await prisma.product.findUnique({
      where: { id },
      include: { description: true },
    });

    if (!allData) {
      throw new AppError("Product NOT FOUND", 404);
    }

    const { colorsAvailable } = allData;

    for (let i = 0; i < colorsAvailable.length; i += 1) {
      const splitedColor = colorsAvailable[i].split(" ");

      if (splitedColor.length === 2) {
        const findIndexColor = colorsAvailable.findIndex(
          (el) => el === colorsAvailable[i],
        );

        colorsAvailable.splice(findIndexColor, 1);

        colorsAvailable.push(splitedColor.join("-"));
      }
    }

    let { color } = allData;

    const splitedColor = color.split(" ");

    if (splitedColor.length === 2) {
      color = splitedColor.join("-");
    }

    allData.color = color;
    allData.colorsAvailable = colorsAvailable;

    return allData;
  }
}

export default ProductServices;