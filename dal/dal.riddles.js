import { connection } from "../db/connection/connectMongoDB.js";

export const dalRiddles = {
    async getRiddles() {
    const db = await connection();
    return db.collection('riddles').find().toArray();
    },
    async insertRiddle(data) {
        
    }
}