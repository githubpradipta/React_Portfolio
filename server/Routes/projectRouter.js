const express = require('express')
const Route=express.Router();
const {getAllProjects,creatProject,getProjectsByName,deleteAllProjets} = require("../Controllers/ProjectsController")
Route
// Returns all the porject records
.get('/projects',getAllProjects) 
// Return the project on the basis of given id
.get('/project/:id',getProjectsByName) 
// For creating one project record
.post('/project',creatProject)

.delete('/projects',deleteAllProjets)


module.exports=Route;