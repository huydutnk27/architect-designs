"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveCategory = exports.selectCategoryById = exports.loadAllCategories = exports.selectUserByUsername = exports.mongoDbConnect = void 0;
const mongodb_1 = require("mongodb");
const category_1 = require("../data/category");
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
    const collectionName = "architect-design";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    const categories = category_1.data.category;
    try {
        const insertManyResult = await collection.insertMany(categories);
        console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
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
const loadAllCategories = async () => {
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
    const collectionName = "architect-design";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    const resultList = [];
    try {
        // Execute query
        const query = {};
        const findResult = collection.find(query, {
            sort: { index: 1 },
            projection: { _id: 0, index: 1, cateId: 1, categoryType: 1, imgName: 1, name: 1, subTitle: 1, imageBase64Data: 1 },
        });
        for await (const doc of findResult) {
            resultList.push(doc);
        }
        if ((await collection.countDocuments(query)) === 0) {
            console.warn("No documents found!");
        }
        // Execute query
        return resultList;
    }
    catch (err) {
        console.error(`Something went wrong trying to find the documents: ${err}\n`);
    }
    finally {
        await client.close();
    }
    return null;
};
exports.loadAllCategories = loadAllCategories;
const selectCategoryById = async (_id) => {
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
    const collectionName = "architect-design";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    try {
        // Query for a movie that has the title 'The Room'
        const query = { cateId: _id };
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
exports.selectCategoryById = selectCategoryById;
const saveCategory = async (category) => {
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
    const collectionName = "architect-design";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    try {
        // Create a filter for movies with the title "Random Harvest"
        const filter = { cateId: category.cateId };
        /* Set the upsert option to insert a document if no documents match the filter */
        const options = { upsert: true };
        // Specify the update to set a value for the plot field
        const updateDoc = {
            $set: {
                categoryType: category.categoryType,
                name: category.name,
                subTitle: category.subTitle,
                imageBase64Data: category.imageBase64Data,
                description: category.description
            }
        };
        // Update the first document that matches the filter
        const result = await collection.updateOne(filter, updateDoc, options);
        // Print the number of matching and modified documents
        console.log(`${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`);
    }
    finally {
        // Close the connection after the operation completes
        await client.close();
    }
    return null;
};
exports.saveCategory = saveCategory;
