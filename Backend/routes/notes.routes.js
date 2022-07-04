const {Router}=require("express")
const noteModel= require("../models/notes.model")
const noteRouter= Router()

noteRouter.get("/",async (req,res)=>{
   try{
    const data= await noteModel.find().lean().exec()
    res.send(data)
   }
   catch(err){
    res.send(err.message)
   }
})

noteRouter.post("/",async (req,res)=>{
    try{
        const data= await noteModel.create(req.body)
        res.send(data)
       }
       catch(err){
        res.send(err.message)
       }
})

noteRouter.patch("/:id",async (req,res)=>{
    const {id}= req.params
    try{
        const data= await noteModel.findByIdAndUpdate(id,req.body).lean().exec()
        res.send(data)
       }
       catch(err){
        res.send(err.message)
       }
})

noteRouter.delete("/:id",async(req,res)=>{
    const {id}= req.params
    try{
        const data= await noteModel.findByIdAndDelete(id).lean().exec()
        res.send(data)
       }
       catch(err){
        res.send(err.message)
       }
})

noteRouter.get("/:id",async (req,res)=>{
    try{
        const data= await noteModel.find({name:req.params.id}).lean().exec()
        // const data= await noteModel.create(req.body)
         res.send(data)
       }
       catch(err){
        res.send(err.message)
       }
})

module.exports= noteRouter