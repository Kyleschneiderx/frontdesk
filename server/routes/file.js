const express = require('express');
const router = express.Router();


/// model
const {auth} = require('../middleware/auth')
const {File} = require('../models/file')
const {Recipient} = require('../models/recipient')


router.route('/')
.post( async (req,res)=>{


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

.get((req, res)=>{
    Recipient
    .find()
    .exec((err, doc) =>{
        if(err) return res.status(400).send(err)
        res.status(200).send(doc)
    })
})

.delete((req,res)=>{
    console.log(req.body)
    let id = req.body._id
    Recipient.findByIdAndRemove(id, (err, doc)=>{
        if(err) return res.status(400).send(err)
        res.json(true)
    })
})



module.exports = router;