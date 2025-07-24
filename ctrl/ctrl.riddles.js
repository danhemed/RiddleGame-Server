import { dalRiddles } from "../dal/dal.riddles.js";

export const getAllRiddlesServer = async (req, res) => {
    try {
        res.json(await dalRiddles.getRiddles())
    } catch (err) {
        res.status(500).json({ error: `from get all riddles server ${err.message}` })
    }
}

export const createNewRiddleServer = async (req, res) => {
    try {
        const newRiddle = await dalRiddles.insertRiddle({ ...req.body });
        res.status(201).json(newRiddle);
    } catch (err) {
        res.status(500).json({ error: `from create new riddle server ${err.message}` });
    }
}

export const updateRiddleServer = async (req, res) => {
    const id = req.params.id;
    if (!id) return res.status(400).json({ error: 'Missing id' });

    try {
        const updateRiddle = await dalRiddles.updateRiddle(id, { ...req.body });
        res.json(updateRiddle);
    } catch (err) {
        res.status(404).json({ error: `from update riddle server ${err.message}` });
    }
}

export const deleteRiddleServer = async (req, res) => {
    const id = req.params.id;
    if (!id) return res.status(400).json({ error: 'Missing id' });

    try {
        const deleteRiddle = await dalRiddles.deleteRiddle(req.params.id);
        res.json(deleteRiddle);
    } catch (err) {
        res.status(404).json({ error: `from update riddle server ${err.message}` });
    }
}