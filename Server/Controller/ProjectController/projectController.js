const projectModel = require("../../Model/projectModel")

//get all projects
const getProject=async(req, res)=>{
    try{
        const projects = projectModel.find({});
        res.status(200).send({
            status: "success",
            message: "project retrieved successfully",
            data: projects
        })
    }
    catch(err){
        res.status(500).send({
            status: "error",
            message: "Internal server error"
        })
    }
}

//post project
const addNewProject=async(req, res)=>{
    try{
        const {img_url, title, description, githubLink, demoLink} = req.body;
        // const form = new projectModel({
        //     img_url,
        //     title,
        //     description,
        //     githubLink,
        //     demoLink
        // });
        // const result = await form.save()
        const result = await projectModel.create({
            img_url,
            title,
            description,
            githubLink,
            demoLink
        })
        res.status(200).send({
            status: "success",
            message: "project saved successfully",
            data: result
        })
    }
    catch(err){
        res.status(500).send({
            status: "error",
            message: "Internal server error"
        })
    }
}

const editProject=async(req, res)=>{
    console.log(req.body)
}

const deleteProject= async(req, res)=>{
    try{
        const {projectId} = req.params.projectId;
        projectModel.deleteOne({_id: projectId}).
        then(()=>{
            res.status(200).send({
                status: "success",
                message: "project deleted successfully",
            })
        }).catch=err=>{
            console.log(err);
            res.status(400).send({
                status: "error",
                message: "Unexpected error when deleting, please check your connection!"
            })
        }

    }
    catch(err){
        console.log(err);
        res.status(500).send({
            status: "error",
            message: "Internal server error"
        })
    }
}


module.exports = {getProject, addNewProject, editProject}