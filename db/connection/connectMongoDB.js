import { config } from "dotenv";
import { MongoClient } from "mongodb";
config();

const client = new MongoClient(process.env.DB_CONNECTION);

let db;

export async function connection() {
    if (!db) {
        await client.connect();
        db = client.db('riddles');
        console.log(`Connected to MongoDB`);
    }
    return db;
}