"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveHomePageData = exports.getHomeData = void 0;
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
/**
 * Update data for home page data.
 * @param category
 * @returns home data was updated
 */
const saveHomePageData = async (homeData) => {
    try {
        const homeUpdate = await (0, dbConnect_1.saveHomeData)(homeData);
        if (homeUpdate) {
            return homeUpdate;
        }
    }
    catch (err) {
        console.error(`Something went wrong trying to get a catgory documents: ${err}\n`);
        return {};
    }
    return {};
};
exports.saveHomePageData = saveHomePageData;
