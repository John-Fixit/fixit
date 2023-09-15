const { api_routes } = require("../routes");
const HOMEROUTER = require("express").Router();

HOMEROUTER.get("/", (req, res)=>{
    res.send("You are on Fixit server end");
})
// HOMEROUTER.get(api_routes.headerInfo, (req, res)=>{
//     res.send({
//         status: "success",
//         message: {
//             name: "Adeoye John Oluwakayode",
//             profession: ["Full Stack developer", "Software Engineer"]
//         }
//     })
// })

module.exports = HOMEROUTER;