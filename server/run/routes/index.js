"use strict";
// const express = require("express");
// const router = express.Router();
// const userController = require("../controllers/userController");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// router.route("/").get((req, res) => {
//     res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
// });
// router.post("/checkLogin", userController.checkLogin);
// module.exports = router;
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
// import { UserService } from '../services/userService';
const router = express_1.default.Router();
// const userService = new UserService();
// const userController = new UserController(userService);
router.route('/').get((req, res) => {
    res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
});
router.post('/checkLogin', userController_1.checkLogin);
exports.default = router;
