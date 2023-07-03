const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Portfolio:Pro08@portfolio.vspu42l.mongodb.net/")
.then(()=>{console.log("MongoDB Connected");})
.catch((err)=>{console.log("DB Error",err);})