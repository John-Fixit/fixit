const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    img_url: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    githubLink: {
        type: String,
        required: true
    },
    demoLink: {
        type: String,
        required: true
    }
})

const projectModel = mongoose.model("projects", projectSchema);
module.exports = projectModel;