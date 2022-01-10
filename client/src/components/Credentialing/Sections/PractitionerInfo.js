import React, { useState, useEffect } from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import downloadjs from 'downloadjs';
import { saveAs } from 'file-saver';
import { PDFDocument } from 'pdf-lib'





const PractitionerInfo = ({handleFormData, values}) => {






    // const download1 = async () =>{
    //     console.log({
    //         firstName,
    //         lastName,
    //         middleName,
    //         nickName,
    //         degrees,
    //         homePhone,
    //         pagerNumber,
    //         cellNumber,
    //         email,
    //         homeAddres,
    //         city,
    //         state,
    //         zip,
    //         dob,
    //         birthPlace,
    //         ssn,
    //         citizenship,
    //         language,
    //         specialitySelect,
    //         genderSelect,
    //         npi,
    //         medicareUpin,
    //         medicareNumber,
    //         medicaidNumber,
    //         proInterests,
    //         specialty,
    //         subspecialities
    //     })
    //     axios.post('/api/providers/bluecrossofidaho',{
    //         firstName,
    //         lastName,
    //         middleName,
    //         nickName,
    //         degrees,
    //         homePhone,
    //         pagerNumber,
    //         cellNumber,
    //         email,
    //         homeAddres,
    //         city,
    //         state,
    //         zip,
    //         dob,
    //         birthPlace,
    //         ssn,
    //         citizenship,
    //         language,
    //         specialitySelect,
    //         genderSelect,
    //         npi,
    //         medicareUpin,
    //         medicareNumber,
    //         medicaidNumber,
    //         proInterests,
    //         specialty,
    //         subspecialities
    //     }, {responseType: 'arraybuffer'})
    //     .then(async response =>{ 

    //         const data = Buffer.from(response.data)
    //         console.log(data)
    //         const pdfDoc = await PDFDocument.load(data)

    //         const form = pdfDoc.getForm()


    //         const pdfBytes = await pdfDoc.save()
    //         downloadjs(pdfBytes,`${firstName}-${lastName}-BlueCross-of-idaho.pdf`, 'application/pdf')
    //     })

    //     axios.post('/api/providers/regenceblueshieldofidaho',{
    //         firstName,
    //         lastName,
    //         middleName,
    //         nickName,
    //         degrees,
    //         homePhone,
    //         pagerNumber,
    //         cellNumber,
    //         email,
    //         homeAddres,
    //         city,
    //         state,
    //         zip,
    //         dob,
    //         birthPlace,
    //         ssn,
    //         citizenship,
    //         language,
    //         specialitySelect,
    //         genderSelect,
    //         npi,
    //         medicareUpin,
    //         medicareNumber,
    //         medicaidNumber,
    //         proInterests,
    //         specialty,
    //         subspecialities
    //     }, {responseType: 'arraybuffer'})
    //     .then(async response =>{ 

    //         const data = Buffer.from(response.data)
    //         console.log(data)
    //         const pdfDoc = await PDFDocument.load(data)

    //         const form = pdfDoc.getForm()


    //         const pdfBytes = await pdfDoc.save()

    //         // const data2 = new Uint8Array(Buffer.from(pdfBytes))
    //         // console.log(response.data)
    //         // const data = new Uint8Array(Buffer.from(response.data));
    //         // console.log(data)
    //         // const file = new Blob([response.data]);
    //         // saveAs(file, 'tryingpdf.pdf');
    //         downloadjs(pdfBytes,`${firstName}-${lastName}-regence-blueshield-idaho.pdf`, 'application/pdf')
    //     })
    // }



    return (
        <div>
            <Box sx={{ flexGrow: 1 }} >
            <Grid container justifyContent='center'>
                <h2>Practitioner Information</h2>
            </Grid>
                <Grid container spacing={1} padding={5}>
                    <Grid item xs={3}>
                        <input
                        label="First Name"
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        placeholder="First name (do not abbreviate)"
                        className="input"
                        onChange={handleFormData("firstName")}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <input
                            type="text"
                            placeholder="Middle name (do not abbreviate)"
                            className="input"
                            name="middleName"
                            onChange={handleFormData('middleName')}
                            value={values.middleName}/>
                    </Grid>
                    <Grid item xs={6}>
                        <input
                            className="input"
                            placeholder="Last name (include suffix; Jr., Sr., III)"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleFormData("lastName")}

                            />
                    </Grid>
                    <Grid item xs={8}>
                        <input
                        placeholder="Other name(s) under which you have been known by reference, licensing and or educational institutions?"
                        className="input"
                        name="nickName"
                        value={values.nickName}
                        onChange={handleFormData("nickName")}/>
                    </Grid>
                    <Grid item xs={4}>
                        <input
                            placeholder="Degree(s)"
                            className="input"
                            name="degrees"
                            value={values.degrees}
                            onChange={handleFormData("degrees")}/>
                    </Grid>
                    <Grid item xs={2}>
                        <input
                        placeholder="Home Phone Number"
                        className="input"
                        name="homePhone"
                        value={values.homePhone}
                        onChange={handleFormData("homePhone")}/>
                    </Grid>
                    <Grid item xs={2}>
                        <input
                            placeholder="Pager Number"
                            className="input"
                            name="pagerNumber"
                            value={values.pagerNumber}
                            onChange={handleFormData("pagerNumber")}/>
                    </Grid>
                    <Grid item xs={2}>
                        <input
                            placeholder="Cell Phone Number"
                            className="input"
                            name="cellNumber"
                            value={values.cellNumber}
                            onChange={handleFormData("cellNumber")}/>
                    </Grid>
                    <Grid item xs={6}>
                        <input
                            placeholder="Email Address"
                            className="input"
                            name="email"
                            value={values.email}
                            onChange={handleFormData("email")}/>
                    </Grid>
                    <Grid item xs={6}>
                        <input
                            placeholder="Home Mailing Address"
                            className="input"
                            name="homeAddress"
                            value={values.homeAddress}
                            onChange={handleFormData("homeAddress")}/>
                    </Grid>
                    <Grid item xs={2}>
                        <input
                            placeholder="City"
                            className="input"
                            name="city"
                            value={values.city}
                            onChange={handleFormData("city")}/>
                    </Grid>
                    <Grid item xs={2}>
                        <input
                            placeholder="State"
                            className="input"
                            name="state"
                            value={values.state}
                            onChange={handleFormData("state")}/>
                    </Grid>
                    <Grid item xs={2}>
                        <input
                            placeholder="Zip Code"
                            className="input"
                            name="zipcode"
                            value={values.zipcode}
                            onChange={handleFormData("zipcode")}/>
                    </Grid>
                    <Grid item xs={2}>
                        <input
                            placeholder="Birth Date"
                            className="input"
                            name="dob"
                            value={values.dob}
                            onChange={handleFormData("dob")}/>
                    </Grid>
                    <Grid item xs={4}>
                        <input
                            placeholder="Birth Place (city, state, country)"
                            className="input"
                            name="birthPlace"
                            value={values.birthPlace}
                            onChange={handleFormData("birthPlace")}/>
                    </Grid>
                    <Grid item xs={2}>
                        <input
                            placeholder="SSN"
                            className="input"
                            name="ssn"
                            value={values.ssn}
                            onChange={handleFormData("ssn")}/>
                    </Grid>
                    <Grid item xs={4}>
                        <input
                            placeholder="Citizenship"
                            className="input"
                            name="citizenship"
                            value={values.citizenship}
                            onChange={handleFormData("citizenship")}/>
                    </Grid>
                    <Grid item xs={4}>
                        <input
                            placeholder="Language spoken by practioner"
                            className="input"
                            name="language"
                            value={values.language}
                            onChange={handleFormData("language")}/>
                    </Grid>
                    <Grid item xs={4}>
                        <select className="input" name="speciality" value={values.speciality} onChange={handleFormData("speciality")}>
                            <option defaultValue hidden>Choose a Specialty</option>
                            <option value='PCP'>PCP</option>
                            <option value='Urgent Care'>Urgent Care</option>
                            <option value='Specialist'>Specialist</option>
                        </select>        
                    </Grid>
                    <Grid item xs={4}>
                        <select placeholder="Gender" className="input" name="gender" value={values.gender} onChange={handleFormData("gender")}>
                            <option defaultValue hidden>Choose a Gender</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </select>
                    </Grid>
                    <Grid item xs={3}>
                        <input
                            placeholder="NPI"
                            className="input"
                            name="npi"
                            value={values.npi}
                            onChange={handleFormData("npi")}/>
                    </Grid>
                    <Grid item xs={3}>
                        <input
                            placeholder="Medicare UNPIN"
                            className="input"
                            name="upin"
                            value={values.upin}
                            onChange={handleFormData("upin")}/>
                    </Grid>
                    <Grid item xs={3}>
                        <input
                            placeholder="Medicare Number(ID)"
                            className="input"
                            name="medicareNumber"
                            value={values.medicareNumber}
                            onChange={handleFormData("medicareNumber")}/>
                    </Grid>
                    <Grid item xs={3}>
                        <input
                            placeholder="Medicaid numbers(s)"
                            className="input"
                            name="medicaidNumber"
                            value={values.medicaidNumber}
                            onChange={handleFormData("medicaidNumber")}/>
                    </Grid>
                    <Grid item xs={4}>
                        <input
                            placeholder="Other professional interests in practice, research, etc."
                            className="input"
                            name="other"
                            value={values.other}
                            onChange={handleFormData("other")}/>
                    </Grid>
                    <Grid item xs={4}>
                        <input
                            placeholder="Specialty"
                            className="input"
                            name="otherSpecialty"
                            value={values.otherSpecialty}
                            onChange={handleFormData("otherSpeciality")}/>
                    </Grid>
                    <Grid item xs={4}>
                        <input
                            placeholder="Subspecialties"
                            className="input"
                            name="subspecialities"
                            value={values.subspecialities}
                            onChange={handleFormData("subspecialities")}/>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}


export default PractitionerInfo;