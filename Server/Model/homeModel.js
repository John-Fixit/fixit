const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
        name: {
            type: String,
            default: "Adeoye John Oluwakayode"
        },
        profession: {
            type: Array,
            default: ["Full Stack developer", "Software Engineer"]
        }
})
const homeModel = mongoose.model("home", homeSchema);
module.exports = homeModel;