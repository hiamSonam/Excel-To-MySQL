import express from "express";
import helloController from "../controllers/helloController"
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", helloController.getHomePage);
    return app.use("/", router);
};

module.exports = initWebRoutes;