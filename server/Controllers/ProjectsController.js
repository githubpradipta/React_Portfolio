const projectModel=require("../Model/Projectmodel")


// Returns all the porject records
const getAllProjects = async(req,res)=>{
    const projectRecords = await projectModel.find();
    if(projectRecords.length==0) 
    res.json({message:"No projects are there"})
    else
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
    await projectModel.create(req.body);
    res.json({
        message:"Project seccessfully created"
    });
}

const deleteAllProjets = async(req,res)=>{
    await projectModel.deleteMany();
    res.json({
        message:"Seccessfully deleted all projects"
    });
}

module.exports={
    getAllProjects,
    creatProject,
    getProjectsByName,
    deleteAllProjets,
}