import express from "express";
import { getAllScoresServer, createNewScoreServer, updateScoreServer } from "../ctrl/ctrl.scores.js";

const router = express.Router();

router.get('/leaderboard', getAllScoresServer);

router.post('/submit-score', createNewScoreServer);

router.put('/:id', updateScoreServer);

export default router;