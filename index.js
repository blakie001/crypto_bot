import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.connection.js";
import cron from "node-cron";
import { cronJob } from "./utils/cronJob.utils.js";
import statsRoutes from "./routes/stats.routes.js";
import deviationRoutes from "./routes/deviation.routes.js";


const server = express();
dotenv.config();
const port = process.env.PORT || 3000;
connectDb();
server.use(express.json());


server.use("", statsRoutes);
server.use("", deviationRoutes);

// cronJob()
cron.schedule("0 */2 * * *", cronJob);


server.listen (port, () =>{
    console.log(`Server is Running at : ${port}`);
})