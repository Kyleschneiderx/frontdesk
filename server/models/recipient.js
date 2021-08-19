const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipientSchema = mongoose.Schema({
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
    },
    file_name:{
        type: String,
        required: false
    },
    called:{
        type: String,
        required: false
    },
    statements:{
        type: Number,
        required: false
    }

},{timestamps:true})

const Recipient = mongoose.model('Recipient', recipientSchema)

module.exports = {Recipient}