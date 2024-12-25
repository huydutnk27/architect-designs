import { MongoClient, ServerApiVersion } from 'mongodb';
import { data } from '../data/category';
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
    const collectionName = "architect-design";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    const categories = data.category;
    try {
        const insertManyResult = await collection.insertMany(categories);
        console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
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

export const loadAllCategories = async() => {
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
    const collectionName = "architect-design";
    const database = client.db(dbName);
    const collection = database.collection<Category>(collectionName);
    const resultList: Category[] = [];
    try {
        // Execute query
        const query = {};
        const findResult = collection.find<Category>(query,
            {
                sort: { index: 1 },
                projection: { _id: 0, index: 1, cateId: 1, categoryType: 1, imgName: 1, name: 1, subTitle: 1, imageBase64Data: 1},
            }
        );

        for await (const doc of findResult) {
            resultList.push(doc);
        }
        if ((await collection.countDocuments(query)) === 0) {
            console.warn("No documents found!");
        }
        // Execute query
        return resultList;
    } catch (err) {
        console.error(`Something went wrong trying to find the documents: ${err}\n`);
    } finally {
        await client.close();
    }
    return null;
}

export const selectCategoryById = async(_id: string) => {
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
    const collectionName = "architect-design";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    try {
        // Query for a movie that has the title 'The Room'
        const query = { cateId: _id };
        // Execute query
        return await collection.findOne(query);
    } catch (err) {
        console.error(`Something went wrong trying to find the documents: ${err}\n`);
    } finally {
        await client.close();
    }
    return null;
}

export const saveCategory = async(category: Category) => {
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
        console.log(
          `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        );
    } finally {
        // Close the connection after the operation completes
        await client.close();
    }
    return null;
}

