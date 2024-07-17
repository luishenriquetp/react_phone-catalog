import { Router } from "express";
import productsRouter from "./services/products/controller";
import usersRouter from "./services/users/controller";
import ordersRouter from "./services/orders/controller";

const router = Router();

router.use("/products", productsRouter);
router.use("/users", usersRouter);
router.use("/orders", ordersRouter);

export default router;
