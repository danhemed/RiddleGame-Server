import { CRUD } from "../services/generic.crud.js";

const crudPlayer = new CRUD("./db/players.txt");

export const getAllPlayersServer = async (req, res) => {
    try {
        res.json(await crudPlayer.GetAll())
    } catch (err) {
        res.status(500).json({ error: `from get all players server ${err.message}` })
    }
}

export const createNewPlayerServer = async (req, res) => {
    try {
        const newPlayer = await crudPlayer.Create({ ...req.body });
        res.status(201).json(newPlayer);
    } catch (err) {
        res.status(500).json({ error: `from create new player server ${err.message}` });
    }
}

export const updatePlayerServer = async (req, res) => {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ error: 'Missing id' });

    try {
        const updatePlayer = await crudPlayer.Update(id, { id, ...req.body });
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