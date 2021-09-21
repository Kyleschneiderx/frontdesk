const express = require('express');
const router = express.Router();

const accountSid = process.env.TWILIO_ACCOUNT_SID;

const apiKey = process.env.TWILIO_API_KEY;
const apiSecret = process.env.TWILIO_API_SECRET;
const client = require('twilio')(apiKey, apiSecret, { accountSid: accountSid });


/// model
const {auth} = require('../middleware/auth')
const {Waitlist} = require('../models/waitlist')


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

    const recipients =  await Waitlist
    .find()
        recipients.forEach(patient =>{

        console.log(patient)
        client.messages.create({
            body: `Hi ${patient.name} we have openings at Lake City Physical Therapy at ${req.body.openings} if any of these times could work please give us a call at 208-667-1988. \n\ If you'd like to be removed from are text waitlist just REPLY : Remove `, 
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
      Waitlist.findOneAndRemove({number: person.split('+1')[1]})
    
      
    }else{
      console.log('checkingOpenTimes')
      twiml.message('That is not a command I understand please give us a call at 208-667-1988 if you need help resolving any questions');
      res.writeHead(200, {'Content-Type': 'text/xml'});
      res.end(twiml.toString());
    }
})



module.exports = router;