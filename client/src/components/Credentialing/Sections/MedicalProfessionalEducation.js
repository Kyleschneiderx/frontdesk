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
    TableRow,
    Checkbox 
} from '@mui/material'

const MedicalProfessionalEducation = ({handleChange, values, handleChangeList}) => {

    const [data, setData] = useState({

        medicalProfessionSchool:"",
        startDate:"",
        graduationDate:"",
        degreeReceived: "",
        mailingAddress:'',
        city:"",
        state:"",
        zip:"",
        phone:"",
        fax:''


    })

    const [list , setList] = useState([])

    useEffect(() => {
        console.log(data)
        setList(data)

    }, [data])

    const addItem = () =>{
    
        console.log(list)
        handleChangeList(list, 'underGraduateEducation')
        setData({
            medicalProfessionSchool:"",
            startDate:"",
            graduationDate:"",
            degreeReceived: "",
            mailingAddress:'',
            city:"",
            state:"",
            zip:"",
            phone:"",
            fax:''
        })
    }
    
    let optionsList = [
        
        {
            labelPlaceholder: "Medical/Professional school",
            name: "medicalProfessionSchool",
            size:12,

        },
        {
            labelPlaceholder: "Start date",
            name: "startDate",
            size:4,

        },
        {
            labelPlaceholder: "Graduation date",
            name: "graduationDate",
            size:4,

        },
        {
            labelPlaceholder: "Degree received",
            name: "degreeReceived",
            size:4,

        },
        {
            labelPlaceholder: "Mailing Address",
            name: "mailingAddress",
            size:6,

        },
        {
            labelPlaceholder: "City",
            name: "city",
            size:2,

        },
        {
            labelPlaceholder: "State",
            name: "state",
            size:2,

        },
        {
            labelPlaceholder: "ZIP code",
            name: "zip",
            size:2,

        },
        {
            labelPlaceholder: "Phone",
            name: "phone",
            size:6,

        },
        {
            labelPlaceholder: "Fax",
            name: "fax",
            size:6,

        },


    ]
    return (
        <div>
            <Box sx={{ flexGrow: 1 }} >
                <Grid container justifyContent='center'>
                    <h2>MEDICAL/PROFESSIONAL EDUCATION</h2>
                </Grid>

                <Grid container spacing={1} padding={5}>
                    {optionsList.map((item, index)=>{
                        return(
                            <Grid key={index} item xs={item.size}>
                                <input
                                    label={item.labelPlaceholder}
                                    type="text"
                                    name={item.name}
                                    value={data[item.name]}
                                    placeholder={item.labelPlaceholder}
                                    className="input"
                                    onChange={e => setData({...data, [item.name]: e.target.value})}
                                />
                            </Grid>
                        )
                    })}

                </Grid>
                <Grid container justifyContent='center'>
                    <Button onClick={()=>addItem()}> Add School</Button>
                </Grid>
                <Grid container spacing={1} padding={5} >
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>School</TableCell>
                                <TableCell>Start Date</TableCell>
                                <TableCell>Graduation Date</TableCell>
                                <TableCell>Degree</TableCell>
                                <TableCell>Mailing Address</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Phone</TableCell>
                                          
                            </TableRow>
                        </TableHead>
                            <TableBody>
                            {values.underGraduateEducation ? values.underGraduateEducation.map((pat,index) =>{
                                    return (
                            <TableRow key={index}>
                                <TableCell>{pat.medicalProfessionSchool}</TableCell>
                                <TableCell>{pat.startDate}</TableCell>
                                <TableCell>{pat.graduationDate}</TableCell>
                                <TableCell>{pat.degreeReceived}</TableCell>
                                <TableCell>{pat.mailingAddress} {pat.city} {pat.state} {pat.zip}</TableCell>
                                <TableCell>{pat.phone}</TableCell>
                                <TableCell>{pat.fax}</TableCell>

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

export default MedicalProfessionalEducation
