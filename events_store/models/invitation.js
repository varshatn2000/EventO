const mongoose = require("mongoose")

const Schema = mongoose.Schema
 const Invitations = new Schema({

    EventId:{
        type:String,
        required:true
    },
    EventTitle:{
        type:String,
        required:true
    },
    UserId:{
        type:String,
        required:true
    },
    Status:{
        type:Boolean,
        required:true
    }
})

const Subject = mongoose.model("Invitations",Invitations)

module.exports=Subject