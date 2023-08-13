const express = require('express')
const projectRoute =require("./Routes/projectRouter");
const contactRoute =require("./Routes/contactRouter");
const connection = require("./Model/Connection")

const app=express()
app.use(express.json())
app.use("/api/v1",projectRoute);
app.use("/api/v1",contactRoute);


const PORT=8000;
app.listen(PORT,()=>{console.log(`Server started at port ${PORT}`);})
