const express= require("express")
const connect= require("./storage/db")
const routers= require("./routes/users")
const noterouter= require("./routes/notes.routes")
const cors= require("cors")
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello world!")
})

app.use("/reg",routers)

app.use("/note",noterouter)

app.listen(8080,async ()=>{
    await connect;
    console.log("server started")
})