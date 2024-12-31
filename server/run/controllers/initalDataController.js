"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initData = void 0;
const initalDataService_1 = require("../services/initalDataService");
const initData = async (req, res) => {
    await (0, initalDataService_1.initialData)();
    res.json({ isSuccess: 'true' });
};
exports.initData = initData;
