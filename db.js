import{ MongoClient } from "mongodb";
import { config } from "dotenv";
config();
const client = new MongoClient(process.env.DB_COMMECTION);
let db;

export async function connect() {
    if (!db) {    
        await client.connect();
        db = client.db();
        console.log("Connected to the database");
    }
    return db;
}
connect();
export default db;