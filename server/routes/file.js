const express = require('express');
const router = express.Router();

const accountSid = process.env.TWILIO_ACCOUNT_SID;

const apiKey = process.env.TWILIO_API_KEY;
const apiSecret = process.env.TWILIO_API_SECRET;
const client = require('twilio')(apiKey, apiSecret, { accountSid: accountSid });


/// model
const {auth} = require('../middleware/auth')
const {File} = require('../models/file')
const {Recipient} = require('../models/recipient')


router.route('/')
.post( auth, async (req,res)=>{


    Recipient.deleteMany({}).then(function(){
        console.log("Data deleted"); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });



    
    const recipients = Recipient.insertMany(req.body, function (err, docs) {
        if (err){ 
            return res.status(400).json({
                error: err
            });
        } else {
          console.log("Multiple documents inserted to Collection");
          res.status(201).json({
              posted: true,
              message: "Success",
              patientID: [docs]
            });
        }
    })



    

    // console.log(req.body, "file")

    // const file = new File({
    //     file_name: req.body.file_name,
    // })
    // .save()
    // .then(result=>{
    //     return File.findById(result._id)
    // })
    // .then(user =>{
    // req.body.r_list.forEach(async item =>{
    //     const recipient = new Recipient({
    //         ...item
    //     }).save()
    //     .then(result =>{

    //     })
    //     .catch(err =>[
    //         res.status(400).json({
    //             error: 'There was an error on making the patient'
    //         })
    //     ])
    //     console.log(recipient)
    // })

    // .then(result => {
    //     res.status(201).json({
    //       message: 'Post created successfully!',
    //     });
    //   })
    //   .catch(err => {
    //     if (!err.statusCode) {
    //       err.statusCode = 500;
    //     }
    //     next(err);
    //   });

    // var some=[]
    // const value = await req.body.r_list.forEach(async item =>{
    //     const recipient = await new Recipient({
    //         ...item
    //     })
    //     .save()
    //     // await some.push(recipient)
    // })
    // console.log(value, "here is some")



    // file
    // .save((err, doc)=>{
    //     res.status(201).json({
    //         message: "Has been added successfully",
    //         fileID: doc._id
    //     })
    // })
    
    // await req.body.r_list.forEach(async item =>{
    //     const recipient = await new Recipient({
    //         ...item
    //     })
    //     .save()
    //     rec_list.push(recipient)
    // })
    // console.log(rec_list)


    // file
    // .save()
    // .then(result => {
    //     console.log(result)
    // })
})

.get(auth, (req, res)=>{
    Recipient
    .find()
    .exec((err, doc) =>{
        if(err) return res.status(400).send(err)
        res.status(200).send(doc)
    })
})

.delete(auth, (req,res)=>{
    console.log(req.body)
    let id = req.body._id
    Recipient.findByIdAndRemove(id, (err, doc)=>{
        if(err) return res.status(400).send(err)
        res.json(true)
    })
})




router.route("/addone")
.post(auth, (req, res)=>{
    const recipient = new Recipient({
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





router.route('/call')
.post(auth, async (req, res)=>{




    const recipients =  await Recipient
    .find()
    
    recipients.forEach(patient =>{

        client.calls.create({
            machineDetection: 'DetectMessageEnd',
            twiml: `<Response><Say>Hi ${patient.name} this is an automated phone message from Lake City Physical Therapy just letting you know that you have an outstanding balance. Please at your earliest convenience give our billing department a call back at 208-966-4176 or visit our website at lake-city-pt.com and navigate to the patient payment portal. If this information seems incorrect please contact us to resolve the matter, Thank You and have a nice day</Say></Response>`,
            to:`${patient.number}`,
            from: '+12082132661',
            method: "POST"
        }).then(call => console.log(call, "This is the call"))

    })


})



module.exports = router;