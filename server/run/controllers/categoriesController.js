"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategory = exports.fetchCategoryById = exports.getAllCategories = void 0;
const categoriesService_1 = require("../services/categoriesService");
const getAllCategories = async (req, res) => {
    const allCategory = await (0, categoriesService_1.loadAll)();
    res.json({ categories: allCategory });
    res.end();
};
exports.getAllCategories = getAllCategories;
const fetchCategoryById = async (req, res) => {
    const category = await (0, categoriesService_1.getCategoryById)(req.query?._id);
    res.json({ category: category });
    res.end();
};
exports.fetchCategoryById = fetchCategoryById;
const updateCategory = async (req, res) => {
    const category = await (0, categoriesService_1.saveCategoryData)(req.body.category);
    res.json({ category: category });
    res.end();
};
exports.updateCategory = updateCategory;
