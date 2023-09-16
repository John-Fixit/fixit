const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    img_url: {
        type: URL,
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
        type: URL,
        required: true
    },
    demoLink: {
        type: URL,
        required: true
    }
})

const projectModel = mongoose.model("project", projectSchema);
module.exports = projectModel;