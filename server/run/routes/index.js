"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const categoriesController_1 = require("../controllers/categoriesController");
const initalDataController_1 = require("../controllers/initalDataController");
const homeController_1 = require("../controllers/homeController");
const router = express_1.default.Router();
router.post('/checkLogin', userController_1.checkLogin);
// Categiries routes
router.get('/getAllCategories', categoriesController_1.getAllCategories);
router.get('/getCategoryById', categoriesController_1.fetchCategoryById);
router.post('/updateCategory', categoriesController_1.updateCategory);
router.post('/initialData', initalDataController_1.initData);
router.get('/fetchHomeData', homeController_1.fetchHomeData);
exports.default = router;
