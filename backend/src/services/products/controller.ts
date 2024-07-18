import express from "express";
import StandardResponse from "../../utils/StandardResponse";
import ProductServices from "./services";

const productsRouter = express.Router();

productsRouter.get("/allProducts",async (_req, res) => {
  const services = new ProductServices();
  const allData = await services.getAllProducts();

  StandardResponse.responseWrapper({
    message: "ok",
    res,
    data: allData,
    statusCode: 200,
  });
});

export default productsRouter;
