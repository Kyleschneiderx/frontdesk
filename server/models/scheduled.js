const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const scheduledSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    dob:{
        type: String,
        required: false
    },
    phoneNumber:{
        type: String,
        required: false
    },
    referralDate:{
        type: String,
        required: false
    },
    location:{
        type: String,
        required: false
    },
    diagnosis: {
        type: String,
        required: false
    },
    called: {
        type: Number,
        required: false
    }

},{timestamps:true})

const Scheduled = mongoose.model('Scheduled', scheduledSchema)

module.exports = {Scheduled}