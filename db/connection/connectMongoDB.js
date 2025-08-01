import { config } from "dotenv";
import { MongoClient } from "mongodb";
config();

const client = new MongoClient(process.env.DB_MONGODB_URL);

let db;

export async function connection() {
    if (!db) {
        await client.connect();
        db = client.db('riddle_game');
        console.log(`Connected to MongoDB`);
    }
    return db;
}