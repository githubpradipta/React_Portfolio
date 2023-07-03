const express = require('express')
const Route =require("./Routes/projectRouter");
const connection = require("./Model/Connection")

const app=express()
app.use(express.json())
app.use("/api/v1",Route);

const PORT=8000;
app.listen(PORT,()=>{console.log(`Server started at port ${PORT}`);})
