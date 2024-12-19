import { isUserLogin } from '../services/userService';
import { Request, Response } from 'express';

export const checkLogin = async (req: Request, res: Response): Promise<void> => {
    const isUserLoggedIn = await isUserLogin(req.body.username, req.body.password);
    res.json({ isTrust: isUserLoggedIn });
}
