import { initialData } from '../services/initalDataService';
import { Request, Response } from 'express';

export const initData = async (req: Request, res: Response): Promise<void> => {
    await initialData();
    res.json({ isSuccess: 'true' });
}
