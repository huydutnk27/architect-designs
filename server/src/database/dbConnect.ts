import dbPromise from '../database/conn';
import { data } from '../data/category';

export const initialSampleData = async() => {
    try {
        // MongoDB connection
        const mongoDb = await dbPromise;
        if (mongoDb) {
            const collectionName = "architect-home";
            const collection = mongoDb.collection(collectionName);
            const categories = data.home;
            const insertManyResult = await collection.insertOne(categories);
            console.log(`${insertManyResult.insertedId} documents successfully inserted.\n`);
        }
    } catch (err) {
        console.error(`Something went wrong trying to find the documents: ${err}\n`);
    }
    return null;
}

export const selectUserByUsername = async(_username: string) => {
    try {
        // MongoDB connection
        const mongoDb = await dbPromise;
        if (mongoDb) {
            const collectionName = "architect-user";
            const collection = mongoDb.collection(collectionName);
            // Query for a movie that has the title 'The Room'
            const query = { username: _username };
            // Execute query
            return await collection.findOne(query);
        }
    } catch (err) {
        console.error(`Something went wrong trying to find the documents: ${err}\n`);
    }
    return null;
}

export const loadAllCategories = async() => {
    try {
        // MongoDB connection
        const mongoDb = await dbPromise;
        if (mongoDb) {
            const collectionName = "architect-design";
            const collection = mongoDb?.collection<Category>(collectionName);
            const resultList: Category[] = [];
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
        }
        
    } catch (err) {
        console.error(`Something went wrong trying to find the documents: ${err}\n`);
    }
    return null;
}

export const selectCategoryById = async(_id: string) => {
    try {
        // MongoDB connection
        const mongoDb = await dbPromise;
        if (mongoDb) {
            const collectionName = "architect-design";
            const collection = mongoDb.collection(collectionName);
            // Query for a movie that has the title 'The Room'
            const query = { cateId: _id };
            // Execute query
            return await collection.findOne(query);
        }
    } catch (err) {
        console.error(`Something went wrong trying to find the documents: ${err}\n`);
    }
    return null;
}

export const saveCategory = async(category: Category) => {
    try {
        // MongoDB connection
        const mongoDb = await dbPromise;
        if (mongoDb) {

            const collectionName = "architect-design";
            const collection = mongoDb.collection(collectionName);

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
        }
    } catch (err) {
        console.error(`Something went wrong trying to find the documents: ${err}\n`);
    }
    return null;
}

export const loadHomeData = async() => {
    try {
        // MongoDB connection
        const mongoDb = await dbPromise;
        if (mongoDb) {
            const collectionName = "architect-home";
            const collection = mongoDb.collection<HomeData>(collectionName);
            // Execute query
            return collection.findOne<HomeData>();
        }
    } catch (err) {
        console.error(`Something went wrong trying to find the documents: ${err}\n`);
    }
    return null;
}

export const saveHomeData = async(homeData: HomeData) => {
    try {
        // MongoDB connection
        const mongoDb = await dbPromise;
        if (mongoDb) {

            const collectionName = "architect-home";
            const collection = mongoDb.collection(collectionName);

            // Create an empty filter for home page data
            const filter = {};
            /* Set the upsert option to insert a document if no documents match the filter */
            const options = { upsert: true };
            // Specify the update to set a value for the plot field
            const updateDoc = {
                $set: {
                    slider: homeData.slider,
                    specialProduct: homeData.specialProduct
                }
            };
            // Update the first document that matches the filter
            const result = await collection.updateOne(filter, updateDoc, options);
            
            // Print the number of matching and modified documents
            console.log(
            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
            );
        }
    } catch (err) {
        console.error(`Something went wrong trying to find the documents: ${err}\n`);
    }
    return null;
}

