"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchHomeData = void 0;
const homeService_1 = require("../services/homeService");
const fetchHomeData = async (req, res) => {
    const homeData = await (0, homeService_1.getHomeData)();
    res.json({ home: homeData });
    res.end();
};
exports.fetchHomeData = fetchHomeData;
