import { ObjectId } from "mongodb";
import { connection } from "../db/connection/connectMongoDB.js";

export const dalRiddles = {
    async getRiddles() {
        const db = await connection();
        return db.collection('riddles').find().toArray();
    },
    async insertRiddle(riddle) {
        const db = await connection();
        return db.collection('riddles').insertOne(riddle);
    },
    async updateRiddle(id, riddle) {
        const db = await connection();
        const result = await db.collection('riddles').findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: riddle },
            { returnDocument: 'after' }
        );
        return result.value;
    },
    async deleteRiddle(id) {
        const db = await connection();
        return db.collection('riddles').deleteOne({ _id: new ObjectId(id) })
    }
}