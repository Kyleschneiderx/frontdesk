// const express = require('express');
// const router = express.Router();
// require('dotenv').config()

// const {auth} = require('../middleware/auth')

// const AccessToken = require('twilio').jwt.AccessToken;
// const VoiceGrant = AccessToken.VoiceGrant;
// const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
// const twilioApiKey = process.env.TWILIO_API_KEY;
// const twilioApiSecret = process.env.TWILIO_API_SECRET;
// const outgoingAppSid = process.env.OUTGOINGAPPSID;
// const identity = 'kyle';
// router.route('/token')
// .get((req,res) =>{
//     console.log('Ok')
//     console.log(`Access token for ${identity}`);

//     const voiceGrant = new VoiceGrant({
//         outgoingApplicationSid: outgoingAppSid,
//         incomingAllow: true,
//     });
//     const token = new AccessToken(
//         twilioAccountSid,
//         twilioApiKey,
//         twilioApiSecret,
//         {identity: identity}
//     );
//     token.addGrant(voiceGrant);
//     console.log('Access granted with JWT', token.toJwt());
//     res.send(token.toJwt());
    
// })

// // .post((req, res) => {
// //     var number = req.body.number;
// //     var url = 'https://fe7cd0642894.ngrok.io/api/calls/connect';

// //     var options = {
// //         to: request.body.phoneNumber,
// //         from: process.env,
// //         url: url,
// //     };

// //     client.calls.create(options)
// //     .then((message) => {
// //         console.log(message.responseText);
// //         res.send({
// //         message: 'Thank you! We will be calling you shortly.',
// //     });
// //     })
// //     .catch((error) => {
// //         console.log(error);
// //         response.status(500).send(error);
// //     });
// // });

// var VoiceResponse = twilio.twiml.VoiceResponse;
// router.route('/connect')
// .post((req, res) => {
//   var twiml = new VoiceResponse();
//   var dial = twiml.dial();
//   dial.number(req.body.number);
//   res.send(twiml.toString());
// })


// module.exports = router;