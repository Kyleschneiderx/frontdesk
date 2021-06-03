const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('dotenv').config()
const app = express();


// const user = require('./routes/user')
const patient = require('./routes/patient')

/// password ZCOqzxy8BjG62AiP
// username admin_user50

//mongodb+srv://admin_user50:<password>@cluster0-vjdh2.mongodb.net/<dbname>?retryWrites=true&w=majority



mongoose.connect(process.env.REACT_APP_MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});



// MIDDLEWARE
app.use(express.json({
    type: ['application/json', 'text/plain']
  }));
// app.use(express.urlencoded({
//     extended: false
// }))
app.use(cookieParser());
// app.use('/api/users', user);
app.use('/api/patient', patient);

// app.use(express.static('client/build'))

// if(procces.env.NODE_ENV === 'production'){
//     const path = require('path')
//     app.get('/*', (req, res)=>{
//         console.log('Works');
//         res.sendFile(path.resolve(__dirname,'../client', 'build', 'index.html'));
//     })
// }



const port = process.env.PORT || 3001

app.listen(port, () =>{
    console.log('SERVER RUNNING', port)
})