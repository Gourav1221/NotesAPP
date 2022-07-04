const mongoose = require("mongoose");

const noteSchema= mongoose.Schema({
    name:String,
    title:String,
    notes:String,
    lavels:String

})

const noteModel= mongoose.model("note",noteSchema)

module.exports= noteModel