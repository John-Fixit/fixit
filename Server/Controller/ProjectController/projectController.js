const projectModel = require("../../Model/projectModel");

//get all projects
const getProject = async (req, res) => {
  try {
    projectModel.find({}).then((data) => {
      res.status(200).send({
        status: "success",
        message: "project retrieved successfully",
        data,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "error",
      message: "Internal server error",
    });
  }
};

//post project
const addNewProject = async (req, res) => {
  const { img_url, title, description, githubLink, demoLink } = req.body;
  try {
    const result = await projectModel.create({
      img_url,
      title,
      description,
      githubLink,
      demoLink,
    });
    res.status(200).send({
      status: "success",
      message: "project saved successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      status: "error",
      message: "Internal server error",
    });
  }
};

// update project
const editProject = async (req, res) => {
  const projectId = req.params.projectId;
  const { img_url, title, description, githubLink, demoLink } = req.body;
  try {
    projectModel
      .findOneAndUpdate(
        { _id: projectId },
        {
          $set: {
            title: title,
            description: description,
            githubLink: githubLink,
            demoLink: demoLink,
          },
        },
        { new: true }
      )
      .then((updatedData) => {
        res.status(200).send({
          status: "success",
          message: "project updated successfully",
          data: updatedData,
        });
      })
      .catch((err) => {
        console.log(err);
        catchResponse(res, "Error occurred, project not updated", 400);
      });
  } catch (err) {
    console.log(err);
    catchResponse(
      res,
      "Unexpected error when deleting, please check your connection!",
      400
    );
  }
};

// delete project
const deleteProject = async (req, res) => {
    const { projectId } = req.params;
    console.log(projectId);
  try {
     projectModel.findOneAndDelete({ _id: projectId }).then(deletedData=>{
         if (deletedData) {
           console.log(deletedData);
           res.status(200).send({
             status: "success",
             message: `${deletedData?.title} has been deleted successfully`,
           });
         } else {
          res.status(404).send({
            status: "error",
            message: "Item not found"
          })
         }
     });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "error",
      message: "Internal server error",
    });
  }
};

const catchResponse = (res, message, status) => {
  res.status(status).send({
    status: "error",
    message,
  });
};

module.exports = { getProject, addNewProject, editProject, deleteProject };
