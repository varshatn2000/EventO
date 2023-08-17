const express=require("express")
const usermodel=require("../models/event.js")
const app=express()

app.post("/event", async(req,res)=>{
    const user = new usermodel(req.body)
 try{
     await user.save()
     .then(() =>res.json("details added to events table"))
 } catch(error){
     res.status(500).send(error)
 }
 });

 app.get("/event", async (request, response) => {
    const users = await usermodel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

 module.exports=app