"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_1 = __importDefault(require("./routes/index"));
const path = require('path');
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
const buildPath = path.join(__dirname, '../../build');
// Middleware
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.static(buildPath));
app.use("/api", index_1.default);
app.get('/api/test', async (_, res) => {
    res.json({ greeting: "Hello AAAAAAAAAA" });
});
app.get('/*', (_, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});
app.listen(port, () => {
    console.log(`[server]: Server is running at ${port}`);
});
