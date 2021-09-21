const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV)
const app = express();
const cors = require('cors');

const urlencoded = require('body-parser').urlencoded;

const user = require('./routes/user')
const patient = require('./routes/patient')
const scheduled = require('./routes/scheduled')
const notes = require('./routes/notes')
const calls = require('./routes/calls')
const file = require('./routes/file')
const deposits = require('./routes/deposits')
const collections = require('./routes/collections')
const waitlist = require('./routes/waitlist')

/// password ZCOqzxy8BjG62AiP
// username admin_user50

//mongodb+srv://admin_user50:<password>@cluster0-vjdh2.mongodb.net/<dbname>?retryWrites=true&w=majority

// console.log(config)
// console.log(process.env.NODE_ENV)


mongoose.connect(config.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(cors());

// MIDDLEWARE
app.use(express.json({
    type: ['application/json', 'text/plain']
  }));
// app.use(express.urlencoded({
//     extended: false
// }))
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
// app.use('/js/twilio.min.js', (req, res) => {
//     res.sendFile('./node_modules/twilio-client/dist/twilio.min.js');
// });
app.use('/api/users', user);
app.use('/api/patient', patient);
app.use('/api/scheduled', scheduled);
app.use('/api/notes', notes);
app.use('/api/calls', calls);
app.use('/api/file', file)
app.use('/api/deposits', deposits)
app.use('/api/collections', collections)
app.use('/api/waitlist', waitlist)

app.use(express.static('client/build'));

if(process.env.NODE_ENV === 'production'){
    const path = require('path');
    app.get('/*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../client','build','index.html'))
    })
}



const port = process.env.PORT || 3001

app.listen(port, () =>{
    console.log('SERVER RUNNING', port)
})