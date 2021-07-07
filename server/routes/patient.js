const express = require('express');
const router = express.Router();


/// model
const {auth} = require('../middleware/auth')
const {api} = require('../middleware/apikey')
const {Patient} = require('../models/patient')


router.route('/')
.get((req,res)=>{

    // .populate('ownerId', 'name lastname')   

    Patient
    .find()
    .exec((err, doc) =>{
        if(err) return res.status(400).send(err)
        res.status(200).send(doc)
    })

})

.post(api,(req,res)=>{

    console.log(req.body.name, "Name")

    const patient = new Patient({
        ...req.body
    });

    patient.save((err, doc)=>{
        if(err) return res.status(400).send(err)
        res.status(200).json({
            post:true,
            patientId: doc._id
        })
    })

    // const patient = new Patient({
    //     ...req.body
    // });

    // Patient.save((err, doc)=>{
    //     if(err) return res.status(400).send(err)
    //     res.status(200).json({
    //         post:true,
    //         patientId: doc._id
    //     })
    // })



})

.patch(auth,(req,res)=>{
    console.log(req.body)
    Patient.findByIdAndUpdate(req.body._id, req.body, { new: true}, (err, doc)=>{
        if(err) return res.status(400).send(err)
        res.status(200).json({
            success: true,
            doc
        })
    })
})





.delete(auth, (req,res)=>{
    console.log(req.body)
    let id = req.body._id
    Patient.findByIdAndRemove(id, (err, doc)=>{
        if(err) return res.status(400).send(err)
        res.json(true)
    })
})



module.exports = router;