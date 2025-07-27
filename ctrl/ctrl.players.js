import { dalPlayers } from "../dal/dal.players.js";

export const getAllPlayersServer = async (req, res) => {
    try {
        res.json(await dalPlayers.getAllPlayers())
    } catch (err) {
        res.status(500).json({ error: `from get all players server ${err.message}` })
    }
}

export const getPlayerServer = async (req, res) => {
    const username = String(req.params.username);
    if (!username) return res.status(400).json({ error: 'Missing username' });
    try {
        res.json(await dalPlayers.getPlayerByUserName(username))
    } catch (err) {
        res.status(500).json({ error: `from get all players server ${err.message}` })
    }
}

export const getPlayerWins = async (req, res) => {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ error: 'Missing id' });
    
    try {
        res.json(await dalPlayers.getVictories(id))
    } catch (err) {
        res.status(500).json({ error: `from get all players server ${err.message}` })
    }
}

export const createNewPlayerServer = async (req, res) => {
    try {
        const newPlayer = await dalPlayers.insertNewPlayer({ ...req.body });
        res.status(201).json(newPlayer);
    } catch (err) {
        res.status(500).json({ error: `from create new player server ${err.message}` });
    }
}

export const updatePlayerServer = async (req, res) => {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ error: 'Missing id' });

    try {
        const updatePlayer = await dalPlayers.updatePlayer(id, { ...req.body });
        res.json(updatePlayer);
    } catch (err) {
        res.status(404).json({ error: `from update player server ${err.message}` });
    }
}