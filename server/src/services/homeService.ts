import { loadHomeData, saveHomeData } from '../database/dbConnect';

/**
 * Load data for home page
 * @returns home page data
 */
export const getHomeData = async() => {
    try {
        return await loadHomeData();
    } catch (err) {
        console.error(`Something went wrong trying to get home documents: ${err}\n`);
        return {};
    }
}

/**
 * Update data for home page data.
 * @param category
 * @returns home data was updated
 */
export const saveHomePageData = async(homeData: HomeData) => {
    try {
        const homeUpdate = await saveHomeData(homeData);
        if(homeUpdate) {
            return homeUpdate;
        }
    } catch (err) {
        console.error(`Something went wrong trying to get a catgory documents: ${err}\n`);
        return {};
    }
    return {};
}
