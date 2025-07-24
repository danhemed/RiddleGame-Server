import express from "express";
import playerRouter from "./routes/playerRouter.js";
import riddleRouter from "./routes/riddleRouter.js";
import { config } from "dotenv";
config();

const app = express();

app.use(express.json());

app.use("/players", playerRouter);

app.use("/riddles", riddleRouter);

app.listen(process.env.PORT || 3005, () =>{
    console.log(`server run...`)
})