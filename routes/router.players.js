import express from "express";
import { getAllPlayersServer, getPlayerServer, getPlayerWins, createNewPlayerServer, updatePlayerServer } from "../ctrl/ctrl.players.js";

const router = express.Router();

router.get('/', getAllPlayersServer);

router.get('/:username', getPlayerServer);

router.get('/wins/:id', getPlayerWins);

router.post('/', createNewPlayerServer);

router.put('/:id', updatePlayerServer);

export default router;
