const app = require("express")();
const HOMEROUTER = require("./Routes/HomeRoutes/homeRoute");
const EDITROUTER = require("./Routes/editRoute");
const ROUTER = require("./Routes/route");
require("dotenv").config();
const PORT = process.env.PORT || 4002

app.use("/", ROUTER);
app.use("/home", HOMEROUTER);
app.use("/edit", EDITROUTER);
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})