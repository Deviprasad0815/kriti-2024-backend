const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.MongoDBURL)
.then(()=>{
    console.log("connected to database")
})
.catch((err)=>{
    console.log(err)
})

const HostelSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
const hostels = mongoose.model("Hostels",HostelSchema)

module.exports = hostels