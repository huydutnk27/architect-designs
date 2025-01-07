"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateHome = exports.fetchHomeData = void 0;
const homeService_1 = require("../services/homeService");
const fetchHomeData = async (req, res) => {
    const homeData = await (0, homeService_1.getHomeData)();
    res.json({ home: homeData });
    res.end();
};
exports.fetchHomeData = fetchHomeData;
const updateHome = async (req, res) => {
    const home = await (0, homeService_1.saveHomePageData)(req.body.homeData);
    res.json({ homeUpdated: home });
    res.end();
};
exports.updateHome = updateHome;
