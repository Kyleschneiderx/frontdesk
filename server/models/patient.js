const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// console.log(firstNameInput.value)
// console.log(lastNameInput.value)
// console.log(month.value)
// console.log(day.value)
// console.log(year.value)
// console.log(areacode.value)
// console.log(numberFirst.value)
// console.log(numberSecond.value)
// console.log(rd.value)
// console.log(fac.value)




const patientSchema = mongoose.Schema({
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

const Patient = mongoose.model('Patient', patientSchema)

module.exports = {Patient}