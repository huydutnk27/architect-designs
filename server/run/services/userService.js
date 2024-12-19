"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserLogin = void 0;
const dbConnect_1 = require("../database/dbConnect");
const bcrypt_1 = __importDefault(require("bcrypt"));
const isUserLogin = async (username, password) => {
    try {
        const user = await (0, dbConnect_1.selectUserByUsername)(username);
        if (user) {
            return await bcrypt_1.default.compare(password, user.password);
        }
    }
    catch (err) {
        console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
        return false;
    }
    return false;
};
exports.isUserLogin = isUserLogin;
