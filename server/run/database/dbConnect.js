"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectUserByUsername = exports.mongoDbConnect = void 0;
const mongodb_1 = require("mongodb");
// const MongoClient = require('mongodb');
// const ServerApiVersion = require('mongodb');
const uri = 'mongodb+srv://architect-app-user:mjVqIousuSteFSnI@architect-cluster.1jfgc.mongodb.net/?retryWrites=true&w=majority&appName=architect-cluster';
const mongoDbConnect = async () => {
    // MongoDB connection
    const client = new mongodb_1.MongoClient(uri, {
        serverApi: {
            version: mongodb_1.ServerApiVersion.v1,
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
    }
    catch (err) {
        console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
    }
    finally {
        await client.close();
    }
};
exports.mongoDbConnect = mongoDbConnect;
const selectUserByUsername = async (_username) => {
    // MongoDB connection
    const client = new mongodb_1.MongoClient(uri, {
        serverApi: {
            version: mongodb_1.ServerApiVersion.v1,
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
    }
    catch (err) {
        console.error(`Something went wrong trying to find the documents: ${err}\n`);
    }
    finally {
        await client.close();
    }
    return null;
};
exports.selectUserByUsername = selectUserByUsername;
