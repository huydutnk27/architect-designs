import { loadHomeData} from '../database/dbConnect';

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
