"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dotenv_1 = require("dotenv");
const body_parser_1 = require("body-parser");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const buildPath = process.cwd() + 'build';
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
// import express from 'express';
// 
// export const app = express();
// Middleware
app.use(body_parser_1.default.json());
app.get('/api/test', async (_, res) => {
    res.json({ greeting: "Hello AAAAAAAAAA" });
});
if (!process.env['VITE']) {
    const frontendFiles = process.cwd() + '/dist';
    app.use(express_1.default.static(buildPath));
    app.get('/*', (_, res) => {
        res.send(buildPath + '/index.html');
    });
    app.listen(process.env['PORT']);
}
