const express=require("express")
const usermodel=require("../models/invitation.js")
const app=express()

app.post("/invitation", async(req,res)=>{
    const user = new usermodel(req.body)
 try{
     await user.save()
     .then(() =>res.json("details added to invitations table"))
 } catch(error){
     res.status(500).send(error)
 }
 });

 app.get("/invitation", async (request, response) => {
    const users = await usermodel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.delete("/invitation/:id", async (request, response) => {
    const users = await usermodel.findByIdAndDelete(request.params.id);
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.put("/invitation/:id", async (request, response) => {
    const users = await usermodel.findByIdAndUpdate(request.params.id,{
      Status:request.body.Status
    });
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  
 module.exports=app