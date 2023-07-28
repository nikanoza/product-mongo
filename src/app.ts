import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connect from "./config/mongo.js";
import bodyParser from "body-parser";
import productRouter from "./routes/product-router.js";
import swagger from "./middlwears/swagger-middleware.js";

dotenv.config();
connect();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api", productRouter);
app.use("/", ...swagger);

app.listen(3000);
