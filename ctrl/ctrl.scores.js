import { dalScores } from "../dal/dal.scores.js";

export const getAllPlayersScoreServer = async (req, res) => {
    try {
        res.json(await dalScores.getAllPlayersScore())
    } catch (err) {
        res.status(500).json({ error: `from get all Scores server ${err.message}` })
    }
}
export const getAllPlayerScoreServer = async (req, res) => {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ error: 'Missing id' });

    try {
        res.json(await dalScores.getAllPlayerScore(id))
    } catch (err) {
        res.status(500).json({ error: `from get all Scores server ${err.message}` })
    }
}

export const createNewScoreServer = async (req, res) => {
    try {
        const newScore = await dalScores.insertNewScore({ ...req.body });
        res.status(201).json(newScore);
    } catch (err) {
        res.status(500).json({ error: `from create new score server ${err.message}` });
    }
}

export const updateScoreServer = async (req, res) => {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ error: 'Missing id' });

    try {
        const updateScore = await dalScores.updateScore(id, { ...req.body });
        res.json(updateScore);
    } catch (err) {
        res.status(404).json({ error: `from update score server ${err.message}` });
    }
}