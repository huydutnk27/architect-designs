"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialData = void 0;
const dbConnect_1 = require("../database/dbConnect");
const initialData = async () => {
    try {
        await (0, dbConnect_1.initialSampleData)();
    }
    catch (err) {
        console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
        return false;
    }
    return true;
};
exports.initialData = initialData;
