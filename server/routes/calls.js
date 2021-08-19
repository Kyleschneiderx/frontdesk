const express = require('express');
const router = express.Router();
const accountSid = process.env.TWILIO_ACCOUNT_SID;

const apiKey = process.env.TWILIO_API_KEY;
const apiSecret = process.env.TWILIO_API_SECRET;
const client = require('twilio')(apiKey, apiSecret, { accountSid: accountSid });




const {auth} = require('../middleware/auth')

router.route('/')
.post(auth, async (req, res)=>{

    console.log(req.body, 'Called')
    await client.calls.create({
        machineDetection: 'DetectMessageEnd',
        twiml: `<Response><Say>Hi ${req.body.name} this is an automated phone message from Lake City Physical Therapys front desk letting you know that we recieved a referral from your doctor and we should be reach out to you about setting up an appointment. Please feel free to call anytime if you have a preferred appointmnet date and time at 208-667-1988 and if we can't get to the phone please leave us a message and we'll get back to you as soon as possible, Thank You and have a nice day</Say></Response>`,
        to:`+1${req.body.phoneNumber}`,
        from: '+12082132122',
        method: "POST"
    }).then(call => console.log(call, "This is the call"));



})

router.route('/voice')
.post((req, res)=>{

    const VoiceResponse = require('twilio').twiml.VoiceResponse;
    const twiml = new VoiceResponse();
    twiml.say(`Hi thank you for calling us back this is Lake City Physical Therapy's C-D-A front desk automated phone service, please stay on the line and we will try an connect you with a representative. If we cannot connect you with a representative please leave us a message and we'll get back to you as soon as possible, or go to lake-city-pt.com to find out more information. Thank You`);
    const dial = twiml.dial();
    dial.number(process.env.PHONE_CDA)
    res.type('text/xml');
    res.send(twiml.toString())
    res.log(twiml.toString());

})










module.exports = router;