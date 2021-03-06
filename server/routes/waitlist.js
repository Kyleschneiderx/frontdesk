const express = require('express');
const router = express.Router();

const accountSid = process.env.TWILIO_ACCOUNT_SID;

const apiKey = process.env.TWILIO_API_KEY;
const apiSecret = process.env.TWILIO_API_SECRET;
const client = require('twilio')(apiKey, apiSecret, { accountSid: accountSid });


/// model
const {auth} = require('../middleware/auth')
const {Waitlist} = require('../models/waitlist')

// const moment = require('moment')
var moment = require('moment-timezone');


router.route("/")

.get(auth,  async (req, res)=>{
    Waitlist
    .find()
    .exec((err, doc) =>{
        if(err) return res.status(400).send(err)
        res.status(200).send(doc)
    })
})

.post(auth, (req, res)=>{
    const recipient = new Waitlist({
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
    Waitlist.findByIdAndRemove(id, (err, doc)=>{
        if(err) return res.status(400).send(err)
        res.json(true)
    })
})










router.route('/text')
.post(auth, async (req, res)=>{

    const times = [];
    req.body.forEach(item => times.push(` ${moment(item).tz("America/Los_Angeles").format('MMMM Do [at] h:mm a')}`))

    console.log(times)

    const recipients =  await Waitlist
    .find()
        recipients.forEach(patient =>{

        console.log(patient)
        client.messages.create({
            body: `Hi ${patient.name}, we have openings at Lake City Physical Therapy on ${times}. If your available for any of these times please give us a call at 208-762-2100. It is first come, first serve. Thank you and have a nice day. \n\If you'd like to be removed from our text waitlist just REPLY : Remove `, 
            to:`+1${patient.number}`,
            from: '+12082132661'
        }).then(message => console.log(message.sid, patient.name));
    
    })



})


router.route('/sms/reply')
.post((req, res) =>{
    const MessagingResponse = require('twilio').twiml.MessagingResponse;
    console.log(req.body)
    const twiml = new MessagingResponse();
    const reply = req.body.Body.toLowerCase()
    if(reply === 'remove'){
      console.log('Please remove patient')
      twiml.message('You were removed from LakeCityPTs waitlist courtesy texts');
      res.writeHead(200, {'Content-Type': 'text/xml'});
      res.end(twiml.toString());
      const person = req.body.From
      console.log(person.split('+1')[1])
      Waitlist.findOneAndDelete({'number': person.split('+1')[1]},(err, doc)=>{
        if(err) console.log(err);
        console.log("Successful deletion");
      })
    
      
    }else{
      console.log('checkingOpenTimes')
      twiml.message('That is not a command I understand please give us a call at 208-667-1988 if you need help resolving any questions');
      res.writeHead(200, {'Content-Type': 'text/xml'});
      res.end(twiml.toString());
    }
})



module.exports = router;