import { loadAllProduct, saveProductData } from '../services/productService';
import { Request, Response } from 'express';

export const fetchProducts = async (req: Request, res: Response): Promise<void> => {
    const productData = await loadAllProduct();
    res.json({ products: productData });
    res.end();
}

export const saveProduct = async (req: Request, res: Response): Promise<void> => {
    const category = await saveProductData(req.body.product);
    res.json({ category: category });
    res.end();
}
