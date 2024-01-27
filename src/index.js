require('dotenv').config();
const express = require("express");
const app = express();

const port = process.env.PORT;
const connectDB=require('../config/config');
const login = require('../controller/login');
const PS = require('../controller/PS');

app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
} )

let db =  connectDB();
// app.use(express.urlencoded({extended:false}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get('/api/login',login)
app.get('/api/:id',PS.ProbS)
app.get('/edit',PS.edit)
app.post('/edit',PS.update)
// app.post('/login',async (req,res)=>{
//     const data = {
//         username:req.body.username,
//         password:req.body.password
//     }

//     await collection.insertMany([data])
//     res.sendStatus(202)
// })

// app.get('/api/:code',async (req,res)=>{
//     const ps=await PS.findById(req.params.code);
//     res.status(200).json(ps);
// })