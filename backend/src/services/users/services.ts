import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AppError from "../../errors/AppError";

const prisma = new PrismaClient();
const JWT_SECRET = "seu_segredo_jwtmuitosecretonossa";

class UserService {
  async createUser(name: string, email: string, password: string) {
    try {
      const salt = 10;
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });

      return user;
    } catch (error) {
      throw new AppError("User Not Created(Maybe e-mail is in use)", 500);
    }
  }

  async authenticateUser(email: string, password: string) {
    try {
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) {
        throw new AppError("User not Found", 404);
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      
      

      if (!passwordMatch) {
        throw new AppError("Invalid password", 404);
      }



      const tokenSession = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: "1h",
      });


      return {name: user.name, tokenSession};
    } catch (error){
      if (error instanceof AppError) {
        throw error;
      } else {
        throw new AppError("Internal Server Error", 500);
      }
    }
  }

  async getUserData(userId?: string) {
    try {
      if (!userId) {
        throw new AppError("You Need to be logged", 200);
      }
      const user = await prisma.user.findUnique({ where: { id: userId } });

      if (!user) {
        throw new AppError("Usuer not Found", 404);
      }

      return user;
    } catch (error) {
      throw new AppError("User Not Found", 404);
    }
  }
}

export default UserService;
