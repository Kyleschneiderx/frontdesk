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
        required: 'n/a'
    },
    phoneNumber:{
        type: String,
        required: 'n/a'
    },
    referralDate:{
        type: String,
        required: 'n/a'
    },
    location:{
        type: String,
        required: 'n/a'
    },
    diagnosis: {
        type: String,
        required: 'n/a'
    },
    called: {
        type: Number,
        required: false
    }

},{timestamps:true})

const Patient = mongoose.model('Patient', patientSchema)

module.exports = {Patient}