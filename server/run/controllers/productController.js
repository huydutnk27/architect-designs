"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveProduct = exports.fetchProducts = void 0;
const productService_1 = require("../services/productService");
const fetchProducts = async (req, res) => {
    const productData = await (0, productService_1.loadAllProduct)();
    res.json({ products: productData });
    res.end();
};
exports.fetchProducts = fetchProducts;
const saveProduct = async (req, res) => {
    const category = await (0, productService_1.saveProductData)(req.body.product);
    res.json({ category: category });
    res.end();
};
exports.saveProduct = saveProduct;
