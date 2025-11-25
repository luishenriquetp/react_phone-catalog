import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const users = await prisma.user.findUnique({where: {id: "608bb01a-7f50-4d53-a0d8-b9d962939eb4"}});
    console.table(users);
  } catch (error) {
    console.error("Please, wtf:", error);
  } finally {
    await prisma.$disconnect();
  }
}


main()
  .catch((error) => {
    console.error("Please, wtf:", error);
  })
  .finally(() => {
    process.exit();
  });
