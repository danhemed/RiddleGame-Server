import express from "express";
import playerRouter from "./routes/router.players.js";
import riddleRouter from "./routes/router.riddles.js";
import scoresRouter from "./routes/router.scores.js";
import { config } from "dotenv";
config();

const app = express();

app.use(express.json());

app.use("/players", playerRouter);

app.use("/riddles", riddleRouter);

app.use("/scores", scoresRouter);

app.listen(process.env.PORT || 3005, () =>{
    console.log(`server run...`)
})