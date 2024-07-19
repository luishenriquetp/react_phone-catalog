import express, { Request, Response, NextFunction } from "express";
import StandardResponse from "../../utils/StandardResponse";
import HomepageService from "./services";

const homepageRouter = express.Router();
const homepageService = new HomepageService();

homepageRouter.get(
  "/newestModels",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const models = await homepageService.getNewestModels();
      StandardResponse.responseWrapper({
        message: "ok",
        res,
        data: models,
        statusCode: 200,
      });
    } catch (error) {
      next(error);
    }
  },
);

homepageRouter.get(
  "/hotPrices",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const hotPrices = await homepageService.getHotPrices();
      StandardResponse.responseWrapper({
        message: "ok",
        res,
        data: hotPrices,
        statusCode: 200,
      });
    } catch (error) {
      next(error);
    }
  },
);

export default homepageRouter;