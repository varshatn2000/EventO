const mongoose = require("mongoose")

const Schema = mongoose.Schema
 const Users = new Schema({

    Name:{
        type:String,
        required:true
    },
    Phonenumber:{
        type:Number,
        unique:true
    },
    Emailid:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    }
})

const Subject = mongoose.model("Users",Users)

module.exports=Subject