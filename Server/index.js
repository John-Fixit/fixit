const app = require("express")();
const HOMEROUTER = require("./Routes/HomeRoutes/homeRoute");
const EDITROUTER = require("./Routes/editRoute");
const ROUTER = require("./Routes/route");
const mongooseConnection = require("./config")
require("dotenv").config();
const PORT = process.env.PORT || 4002
mongooseConnection();
app.use("/", ROUTER);
app.use("/home", HOMEROUTER);
app.use("/edit", EDITROUTER);
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})