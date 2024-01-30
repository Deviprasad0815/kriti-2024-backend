const jwt = require('jsonwebtoken');
const hostels = require('../models/hostel');

const login = async (req,res)=>{

    try{
        const check = await hostels.findOne({username:req.body.username})
        
        if(check.password === req.body.password){
            jwt.sign({check},'kriti2024',{
                expiresIn: 60*60*24,
            },(err,token)=>{
                res.json({
                    token
                }).status(200);
            })
        }
        else{
            res.sendStatus(401)
        }
    }
    catch(e){
        res.sendStatus(404).send(e);
    }
}

const verifyToken = (req,res,next)=>{
    try{
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){;
        jwt.verify(bearerHeader, "kriti2024", (err, decoded) => {
            if (err) {
                console.log(err);
                res.json({ auth: false, message: "you are failed to authenticate"});
            } else {
                req.userId = decoded.check._id;
                next();
            }});
    }
    else{
        res.sendStatus(403);
    }
    }
    catch(err){
        console.log(err);
        res.sendStatus(403);
    }
}

module.exports={login,verifyToken};