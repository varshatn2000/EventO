const express=require("express")
const usermodel=require("../models/user.js")
const app=express()

app.post("/user", async(req,res)=>{
    const user = new usermodel(req.body)
 try{
     await user.save()
     .then(() =>res.json("details added to users table"))
 } catch(error){
     res.status(500).send(error)
 }
 })

 app.get("/user", async (request, response) => {
    const users = await usermodel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  }); 

 module.exports=app