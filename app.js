import express from "express";
import playerRouter from "./routes/playerRouter.js";

const app = express();

app.use(express.json());

app.use("/players", playerRouter);

app.listen(3005, () =>{
    console.log(`server run...`)
})