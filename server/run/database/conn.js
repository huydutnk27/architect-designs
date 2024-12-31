"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const connectionString = 'mongodb+srv://architect-app-user:mjVqIousuSteFSnI@architect-cluster.1jfgc.mongodb.net/?retryWrites=true&w=majority&appName=architect-cluster';
;
const dbName = "architectDb";
const client = new mongodb_1.MongoClient(connectionString);
let db;
async function connectToDatabase() {
    try {
        const conn = await client.connect();
        db = conn.db(dbName);
        return db;
    }
    catch (e) {
        console.error("Error connecting to database:", e);
        return undefined; // Return undefined if connection fails
    }
}
// Export a promise that resolves to the database or undefined
const dbPromise = connectToDatabase();
exports.default = dbPromise;
