import express from "express";
import { getAllPlayersServer, createNewPlayerServer, updatePlayerServer } from "../ctrl/ctrl.players.js";

const router = express.Router();

router.get('/', getAllPlayersServer);

router.post('/', createNewPlayerServer);

router.put('/:id', updatePlayerServer);

export default router;
