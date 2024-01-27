const mongoose = require("mongoose");
require('dotenv').config();

const MongoDBURL = process.env.MongoDBURL;
 const connectDB = async () => {
    let connection;
    try {
       connection = await mongoose.connect(
        MongoDBURL)
        console.log((`MongoDB connected:${connection.connection.host}`));
        return connection;
       }
catch(error){
    console.log(error)
}
};
module.exports =connectDB