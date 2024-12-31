"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHomeData = void 0;
const dbConnect_1 = require("../database/dbConnect");
/**
 * Load data for home page
 * @returns home page data
 */
const getHomeData = async () => {
    try {
        return await (0, dbConnect_1.loadHomeData)();
    }
    catch (err) {
        console.error(`Something went wrong trying to get home documents: ${err}\n`);
        return {};
    }
};
exports.getHomeData = getHomeData;
