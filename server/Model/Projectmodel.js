const mongoose = require("mongoose");
const projectSchema = mongoose.Schema({
    title:{
        type:String,
        required: true,
        unique: true
    },
    shortDesc:{
        type:String,
        required: true
    },
    Desc:{
        type:String,
        required: true
    },
    tech:[{
        type:String,
        required: true
    }],
    githubLink:{
        type:String,
        required: true
    },
    imgLink:{
        type:String,
    }
})

const projectModel = mongoose.model("Projects",projectSchema);

module.exports=projectModel;