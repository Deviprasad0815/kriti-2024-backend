const mongoose = require("mongoose");

const psSchema=new mongoose.Schema({
    psName:{
        type:String,
        required:true
    },
    
    hostel:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hostels",
    }
    ,
    studentsData:[{
        
        name:{
            type:String,
            required:true
        },
        rollNo:{
            type:String,
            required:true
        },
        year:{
            type:String,
            required:true
        }


    }]


})

const PS = mongoose.model("PS",psSchema)

module.exports = PS