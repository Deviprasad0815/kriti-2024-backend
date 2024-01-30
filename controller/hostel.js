
const PS = require('../models/PSschema');
const psRegister = async (req, res) => {
    try
    {
        
        const check = await PS.findOne({psName:req.body.psName,hostel:req.userId});
        if(check){
            res.sendStatus(403);
            return;
        }
        const ps = new PS({
            psName:req.body.psName,
            hostel:req.userId,
            studentsData:req.body.participants
        });
        await ps.save();
        res.sendStatus(201);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500).send(err);
    }
};

module.exports = {psRegister};