import express, { Router } from 'express';
import { checkLogin } from '../controllers/userController';
import { getAllCategories, fetchCategoryById, updateCategory } from '../controllers/categoriesController';

const router: Router = express.Router();

router.post('/checkLogin', checkLogin);

// Categiries routes
router.get('/getAllCategories', getAllCategories);
router.get('/getCategoryById', fetchCategoryById);
router.post('/updateCategory', updateCategory);

export default router;