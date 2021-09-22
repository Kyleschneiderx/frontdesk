const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionsSchema = mongoose.Schema({
    patientID:{
        type: String,
        required: false
    },
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: false
    },
    number:{
        type: String,
        required: false
    },
    statements:{
        type: Number,
        required: false
    }

},{timestamps:true})

const Collections = mongoose.model('Collections', collectionsSchema)

module.exports = {Collections}