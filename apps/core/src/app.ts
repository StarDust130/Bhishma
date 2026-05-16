import express from "express";
import type { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import { errorMiddleware } from "./middleware/error.middleware.js";

import { healthRouter } from "./modules/health/health.route.js";

export const app: Express = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api/v1/health", healthRouter);

app.use(errorMiddleware);

export default app;
