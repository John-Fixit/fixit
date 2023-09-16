const { headerInfoController } = require("../../Controller/HomeController/homeController");
const { api_routes } = require("../routes");
const HOMEROUTER = require("express").Router();

HOMEROUTER.get("/", (req, res)=>{
    res.send("You are on Fixit server end");
})
//header(name and profession)
HOMEROUTER.get(api_routes.headerInfo, headerInfoController)

module.exports = HOMEROUTER;