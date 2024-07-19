import express from "express";
import StandardResponse from "../../utils/StandardResponse";
import ProductServices from "./services";
import AppError from "../../errors/AppError";

const productsRouter = express.Router();
const services = new ProductServices();

productsRouter.get("/allProducts/:category", async (req, res) => {
  const { category } = req.params;
  const allData = await services.getAllProducts(category);

  if (!allData) {
    throw new AppError("Products NOT FOUND", 404);
  }

  StandardResponse.responseWrapper({
    message: "ok",
    res,
    data: allData,
    statusCode: 200,
  });
});

productsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const product = await services.getProductById(id);

  if (!product) {
    throw new AppError("Product NOT FOUND", 404);
  }

  StandardResponse.responseWrapper({
    message: "ok",
    res,
    data: product,
    statusCode: 200,
  });
});

export default productsRouter;