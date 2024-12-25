import { loadAll, getCategoryById, saveCategoryData } from '../services/categoriesService';
import { Request, Response } from 'express';

export const getAllCategories = async (req: Request, res: Response): Promise<void> => {
    const allCategory = await loadAll();
    res.json({ categories: allCategory });
    res.end();
}

export const fetchCategoryById = async (req: Request, res: Response): Promise<void> => {
    const category = await getCategoryById(req.query?._id as string);
    res.json({ category: category });
    res.end();
}

export const updateCategory = async (req: Request, res: Response): Promise<void> => {
    const category = await saveCategoryData(req.body.category);
    res.json({ category: category });
    res.end();
}
