import React ,{useState, useEffect} from 'react'
import { Button, Grid, Box } from '@mui/material'


const PracticeInformation = ({handleFormData, values, handleChangeLocation}) => {


    const [ data, setData ] = useState({
        effectiveDateAtPrimaryPracticeLocation:"",
        nameOfPractice: '',
        departmentName:'',
        primaryOfficeStreetAddress:"",
        practiceCity:"",
        practiceState:"",
        practiceZipcode:"",
        patientAppointmentTelephoneNumber:"",
        faxNumber:"",
        nameAffialatedWithTaxIdNumber:"",
        federalTaxIdNumber:"",
        practiceMailingAddress:"",
        mailingCity:"",
        mailingState:"",
        mailingZip:"",
        billingAddress:"",
        billingCity:"",
        billingState:"",
        billingZipcode:"",
        officeManagerName:"",
        adminPhoneNumber:"",
        adminFaxNumber:"",
        adminEmail:"",
        credentialingContactName:"",
        credentialingPhoneNumber:"",
        credentialingFaxNumber:"",
        credentialingEmail:""
    })
    const [list , setList] = useState([])


    useEffect(() => {
        console.log(data)
        setList(data)

    }, [data])

    const addItem = () =>{
        console.log(list)
        handleChangeLocation(list)
    }

    console.log(list)
    return (
        <div>
        <Box sx={{ flexGrow: 1 }} >
            <Grid container justifyContent='center'>
                <h2>Practice Information</h2>
            </Grid>
            <Grid container spacing={1} padding={5}>
            <Grid item xs={12}>
                        <input
                        label="Effective Date at Practice"
                        type="text"
                        name="effectiveDateAtPrimaryPracticeLocation"
                        value={data.effectiveDateAtPrimaryPracticeLocation}
                        placeholder="Effective Date at Practice"
                        className="input"
                        onChange={e => setData({...data, effectiveDateAtPrimaryPracticeLocation: e.target.value})}
                        />
                </Grid>
                <Grid item xs={9}>
                        <input
                        label="Name of Practice"
                        type="text"
                        name="nameOfPractice"
                        value={data.nameOfPractice }
                        placeholder="Name of practice, affiliation or clinic name"
                        className="input"
                        onChange={e => setData({...data, nameOfPractice: e.target.value})}
                        />
                </Grid>
                <Grid item xs={3}>
                        <input
                        label="Name of Department"
                        type="text"
                        name="departmentName"
                        value={data.departmentName}
                        placeholder="Department name (if hospital based)"
                        className="input"
                        onChange={ e => setData({...data, departmentName: e.target.value})}
                        />
                </Grid>
                <Grid item xs={4}>
                        <input
                        label="Primary office street address"
                        type="text"
                        name="departmentName"
                        value={data.primaryOfficeStreetAddress}
                        placeholder="Primary office street address"
                        className="input"
                        onChange={ e => setData({...data, primaryOfficeStreetAddress: e.target.value})}
                        />
                </Grid>
                <Grid item xs={4}>
                        <input
                        label="City"
                        type="text"
                        name="practiceCity"
                        value={data.practiceCity}
                        placeholder="City"
                        className="input"
                        onChange={ e => setData({...data, practiceCity: e.target.value})}
                        />
                </Grid>
                <Grid item xs={2}>
                        <input
                        label="State"
                        type="text"
                        name="practiceState"
                        value={data.practiceState}
                        placeholder="State"
                        className="input"
                        onChange={ e => setData({...data, practiceState: e.target.value})}
                        />
                </Grid>
                <Grid item xs={2}>
                        <input
                        label="Zipcode"
                        type="text"
                        name="practiceZipcode"
                        value={data.practiceZipcode}
                        placeholder="ZIP Code"
                        className="input"
                        onChange={ e => setData({...data, practiceZipcode: e.target.value})}
                        />
                </Grid>
                <Grid item xs={3}>
                        <input
                        label="Patient appointment telephone number"
                        type="text"
                        name="patientAppointmentTelephoneNumber"
                        value={data.patientAppointmentTelephoneNumber}
                        placeholder="Patient appointment telephone number"
                        className="input"
                        onChange={ e => setData({...data, patientAppointmentTelephoneNumber: e.target.value})}
                        />
                </Grid>
                <Grid item xs={3}>
                        <input
                        label="Fax number"
                        type="text"
                        name="faxNumber"
                        value={data.faxNumber}
                        placeholder="Fax Number"
                        className="input"
                        onChange={ e => setData({...data, faxNumber: e.target.value})}
                        />
                </Grid>
                <Grid item xs={3}>
                        <input
                        label="Name affiliated with tax ID number"
                        type="text"
                        name="nameAffialatedWithTaxIdNumber"
                        value={data.nameAffialatedWithTaxIdNumber}
                        placeholder="Name affiliated with tax ID number"
                        className="input"
                        onChange={ e => setData({...data, nameAffialatedWithTaxIdNumber: e.target.value})}
                        />
                </Grid>
                <Grid item xs={3}>
                        <input
                        label="Federal tax ID number"
                        type="text"
                        name="federalTaxIdNumber"
                        value={data.federalTaxIdNumber}
                        placeholder="Federal tax ID number"
                        className="input"
                        onChange={ e => setData({...data, federalTaxIdNumber: e.target.value})}
                        />
                </Grid>
            </Grid>
            <Grid container justifyContent='center'>
            <Button onClick={()=>addItem()}> Add Location</Button>
            </Grid>

            <Grid container spacing={1} padding={5} >
                {values.practiceLocations ? values.practiceLocations.map((item, index)=> {
                    return(
                        <div>{item.nameOfPractice}</div>
                    )
                })
                : null}

            </Grid>


        </Box>
        </div>
    )
}


export default PracticeInformation;
