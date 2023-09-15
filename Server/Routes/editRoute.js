const EDITROUTER = require('express').Router();

EDITROUTER.get("/", (req, res)=>{
    res.send("You are on Fixit server end where edit is executed");
})

module.exports = EDITROUTER;