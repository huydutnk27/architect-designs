import { initialSampleData } from '../database/dbConnect';

export const initialData = async() => {
    try {
        await initialSampleData();
    } catch (err) {
        console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
        return false;
    }
    return true;
}