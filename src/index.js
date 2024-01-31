require('dotenv').config();
const express = require("express");
const cors = require('cors')
const app = express();
const cookieParser = require("cookie-parser");
const getAdminRouter = require("../config/adminBro.js");
const bodyParser = require("body-parser");
// const morgan = require("morgan");
const port = process.env.PORT;
const connectDB=require('../config/config');
const login = require('../controller/login');
const PS = require('../controller/PS');
const hostelroouter = require( "../routes/hostel.js");

app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
} )

app.use(cookieParser('secret'));
// app.use(morgan("dev"));
let db 
let adminRouter

const start = async () => {
    try {
        db =await connectDB();
        
        adminRouter = getAdminRouter(db, app);
        app.use(bodyParser.json());
        app.use("/admin",adminRouter);
        app.get('/api/login',login)
        app.get('/api/:id',PS.ProbS)
        app.get('/edit',PS.edit)
        app.post('/edit',PS.update)
        app.use("/hostel",hostelroouter);
        
    } catch (error) {
        console.log(error);
    }
};

start();

app.use(cors());
