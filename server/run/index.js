"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_1 = __importDefault(require("./routes/index"));
const crypto = __importStar(require("crypto"));
const path = require('path');
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
const buildPath = path.join(__dirname, '../../build');
// Middleware
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.static(buildPath, {
    etag: true,
    lastModified: true,
    setHeaders: (res, path) => {
        const hash = crypto.createHash('sha256').update(fs_1.default.readFileSync(path)).digest('hex');
        res.set('Cache-Control', 'public, max-age=3600');
        res.set('ETag', hash);
    }
}));
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
