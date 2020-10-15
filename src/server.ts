import express, { response } from "express";
import path from "path";
import cors from "cors";

import "express-async-errors";

import "./database/connection";

import routes from "./routes";
import errorsHandler from "./errors/handler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorsHandler);

app.listen(3333);
