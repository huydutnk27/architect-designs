"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLogin = void 0;
const userService_1 = require("../services/userService");
const checkLogin = async (req, res) => {
    const isUserLoggedIn = await (0, userService_1.isUserLogin)(req.body.username, req.body.password);
    res.json({ isTrust: isUserLoggedIn });
};
exports.checkLogin = checkLogin;
