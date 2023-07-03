const projectModel=require("../Model/Projectmodel")


// Returns all the porject records
const getAllProjects = async(req,res)=>{
    const projectRecords = await projectModel.find();
    res.json(projectRecords);
}

// Return the project on the basis of given id
const getProjectsByName = async(req,res)=>{
    const projectid=req.params.id;
    const record = await projectModel.findOne({_id:projectid})
    res.json(record);
}

// For creating one project record
const creatProject = async(req,res)=>{
    const record = await projectModel.create(req.body);
    res.json({
        message:"Project seccessfully created"
    });
}

module.exports={
    getAllProjects,
    creatProject,
    getProjectsByName,
}