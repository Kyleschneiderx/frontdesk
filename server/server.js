const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV)
const app = express();


// const user = require('./routes/user')
// const s = require('./routes/books')

/// password ZCOqzxy8BjG62AiP
//username admin_user50

//mongodb+srv://admin_user50:<password>@cluster0-vjdh2.mongodb.net/<dbname>?retryWrites=true&w=majority


console.log(config.DATABASE)

mongoose.connect(config.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});



// MIDDLEWARE

app.use(bodyParser.json());
app.use(cookieParser());
// app.use('/api/users', user);
// app.use('/api/books', books);

app.use(express.static('client/build'))


// if(procces.env.NODE_ENV === 'production'){
//     const path = require('path')
//     app.get('/*', (req, res)=>{
//         console.log('Works');
//         res.sendFile(path.resolve(__dirname,'../client', 'build', 'index.html'));
//     })
// }



const port = process.env.PORT || 3001

app.listen(port, () =>{
    console.log('SERVER RUNNING')
})