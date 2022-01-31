import React ,{useState, useEffect} from 'react'
import { 
    Button, 
    Grid, 
    Box, 
    Paper, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead,
    TableRow 
} from '@mui/material'



const PracticeInformation = ({values,handleChangeList}) => {


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
        handleChangeList(list, 'practiceLocations')
        setData({
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
                <Grid item xs={4}>
                        <input
                        label="Mailing address (if different from above)"
                        type="text"
                        name="practiceMailingAddress"
                        value={data.practiceMailingAddress}
                        placeholder="Mailing address (if different from above)"
                        className="input"
                        onChange={ e => setData({...data, practiceMailingAddress: e.target.value})}
                        />
                </Grid>
                <Grid item xs={4}>
                        <input
                        label="Mailing address City"
                        type="text"
                        name="mailingCity"
                        value={data.mailingCity}
                        placeholder="Mailing address City"
                        className="input"
                        onChange={ e => setData({...data, mailingCity: e.target.value})}
                        />
                </Grid>
                <Grid item xs={2}>
                        <input
                        label="Mailing address State"
                        type="text"
                        name="mailingState"
                        value={data.mailingState}
                        placeholder="Mailing address State"
                        className="input"
                        onChange={ e => setData({...data, mailingState: e.target.value})}
                        />
                </Grid>
                <Grid item xs={2}>
                        <input
                        label="Mailing address ZIP Code"
                        type="text"
                        name="mailingZip"
                        value={data.mailingZip}
                        placeholder="Mailing address ZIP Code"
                        className="input"
                        onChange={ e => setData({...data, mailingZip: e.target.value})}
                        />
                </Grid>


                <Grid item xs={4}>
                        <input
                        label="Billing address (if different from above)"
                        type="text"
                        name="billingAddress"
                        value={data.billingAddress}
                        placeholder="Billing address (if different from above)"
                        className="input"
                        onChange={ e => setData({...data, billingAddress: e.target.value})}
                        />
                </Grid>
                <Grid item xs={4}>
                        <input
                        label="Billing address City"
                        type="text"
                        name="billingCity"
                        value={data.billingCity}
                        placeholder="Billing address City"
                        className="input"
                        onChange={ e => setData({...data, billingCity: e.target.value})}
                        />
                </Grid>
                <Grid item xs={2}>
                        <input
                        label="Billing address State"
                        type="text"
                        name="billingState"
                        value={data.billingState}
                        placeholder="Billing address State"
                        className="input"
                        onChange={ e => setData({...data, billingState: e.target.value})}
                        />
                </Grid>
                <Grid item xs={2}>
                        <input
                        label="Billing address ZIP Code"
                        type="text"
                        name="billingZip"
                        value={data.billingZip}
                        placeholder="Billing ZIP Code"
                        className="input"
                        onChange={ e => setData({...data, billingZip: e.target.value})}
                        />
                </Grid>



                <Grid item xs={4}>
                        <input
                        label="Office manager / Administrator name"
                        type="text"
                        name="officeManagerName"
                        value={data.officeManagerName}
                        placeholder="Office manager / Administrator name"
                        className="input"
                        onChange={ e => setData({...data, officeManagerName: e.target.value})}
                        />
                </Grid>
                <Grid item xs={4}>
                        <input
                        label="Administration telephone number"
                        type="text"
                        name="adminPhoneNumber"
                        value={data.adminPhoneNumber}
                        placeholder="Administration telephone number"
                        className="input"
                        onChange={ e => setData({...data, adminPhoneNumber: e.target.value})}
                        />
                </Grid>
                <Grid item xs={2}>
                        <input
                        label="Fax number"
                        type="text"
                        name="adminFaxNumber"
                        value={data.adminFaxNumber}
                        placeholder="Fax number"
                        className="input"
                        onChange={ e => setData({...data, adminFaxNumber: e.target.value})}
                        />
                </Grid>
                <Grid item xs={2}>
                        <input
                        label="E-mail address"
                        type="text"
                        name="adminEmail"
                        value={data.adminEmail}
                        placeholder="E-mail address"
                        className="input"
                        onChange={ e => setData({...data, adminEmail: e.target.value})}
                        />
                </Grid>
                

                <Grid item xs={4}>
                        <input
                        label="Credentialing contact (if different from above)"
                        type="text"
                        name="credentialingContactName"
                        value={data.credentialingContactName}
                        placeholder="Credentialing contact (if different from above)"
                        className="input"
                        onChange={ e => setData({...data, credentialingContactName: e.target.value})}
                        />
                </Grid>
                <Grid item xs={4}>
                        <input
                        label="Credentialing telephone number"
                        type="text"
                        name="credentialingPhoneNumber"
                        value={data.credentialingPhoneNumber}
                        placeholder="Credentialing telephone number"
                        className="input"
                        onChange={ e => setData({...data, credentialingPhoneNumber: e.target.value})}
                        />
                </Grid>
                <Grid item xs={2}>
                        <input
                        label="Fax number"
                        type="text"
                        name="credentialingFaxNumber"
                        value={data.credentialingFaxNumber}
                        placeholder="Fax number"
                        className="input"
                        onChange={ e => setData({...data, credentialingFaxNumber: e.target.value})}
                        />
                </Grid>
                <Grid item xs={2}>
                        <input
                        label="E-mail address"
                        type="text"
                        name="credentialingEmail"
                        value={data.credentialingEmail}
                        placeholder="E-mail address"
                        className="input"
                        onChange={ e => setData({...data, credentialingEmail: e.target.value})}
                        />
                </Grid>




                

            </Grid>
            <Grid container justifyContent='center'>
            <Button onClick={()=>addItem()}> Add Location</Button>
            </Grid>

            <Grid container spacing={1} padding={5} >
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Effective Date</TableCell>
                                <TableCell>Practice Name</TableCell>
                                <TableCell>Department Name</TableCell>
                                <TableCell>Primary Address</TableCell>
                                <TableCell>Appointment Phone #</TableCell>
                                <TableCell>Fax #</TableCell>
                                <TableCell>Name for Tax ID#</TableCell>
                                <TableCell>Tax ID#</TableCell>
                                <TableCell>Mailing Address</TableCell>
                                <TableCell>Billing Address</TableCell>
                                <TableCell>Manager</TableCell>
                                <TableCell>Manager Phone #</TableCell>
                                <TableCell>Manager Fax #</TableCell>
                                <TableCell>Manager Email</TableCell>
                                <TableCell>Credentialing Admin</TableCell>
                                <TableCell>Cred Phone #</TableCell>
                                <TableCell>Cred Fax #</TableCell>
                                <TableCell>Cred Email</TableCell>          
                            </TableRow>
                        </TableHead>
                            <TableBody>
                                {values.practiceLocations ? values.practiceLocations.map(pat =>{
                                    return (
                                    <TableRow key={pat.patientID}>
                                <TableCell>{pat.effectiveDateAtPrimaryPracticeLocation}</TableCell>
                                <TableCell>{pat.nameOfPractice}</TableCell>
                                <TableCell>{pat.departmentName}</TableCell>

                                <TableCell>{pat.primaryOfficeStreetAddress} {pat.practiceCity}, {pat.practiceState}, {pat.practiceZipcode}</TableCell>
                                <TableCell>{pat.patientAppointmentTelephoneNumber}</TableCell>
                                <TableCell>{pat.faxNumber}</TableCell>
                                <TableCell>{pat.nameAffialatedWithTaxIdNumber}</TableCell>
                                <TableCell>{pat.federalTaxIdNumber}</TableCell>
                                <TableCell>{pat.practiceMailingAddress} {pat.mailingCity}, {pat.mailingState} {pat.mailingZip}</TableCell>
                                <TableCell>{pat.billingAddress} {pat.billingCity} {pat.billingState} {pat.billingZipcode}</TableCell>
                                <TableCell>{pat.officeManagerName}</TableCell>
                                <TableCell>{pat.adminPhoneNumber}</TableCell>
                                <TableCell>{pat.adminFaxNumber}</TableCell>
                                <TableCell>{pat.adminEmail}</TableCell>
                                <TableCell>{pat.credentialingContactName}</TableCell>
                                <TableCell>{pat.credentialingPhoneNumber}</TableCell>
                                <TableCell>{pat.credentialingFaxNumber}</TableCell>
                                <TableCell>{pat.credentialingEmail}</TableCell>    
                                    </TableRow>
                                )
                            }): null}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Grid>


        </Box>
        </div>
    )
}


export default PracticeInformation;
