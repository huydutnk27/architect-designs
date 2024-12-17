import express from 'express';
import bodyParser from 'body-parser';
// import { MongoClient, ServerApiVersion } from 'mongodb';
// const uri = 'mongodb+srv://architect-app-user:mjVqIousuSteFSnI@architect-cluster.1jfgc.mongodb.net/?retryWrites=true&w=majority&appName=architect-cluster';
export const app = express();

// Middleware
app.use(bodyParser.json());

app.get('/api/test', async (_, res) => {
    // MongoDB connection
    // const client = new MongoClient(uri, {
    //     serverApi: {
    //       version: ServerApiVersion.v1,
    //       strict: true,
    //       deprecationErrors: true,
    //     }
    // });
    // await client.connect();
    // const dbName = "architectDb";
    // const collectionName = "architect-design";
    // const database = client.db(dbName);
    // const collection = database.collection(collectionName);
    // const categories = [
    //     {
    //         "index": 1,
    //         "categoryType": "houses apartments",
    //         "imgUrl": "box_item_img_2",
    //         "name": "Trinity River Audubon Centre ( Data Test)",
    //         "subTitle": "Hoses / Apartments"
    //     },
    //     {
    //         "index": 2,
    //         "categoryType": "houses interior",
    //         "imgUrl": "box_item_img_2",
    //         "name": "Theatre de Stoep  ( Data Test)",
    //         "subTitle": "Hoses  / Interior"
    //     }
    // ];
    // try {
    //     const insertManyResult = await collection.insertMany(categories);
    //     console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
    //   } catch (err) {
    //     console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
    //   }
    res.json({ greeting: "Hello AAAAAAAAAA" });
});

if (!process.env['VITE']) {
    const frontendFiles = process.cwd() + '/dist'
    app.use(express.static(frontendFiles))
    app.get('/*', (_, res) => {
        res.send(frontendFiles + '/index.html')
    })
    app.listen(process.env['PORT'])
}