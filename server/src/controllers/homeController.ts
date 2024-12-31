import { getHomeData } from '../services/homeService';
import { Request, Response } from 'express';

export const fetchHomeData = async (req: Request, res: Response): Promise<void> => {
    const homeData = await getHomeData();
    res.json({ home: homeData });
    res.end();
}
