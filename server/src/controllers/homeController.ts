import { getHomeData, saveHomePageData } from '../services/homeService';
import { Request, Response } from 'express';

export const fetchHomeData = async (req: Request, res: Response): Promise<void> => {
    const homeData = await getHomeData();
    res.json({ home: homeData });
    res.end();
}

export const updateHome = async (req: Request, res: Response): Promise<void> => {
    const home = await saveHomePageData(req.body.homeData);
    res.json({ homeUpdated: home });
    res.end();
}
