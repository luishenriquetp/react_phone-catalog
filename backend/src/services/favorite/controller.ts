import express, { Request } from "express";
import StandardResponse from "../../utils/StandardResponse";
import AppError from "../../errors/AppError";
import FavoritetServices from "./services";
import authMiddleware from "../../middlewares/authentication";

const favoritesRouter = express.Router();
const services = new FavoritetServices();

favoritesRouter.get(
  "/getFavorites",
  authMiddleware,
  async (req: Request & { userId?: string }, res) => {
    const { userId } = req;

    const allData = await services.getAllFavoritesByUser(userId!);

    if (!allData) {
      throw new AppError("Favorites NOT FOUND", 404);
    }

    StandardResponse.responseWrapper({
      message: "ok",
      res,
      data: allData,
      statusCode: 200,
    });
  }
);

favoritesRouter.post("/", authMiddleware, async (req: Request & {userId?: string}, res) => {
  const { productId } = req.body;
  const { userId } = req;

  const newFAvorite = await services.createFavorite(productId, userId!);

  if (!newFAvorite) {
    throw new AppError("Favorites was NOT CREATED", 400);
  }

  StandardResponse.responseWrapper({
    message: "ok",
    res,
    data: newFAvorite,
    statusCode: 201,
  });
});

favoritesRouter.delete("/:productId", authMiddleware, async (req: Request & {userId?: string}, res) => {
  const { productId } = req.params;
  const { userId } = req;  

  const findFavorite = await services.deleteFavorite(productId, userId!);

  if (!findFavorite) {
    throw new AppError("Favorites was NOT Deleted", 400);
  }

  const allData = await services.getAllFavoritesByUser(userId!);

  StandardResponse.responseWrapper({
    message: "Deleted",
    res,
    data: allData,
    statusCode: 200,
  });

  
});

export default favoritesRouter;