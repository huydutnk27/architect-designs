import { Db, MongoClient } from "mongodb";
const connectionString = 'mongodb+srv://architect-app-user:mjVqIousuSteFSnI@architect-cluster.1jfgc.mongodb.net/?retryWrites=true&w=majority&appName=architect-cluster';;
const dbName = "architectDb";
const client: MongoClient = new MongoClient(connectionString);
let db: Db;

async function connectToDatabase(): Promise<Db | undefined> {
  try {
    const conn = await client.connect();
    db = conn.db(dbName);
    return db;
  } catch (e) {
    console.error("Error connecting to database:", e);
    return undefined; // Return undefined if connection fails
  }
}

// Export a promise that resolves to the database or undefined
const dbPromise: Promise<Db | undefined> = connectToDatabase();

export default dbPromise;