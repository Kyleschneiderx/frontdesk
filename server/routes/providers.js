const express = require('express');
const router = express.Router();
const PDF = require('pdf-lib')
const fetch = require('node-fetch');
const fs = require('fs');

const {auth} = require('../middleware/auth')


/// model

const {Provider} = require('../models/providers')


router.post('/bluecrossofidaho', async (req, res) =>{
    console.log(req.body)
    const url = 'https://providers.bcidaho.com/resources/pdfs/providers/commercial-provider-packet/Practitioner-Credentialing-Application.pdf'
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
    console.log(existingPdfBytes)
    // res.send(existingPdfBytes)
    const pdfDoc = await PDF.PDFDocument.load(existingPdfBytes)
    const form = pdfDoc.getForm()
    // console.log(form)

    const submitedToField = form.getTextField('This application is submitted to')
    const lastnameField = form.getTextField('Last name include suffix Jr Sr III')
    const firstNameField = form.getTextField('First do not abbreviate')
    const middleNameField = form.getTextField('Middle do not abbreviate')
    submitedToField.setText('Blue Cross of Idaho')
    lastnameField.setText(req.body.lastName)
    firstNameField.setText(req.body.firstName)
    middleNameField.setText(req.body.middleName)
    const pdfBytes = await pdfDoc.save()
    // console.log(pdfBytes)
    const data = new Uint8Array(Buffer.from(pdfBytes));
    res.send(Buffer.from(data, 'binary'))
    

});



router.post('/regenceblueshieldofidaho', async (req, res) =>{
    console.log(req.body)
    const url = 'https://lakecitypt.com/wp-content/uploads/2021/11/unlocked-Practitioner-credentialing-application-IDblueShield-unlocked-1.pdf'
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
    console.log(existingPdfBytes)

    const pdfDoc = await PDF.PDFDocument.load(existingPdfBytes, { ignoreEncryption: true })
    const form = pdfDoc.getForm()

    // const submitedToField = form.getTextField('This application is submitted to')
    const lastnameField = form.getTextField('Last name include suffix Jr Sr III')
    const firstNameField = form.getTextField('First do not abbreviate')
    const middleNameField = form.getTextField('Middle do not abbreviate')

    // submitedToField.setText('Regence BlueShield of Idaho')
    lastnameField.setText(req.body.lastName)
    firstNameField.setText(req.body.firstName)
    middleNameField.setText(req.body.middleName)
    const pdfBytes = await pdfDoc.save()

    const data = new Uint8Array(Buffer.from(pdfBytes));
    res.send(Buffer.from(data, 'binary'))





})


module.exports = router;

