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

    // let skip = req.query.skip ? parseInt(req.query.skip) :0;
    const recipients =  await Collections
    .find()
        recipients.forEach(patient =>{

        console.log(patient.name)
    
        client.calls.create({
            machineDetection: 'DetectMessageEnd',
            twiml: `<Response><Say>Hi ${patient.name} this is Lake City Physical Therapys automated pre-collections courtesy call regarding your outstanding balance. Please call our billing department a call back at 208-966-4176 or visit our website at lake-city-pt.com and navigate to the patient payment portal. If this information seems incorrect please contact us to resolve the matter, Thank You and have a nice day</Say></Response>`,
            to:`${patient.number}`,
            from: process.env.TWILIO_NUMBER,
            method: "POST"
        }).then(call => console.log(call, patient.name))
    
    })


})



module.exports = router;