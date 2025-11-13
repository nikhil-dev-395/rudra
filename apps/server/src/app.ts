import express, { type Express } from "express";
import helmet from "helmet";
import morgan from "morgan";
const app: Express = express();

// middlewares
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(morgan("combined"));
app.use(helmet());

export { app };
