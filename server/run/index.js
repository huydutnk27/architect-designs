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
const port = process.env.PORT || 3000;
const buildPath = path.join(__dirname, '../../build');
// app.get("/", (req: Request, res: Response) => {
//     res.send("Express + TypeScript Server");
// });
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
// Middleware
app.use(body_parser_1.default.json());
app.use("/api", index_1.default);
app.get('/api/test', async (_, res) => {
    res.json({ greeting: "Hello AAAAAAAAAA" });
});
// if (!process.env['VITE']) {
// const frontendFiles = process.cwd() + '/dist'
app.use(express_1.default.static(buildPath));
app.get('/*', (_, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});
app.listen(process.env['PORT']);
// }
