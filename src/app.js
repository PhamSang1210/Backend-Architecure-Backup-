"use strict";
import express from "express";
const app = express();
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import routes from "./routes/index.js";

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
// init db

// init routes
routes(app);
// init handle error

export default app;
