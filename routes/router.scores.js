import express from "express";
import { getAllPlayersScoreServer, getAllPlayerScoreServer, createNewScoreServer, updateScoreServer } from "../ctrl/ctrl.scores.js";

const router = express.Router();

router.get('/leaderboard', getAllPlayersScoreServer);

router.get('/:id', getAllPlayerScoreServer);

router.post('/submit-score', createNewScoreServer);

router.put('/:id', updateScoreServer);

export default router;