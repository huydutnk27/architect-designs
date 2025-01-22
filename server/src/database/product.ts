import dbPromise from '../database/conn';

const COLLECTION_NAME = "architect-products";

export const loadProductList = async() => {
    try {
        // MongoDB connection
        const mongoDb = await dbPromise;
        if (mongoDb) {
            const collectionName = COLLECTION_NAME;
            const collection = mongoDb?.collection<Product>(collectionName);
            const resultList: Product[] = [];
            // Execute query
            const query = {};
            const findResult = collection.find<Product>(query,
                {
                    sort: { index: 1 },
                    projection: {
                        _id: 0,
                        index: 1,
                        productId: 1,
                        categoryId: 1,
                        name: 1,
                        subTitle: 1,
                        description: 1,
                        size: 1,
                        quantity: 1,
                        price: 1,
                        color: 1,
                        imageData: 1,
                        imageHoverData: 1,
                        warrantyPeriod: 1,
	                    constructionTime: 1,
	                    manufacturer: 1
                    },
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

export const selectProductById = async(_productId: string) => {
    try {
        // MongoDB connection
        const mongoDb = await dbPromise;
        if (mongoDb) {
            const collectionName = COLLECTION_NAME;
            const collection = mongoDb.collection(collectionName);
            // Query for a movie that has the title 'The Room'
            const query = { productId: _productId };
            // Execute query
            return await collection.findOne(query);
        }
    } catch (err) {
        console.error(`Something went wrong trying to find the documents: ${err}\n`);
    }
    return null;
}

export const saveProduct = async(product: Product) => {
    try {
        // MongoDB connection
        const mongoDb = await dbPromise;
        if (mongoDb) {

            const collectionName = COLLECTION_NAME;
            const collection = mongoDb.collection(collectionName);

            // Create a filter for product with the product id.
            const filter = { productId: product.productId };
            /* Set the upsert option to insert a document if no documents match the filter */
            const options = { upsert: true };
            // Specify the update to set a value for the plot field
            const updateProduct = {
                $set: {
                    productId: product.productId,
                    categoryId: product.categoryId,
                    name: product.name,
                    subTitle: product.subTitle,
                    description: product.description,
                    size: product.size,
                    quantity: product.quantity,
                    price: product.price,
                    color: product.color,
                    imageData: product.imageData,
                    imageHoverData: product.imageHoverData,
                    warrantyPeriod: product.warrantyPeriod,
	                constructionTime: product.constructionTime,
	                manufacturer: product.manufacturer
                }
            };
            // Update the first document that matches the filter
            const result = await collection.updateOne(filter, updateProduct, options);
            
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