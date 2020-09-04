import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import BaseRouter from "./routes";
import helmet from "helmet";

const app = express();
export const metrics = express();
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", BaseRouter);
app.use("/api/v1/data/uploads", express.static("./data/uploads"));
app.use("/api/v1/data/images", express.static("./data/images"));
app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
  if (res.headersSent) {
    return next(err);
  }
  let status: any;
  if (err.status !== undefined) {
    status = err.status;
  } else {
    status = 500;
  }
  res.status(status);
  res.send(err);
});

export default app;
