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




const fileSchema = mongoose.Schema({
    file_name:{
        type: String,
        required: true
    },
    recipients:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Recipient'
        }
    ]

},{timestamps:true})

const File = mongoose.model('File', fileSchema)

module.exports = {File}