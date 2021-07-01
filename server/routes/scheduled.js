const express = require('express');
const router = express.Router();

/// model
const {auth} = require('../middleware/auth')
const {Scheduled} = require('../models/scheduled')

router.route('/schedule')
.post(auth, (req,res)=>{

    console.log(req.body)
    const scheduled = new Scheduled({
        ...req.body
    });

    scheduled.save((err, doc)=>{
        if(err) return res.status(400).send(err)
        res.status(200).json({
            post:true,
            patientId: doc._id
        })
    })



})


module.exports = router;