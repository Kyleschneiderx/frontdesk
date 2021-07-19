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
    },
    doctor:{
        type: String,
        required: false
    },
    notes:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Notes'
        }
    ]

},{timestamps:true})

const Scheduled = mongoose.model('Scheduled', scheduledSchema)

module.exports = {Scheduled}