"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveCategoryData = exports.getCategoryById = exports.loadAll = void 0;
const dbConnect_1 = require("../database/dbConnect");
/**
 * Load all categories
 * @returns list of category data
 */
const loadAll = async () => {
    try {
        return await (0, dbConnect_1.loadAllCategories)();
    }
    catch (err) {
        console.error(`Something went wrong trying to get all cateories documents: ${err}\n`);
        return {};
    }
};
exports.loadAll = loadAll;
/**
 * Get category by id
 * @param _id
 * @returns category data
 */
const getCategoryById = async (_id) => {
    try {
        const category = await (0, dbConnect_1.selectCategoryById)(_id);
        if (category) {
            return category;
        }
    }
    catch (err) {
        console.error(`Something went wrong trying to get a catgory documents: ${err}\n`);
        return {};
    }
    return {};
};
exports.getCategoryById = getCategoryById;
/**
 * Update data for category by id
 * @param category
 * @returns category data updated
 */
const saveCategoryData = async (category) => {
    try {
        const categoryUpdate = await (0, dbConnect_1.saveCategory)(category);
        if (categoryUpdate) {
            return categoryUpdate;
        }
    }
    catch (err) {
        console.error(`Something went wrong trying to get a catgory documents: ${err}\n`);
        return {};
    }
    return {};
};
exports.saveCategoryData = saveCategoryData;
