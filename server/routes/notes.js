const express = require('express');
const router = express.Router();


/// model
const {auth} = require('../middleware/auth')
const {api} = require('../middleware/apikey')
const {Notes} = require('../models/notes')
const {Patient} = require('../models/patient');


router.route('/')
.post(auth,(req, res, next) =>{
    console.log(req.body)
    
    const content = req.body.content;
    let creator;
    const notes = new Notes({
      content: content,
      creator: req.body.userId,
      patient: req.body.patientId
    });
    notes
      .save()
      .then(result => {
        return Patient.findById(req.body.patientId);
      })
      .then(user => {
        console.log(user)
        creator = user;
        user.notes.push(notes);
        return user.save();
      })
      .then(result => {
        res.status(201).json({
          message: 'Post created successfully!',
          notes: creator.notes,
          creator: { _id: creator._id, name: creator.name }
        });
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });

})


.get(auth,(req, res , next) =>{
    console.log(req.query.noteList)
    Notes.find({'_id':req.query.noteList})
    .populate('creator')
    .exec((err, doc) =>{
        if(err) return res.status(400).send(err)
        res.status(200).send(doc)
    });
    // .exec((err, doc) =>{
    //     if(err) return res.status(400).send(err)
    //     res.status(200).send(doc)
    // })
})

module.exports = router;