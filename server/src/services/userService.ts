import { selectUserByUsername } from '../database/dbConnect';
import bcrypt from 'bcrypt';

export const isUserLogin = async(username: string, password: string) => {
    try {
        const user = await selectUserByUsername(username);
        if(user) {
            return await bcrypt.compare(password, user.password);
        }
    } catch (err) {
        console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
        return false;
    }
    return false;
}