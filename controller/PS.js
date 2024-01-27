const {ObjectId}=require('mongodb')
const PS=require('../models/PSschema')
const ProbS =async (req,res)=>{
 
    
    if ( ObjectId.isValid(req.params.id)) {
       
       await PS.findOne({_id:new ObjectId(req.params.id)})
               .then(doc=>{
          res.status(200).json(doc)
          })
               .catch(err=>{
            res.status(500).json({error:'could not fetch the data'})
          })  
       }
      
        
    }
      


module.exports=ProbS