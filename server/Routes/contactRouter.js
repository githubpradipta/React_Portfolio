const express = require('express')
const {contactHandller,sendMail} = require('../Controllers/contactController')
const Route=express.Router();
Route
.post('/contact',contactHandller)
module.exports=Route;