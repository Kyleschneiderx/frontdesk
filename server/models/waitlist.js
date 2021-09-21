const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const waitlistSchema = mongoose.Schema({
    patientID:{
        type: String,
        required: false
    },
    name:{
        type: String,
        required: true
    },
    number:{
        type: String,
        required: false
    }

},{timestamps:true})

const Waitlist = mongoose.model('Waitlist', waitlistSchema)

module.exports = {Waitlist}