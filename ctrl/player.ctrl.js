import { CRUD } from "../services/generic.crud.js";
import { dal } from "../dal/dal.players.js";

const crudPlayer = new CRUD("./db/players.txt");

export const getAllPlayersServer = async (req, res) => {
    try {
        res.json(await dal.getAllPlayers())
    } catch (err) {
        res.status(500).json({ error: `from get all players server ${err.message}` })
    }
}

export const createNewPlayerServer = async (req, res) => {
    try {
        const newPlayer = await dal.insertNewPlayer({ ...req.body });
        res.status(201).json(newPlayer);
    } catch (err) {
        res.status(500).json({ error: `from create new player server ${err.message}` });
    }
}

export const updatePlayerServer = async (req, res) => {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ error: 'Missing id' });

    try {
        const updatePlayer = await dal.updatePlayer(id, { id, ...req.body });
        res.json(updatePlayer);
    } catch (err) {
        res.status(404).json({ error: `from update player server ${err.message}` });
    }
}

export const deletePlayerServer = async (req, res) => {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ error: 'Missing id' });

    try {
        const deletePlayer = await crudPlayer.Delete(req.params.id);
        res.json(deletePlayer);
    } catch (err) {
        res.status(404).json({ error: `from update player server ${err.message}` });
    }
}