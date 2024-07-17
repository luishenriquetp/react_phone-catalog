import "express-async-errors";
import express from "express";
import cors from "cors";
import router from "./router";
import errorHandling from "./middlewares/errorHandling";

const PORT = 3000;
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(errorHandling);

app.listen(PORT, () => {});
