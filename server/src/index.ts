import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import apiRouter from './routes/index';
const path = require('path');

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;
const buildPath = path.join(__dirname, '../../build');

// app.get("/", (req: Request, res: Response) => {
//     res.send("Express + TypeScript Server");
// });

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});


// Middleware
app.use(bodyParser.json());


app.use("/api", apiRouter);

app.get('/api/test', async (_, res) => {
    res.json({ greeting: "Hello AAAAAAAAAA" });
});

// if (!process.env['VITE']) {
// const frontendFiles = process.cwd() + '/dist'
app.use(express.static(buildPath));
app.get('/*', (_, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
})
app.listen(process.env['PORT']);
// }