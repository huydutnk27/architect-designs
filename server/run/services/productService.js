"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveProductData = exports.loadAllProduct = void 0;
const product_1 = require("../database/product");
/**
 * Load all products
 * @returns list of product data
 */
const loadAllProduct = async () => {
    try {
        return await (0, product_1.loadProductList)();
    }
    catch (err) {
        console.error(`Something went wrong trying to get product list documents: ${err}\n`);
        return {};
    }
};
exports.loadAllProduct = loadAllProduct;
/**
 * Get category by id
 * @param _id
 * @returns category data
 */
// export const getProductById = async(_id: string) => {
//     try {
//         const category = await selectCategoryById(_id);
//         if(category) {
//             return category;
//         }
//     } catch (err) {
//         console.error(`Something went wrong trying to get a catgory documents: ${err}\n`);
//         return {};
//     }
//     return {};
// }
/**
 * Update data for category by id
 * @param category
 * @returns category data updated
 */
const saveProductData = async (product) => {
    try {
        const productUpdate = await (0, product_1.saveProduct)(product);
        if (productUpdate) {
            return productUpdate;
        }
    }
    catch (err) {
        console.error(`Something went wrong trying to get a catgory documents: ${err}\n`);
        return {};
    }
    return {};
};
exports.saveProductData = saveProductData;
