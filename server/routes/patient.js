const express = require('express');
const router = express.Router();




/// model
// const {auth} = require('../middleware/auth')
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

.post((req,res)=>{

    console.log(req.body)

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



module.exports = router;