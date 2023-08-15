const mongoose = require("mongoose");
mongoose.connect(process.env.DBURL)
.then(()=>{console.log("MongoDB Connected");})
.catch((err)=>{console.log("DB Error",err);})