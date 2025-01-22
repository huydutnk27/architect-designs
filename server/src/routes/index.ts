import express, { Router } from 'express';
import { checkLogin } from '../controllers/userController';
import { getAllCategories, fetchCategoryById, updateCategory } from '../controllers/categoriesController';
import { initData } from '../controllers/initalDataController';
import { fetchHomeData, updateHome } from '../controllers/homeController';
import { fetchProducts, saveProduct } from '../controllers/productController';


const router: Router = express.Router();

router.post('/checkLogin', checkLogin);

// Categiries routes
router.get('/getAllCategories', getAllCategories);
router.get('/getCategoryById', fetchCategoryById);
router.post('/updateCategory', updateCategory);
router.post('/initialData', initData);
router.get('/fetchHomeData', fetchHomeData);
router.post('/updateHomeData', updateHome);

// product API routes
router.get('/loadAllProduct', fetchProducts);
router.post('/saveProduct', saveProduct);

export default router;