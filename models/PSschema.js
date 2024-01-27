const mongoose = require("mongoose");

const psSchema=new mongoose.Schema({
    psName:{
        type:String,
        required:true
    },
    
    organizer:{
        type:String,
        required:true
    },
    noOfPeople:{
        type:String,
        required:true
    },
    
    studentsData:[{
        
        Name:{
            type:String,
            required:true
        },
        rollNo:{
            type:Number,
            required:true
        },
        year:{
            type:Number,
            required:true
        }


    }]


})

const PS = mongoose.model("PS",psSchema)

module.exports = PS