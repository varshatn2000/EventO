const mongoose = require("mongoose")

const Schema = mongoose.Schema
 const Events = new Schema({

    EventTitle:{
        type:String,
        required:true,
    },
    Description:{
        type:String,
    },
    Date:{
        type:String,
        required:true,
    },
    Destination:{
        type:String,
        required:true,
    },
    StartTime:{
        type:String,
        required:true,
    },
    EndTime:{
        type:String,
    },
    MobileNo:{
        type:Number,
        required:true,
    },
})

const Subject = mongoose.model("Events",Events)

module.exports=Subject