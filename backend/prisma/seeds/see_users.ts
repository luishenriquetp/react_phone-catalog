import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const users = await prisma.user.findMany();
    console.table(users);
  } catch (error) {
    console.error("Please, wtf:", error);
  } finally {
    // Fecha a conexão do Prisma Client
    await prisma.$disconnect();
  }
}

// Chama a função main para iniciar a leitura dos usuários
main()
  .catch((error) => {
    console.error("Please, wtf:", error);
  })
  .finally(() => {
    process.exit();
  });
