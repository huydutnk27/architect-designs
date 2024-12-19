"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    checkLogin(req, res) {
        const isUserLogin = this.userService.isUserLogin;
        res.send("User login is: " + isUserLogin);
    }
}
exports.UserController = UserController;
// const checkLogin = (req, res) => {
//     const isUserLogin = UserService.isUserLogin();
//     res.send("User login is: " + isUserLogin);
// };
// module.exports = {
//     checkLogin
// };
