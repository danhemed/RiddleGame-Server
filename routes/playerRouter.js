import express from "express";
import { getAllPlayersServer, createNewPlayerServer, updatePlayerServer } from "../ctrl/player.ctrl.js";

const router = express.Router();

router.get('/', getAllPlayersServer);

router.post('/', createNewPlayerServer);

router.put('/:id', updatePlayerServer);

export default router;
