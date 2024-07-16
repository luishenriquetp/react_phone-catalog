import { Router } from "express";
import productsRouter from "./services/products/controller";

const router = Router();

router.use("/products", productsRouter);

export default router;
