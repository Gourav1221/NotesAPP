const {Router}= require("express")
const User= require("../models/signup")
 const authRouter= Router()

authRouter.post("/signup",(req,res)=>{
    const user= new User(req.body)
    user.save((err,success)=>{
        if(err){
            return res.status(500).send({message:"Error occured"})
        }
        return res.status(201).send({message:"signup successful", user:success._doc})
    })
})

authRouter.post("/login",async (req,res)=>{
    
    const {username, password} = req.body;
    const validUser= await User.find({username,password})
    if(validUser.length < 1){
        return res.status(401).send({message:"Invalid Credentials"})
    }
    return res.send(validUser)
})

module.exports= authRouter