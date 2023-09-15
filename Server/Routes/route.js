const { api_routes } = require("./routes");

const ROUTER = require("express").Router();

ROUTER.get("/", (req, res)=>{
    res.send("You are on Fixit server end");
})

module.exports = ROUTER;