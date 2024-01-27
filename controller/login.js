const express = require("express");
const hostels = require('../models/hostel')

const login = async (req,res)=>{

    try{
        const check = await hostels.findOne({username:req.body.username})
        
        if(check.password === req.body.password){
            
            res.sendStatus(200)
        }
        else{
            res.sendStatus(401)
        }
    }
    catch(e){
        res.sendStatus(404).send(e);
    }
}

module.exports=login;