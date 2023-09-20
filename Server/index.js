const express = require("express")
const app = express();
const HOMEROUTER = require("./Routes/HomeRoutes/homeRoute");
const PROJECTROUTER = require("./Routes/ProjectRoutes/projectRoute");
const EDITROUTER = require("./Routes/editRoute");
const ROUTER = require("./Routes/route");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongooseConnection = require("./config")
require("dotenv").config();
const PORT = process.env.PORT || 4002
//middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"]
}));

mongooseConnection();
//route
app.use("/", ROUTER);
app.use("/home", HOMEROUTER);
app.use("/project", PROJECTROUTER);
app.use("/edit", ROUTER);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})