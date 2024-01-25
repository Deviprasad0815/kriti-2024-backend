require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const collection = require('./mongodb')
const port = process.env.PORT;

// app.use(express.urlencoded({extended:false}))
app.use(bodyParser.urlencoded({extended:true}))

app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
} )

// app.post('/login',async (req,res)=>{
//     const data = {
//         username:req.body.username,
//         password:req.body.password
//     }

//     await collection.insertMany([data])
//     res.sendStatus(202)
// })

app.get('/api/login',async (req,res)=>{

    try{
        const check = await collection.findOne({username:req.body.username})
        
        if(check.password === req.body.password){
            res.sendStatus(200)
        }
        else{
            res.sendStatus(401)
        }
    }
    catch{
        res.sendStatus(404)
    }
})