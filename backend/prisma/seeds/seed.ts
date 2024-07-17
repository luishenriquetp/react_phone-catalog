import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

interface DescriptionSeed {
  title: string;
  text: string[];
}

interface ProductSeed {
  category: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  image: string;
  description: DescriptionSeed[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera?: string;
  zoom?: string;
  cell: string[];
  year: number;
}

async function seed() {
  try {
    const users = JSON.parse(
      fs.readFileSync(path.join(__dirname, "seed_users.json"), "utf-8"),
    );
    const products = JSON.parse(
      fs.readFileSync(path.join(__dirname, "seed_products.json"), "utf-8"),
    );

    for (const user of users) {
      await prisma.user.create({
        data: user,
      });
    }

    for (const product of products) {
      const { description, ...productData } = product;

      const createdProduct = await prisma.product.create({
        data: {
          ...productData,
          description: {
            createMany: {
              data: description.map((desc: DescriptionSeed) => ({
                title: desc.title,
                text: { set: desc.text },
              })),
            },
          },
        },
      });

      console.log(`Product ok: ${createdProduct.name}`);
    }

    console.log("Finished!");
  } catch (error) {
    console.error("Dammit!!!! >:( :", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
