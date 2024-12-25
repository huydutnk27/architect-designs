import { loadAllCategories, selectCategoryById, saveCategory } from '../database/dbConnect';

/**
 * Load all categories
 * @returns list of category data
 */
export const loadAll = async() => {
    try {
        return await loadAllCategories();
    } catch (err) {
        console.error(`Something went wrong trying to get all cateories documents: ${err}\n`);
        return {};
    }
}

/**
 * Get category by id
 * @param _id
 * @returns category data
 */
export const getCategoryById = async(_id: string) => {
    try {
        const category = await selectCategoryById(_id);
        if(category) {
            return category;
        }
    } catch (err) {
        console.error(`Something went wrong trying to get a catgory documents: ${err}\n`);
        return {};
    }
    return {};
}

/**
 * Update data for category by id
 * @param category
 * @returns category data updated
 */
export const saveCategoryData = async(category: Category) => {
    try {
        const categoryUpdate = await saveCategory(category);
        if(categoryUpdate) {
            return categoryUpdate;
        }
    } catch (err) {
        console.error(`Something went wrong trying to get a catgory documents: ${err}\n`);
        return {};
    }
    return {};
}