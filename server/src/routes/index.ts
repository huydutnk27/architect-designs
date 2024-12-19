// const express = require("express");
// const router = express.Router();
// const userController = require("../controllers/userController");

// router.route("/").get((req, res) => {
//     res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
// });

// router.post("/checkLogin", userController.checkLogin);

// module.exports = router;

import express, { Request, Response, Router } from 'express';
import { checkLogin } from '../controllers/userController';
// import { UserService } from '../services/userService';

const router: Router = express.Router();
// const userService = new UserService();
// const userController = new UserController(userService);

router.route('/').get((req: Request, res: Response): void => {
    res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
});

router.post('/checkLogin', checkLogin);

export default router;