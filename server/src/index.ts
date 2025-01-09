import express, { Express } from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import bodyParser from 'body-parser';
import apiRouter from './routes/index';
import * as crypto from 'crypto';
const path = require('path');

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;
const buildPath = path.join(__dirname, '../../build');

// Middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
app.use(express.static(buildPath, {
    etag: true,
    lastModified: true,
    setHeaders: (res, path) => {
      const hash = crypto.createHash('sha256').update(fs.readFileSync(path)).digest('hex');
      res.set('Cache-Control', 'public, max-age=3600');
      res.set('ETag', hash);
    }
}));

app.use("/api", apiRouter);

app.get('/api/test', async (_, res) => {
    res.json({ greeting: "Hello AAAAAAAAAA" });
});

app.get('/*', (_, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`[server]: Server is running at ${port}`);
});