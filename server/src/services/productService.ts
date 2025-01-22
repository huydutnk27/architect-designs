import { loadProductList, saveProduct } from '../database/product';

/**
 * Load all products
 * @returns list of product data
 */
export const loadAllProduct = async() => {
    try {
        return await loadProductList();
    } catch (err) {
        console.error(`Something went wrong trying to get product list documents: ${err}\n`);
        return {};
    }
}

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
export const saveProductData = async(product: Product) => {
    try {
        const productUpdate = await saveProduct(product);
        if(productUpdate) {
            return productUpdate;
        }
    } catch (err) {
        console.error(`Something went wrong trying to get a catgory documents: ${err}\n`);
        return {};
    }
    return {};
}