var express = require('express');
var router = express.Router();
const Contact = require('../model/contact')

router.post("/newContact",(req, res, next)=>{
    let newContact = new Contact({
        name: req.body.name,
        contactNumber: req.body.contactNumber,
        email: req.body.email
    })
    newContact.save((err, data)=>{
        if(err){
            console.log(err)
            res.json(err)
        }
        else{
            res.json({msg:"Successful operation"})
        }
    })
})
//Gets the list of contacts
router.get("/getContact", (req, res, next)=>{
    Contact.find(function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
})
//Find contact by ID
router.get("/getOneContact/:id", (req, res, next)=>{
    Contact.findById({_id:req.params.id}, function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
})
//Gets the list of contacts that match the specified name
router.get("/getOneContactName/:text", (req, res, next)=>{
    let regex = new RegExp(req.params.text,'i');
    Contact.find({$and:[{$or:[{name: regex}]}]}, function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
})
//update contact
router.put("/updateContact/:id", (req, res, next)=>{
    Contact.findOneAndUpdate({_id:req.params.id}),{
        $set: {
            name: req.body.name,
            contactNumber: req.body.contactNumber,
            email: req.body.email
        }
    },
    function(err, result){
        if(err){
            res,json(err)
        }
        else{
            res.json({msg: "Successful operation!"})
        }
    }
})
//Delete contact
router.delete("/deleteContact/:id", (req, res,next)=>{
    Contact.remove({_id:req.params.id}, function(err, result){
        if(err){
            res.json(err)
        }
        else{
            res.json({msg: "Successful operation"})
        }
    })
})
module.exports = router;