import { MongoClient, ServerApiVersion } from 'mongodb';
// const MongoClient = require('mongodb');
// const ServerApiVersion = require('mongodb');
const uri = 'mongodb+srv://architect-app-user:mjVqIousuSteFSnI@architect-cluster.1jfgc.mongodb.net/?retryWrites=true&w=majority&appName=architect-cluster';

export const mongoDbConnect = async() => {
    // MongoDB connection
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
    });
    await client.connect();
    const dbName = "architectDb";
    const collectionName = "architect-user";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    const user = {
            "username": "admin",
            "password": "123456"
    };
    try {
        const insertManyResult = await collection.insertOne(user);
        console.log(`${insertManyResult.insertedId} documents successfully inserted.\n`);
    } catch (err) {
        console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
    } finally {
        await client.close();
    }
}

export const selectUserByUsername = async(_username: string) => {
    // MongoDB connection
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
    });
    await client.connect();
    const dbName = "architectDb";
    const collectionName = "architect-user";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    try {
        // Query for a movie that has the title 'The Room'
        const query = { username: _username };
        // Execute query
        return await collection.findOne(query);
    } catch (err) {
        console.error(`Something went wrong trying to find the documents: ${err}\n`);
    } finally {
        await client.close();
    }
    return null;
}