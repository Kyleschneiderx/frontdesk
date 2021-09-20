const express = require('express');
const router = express.Router();

const accountSid = process.env.TWILIO_ACCOUNT_SID;

const apiKey = process.env.TWILIO_API_KEY;
const apiSecret = process.env.TWILIO_API_SECRET;
const client = require('twilio')(apiKey, apiSecret, { accountSid: accountSid });


/// model
const {auth} = require('../middleware/auth')
const {Collections} = require('../models/collections')


router.route("/")

.get(auth,  async (req, res)=>{
    Collections
    .find()
    .exec((err, doc) =>{
        if(err) return res.status(400).send(err)
        res.status(200).send(doc)
    })
})

.post(auth, (req, res)=>{
    const recipient = new Collections({
        ...req.body
    });

    recipient.save((err, doc)=>{
        if(err) return res.status(400).send(err)
        res.status(200).json({
            post:true,
            recipientId: doc._id
        })
    })
})


.delete(auth, (req,res)=>{
    console.log(req.body)
    let id = req.body._id
    Collections.findByIdAndRemove(id, (err, doc)=>{
        if(err) return res.status(400).send(err)
        res.json(true)
    })
})










router.route('/call')
.post(auth, async (req, res)=>{

    let skip = req.query.skip ? parseInt(req.query.skip) :0;
    const recipients =  await Collections
    .find()
        recipients.forEach(patient =>{

        console.log(patient.name)
    
        client.calls.create({
            machineDetection: 'DetectMessageEnd',
            twiml: `<Response><Say>Hello ${patient.name}, this is a courtesy pre-collection call from Lake City Physical Therapy. Please call us back at 208-966-4176 within 3 business days to avoid collection action. Thank you.</Say></Response>`,
            to:`${patient.number}`,
            from: process.env.TWILIO_NUMBER,
            method: "POST"
        }).then(call => console.log(call, patient.name))
    
    })



})



module.exports = router;