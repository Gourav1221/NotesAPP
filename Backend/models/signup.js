const mongoose = require("mongoose");

const userSchema= mongoose.Schema({
    name:String,
    username:String,
    email:String,
    password:String

})

const userModel= mongoose.model("user",userSchema)

module.exports= userModel