const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const notesSchema = mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    creator:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    patient:{
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    }

},{timestamps:true})

const Notes = mongoose.model('Notes', notesSchema)

module.exports = {Notes}