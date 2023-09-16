const headerInfoController=(req, res)=>{
    res.send({
        status: "success",
        message: {
            name: "Adeoye John Oluwakayode",
            profession: ["Full Stack developer", "Software Engineer"]
        }
    })
}


module.exports = {headerInfoController}