const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

/// model
const {auth} = require('../middleware/auth')
const {Scheduled} = require('../models/scheduled')

router.route('/schedule')
.post(auth, (req,res)=>{

    console.log(req.body)
    const scheduled = new Scheduled({
        ...req.body
    });

    scheduled.save((err, doc)=>{
        if(err) return res.status(400).send(err)
        res.status(200).json({
            post:true,
            patientId: doc._id
        })
    })

})




router.route('/dp')
.post((req,res) =>{

    console.log(req.body)

    var raw = JSON.stringify({"token":"c43bce8bf7b4b7f9e7b7","subject":`${req.body.title}`,"details":"- Looking to get this graphic remade as close as possible to the original. \n- Please include the following file formats: - SVG - PNG","size":"12 inch by 16 inch 300 dpi", "links":`${req.body.etsyUrl}`, "files":[{"url":`${req.body.picture}`}],"formats":["png","svg","ai","jpeg"],"priority":2});

    var requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: raw,
    redirect: 'follow'
    };

    fetch("https://jar.designpickle.com/api/v1/tickets", requestOptions)
    .then(response => response.text())
    .then(result => res.status(200).json(result))
    .catch(error => console.log('error', error));
})


module.exports = router;