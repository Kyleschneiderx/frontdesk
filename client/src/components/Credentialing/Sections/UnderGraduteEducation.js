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



const UnderGraduteEducation = ({handleChange, values, handleChangeList}) => {

    const [data, setData] = useState({
        doesNotApplyUndergraduateEducation: false,
        nameOfCollegeOrUniversity:"",
        degreeReceived:"",
        graduationDate:"",
        mailingAddress:'',
        city:"",
        state:"",
        zip:""

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
            doesNotApplyUndergraduateEducation: false,
            nameOfCollegeOrUniversity:"",
            degreeReceived:"",
            graduationDate:"",
            mailingAddress:'',
            city:"",
            state:"",
            zip:""
        })
    }
    
    let optionsList = [
        
        {
            labelPlaceholder: "Name of college or university",
            name: "nameOfCollegeOrUniversity",
            size:12,

        },
        {
            labelPlaceholder: "Degree received",
            name: "degreeReceived",
            size:9,

        },
        {
            labelPlaceholder: "Graduation date",
            name: "graduationDate",
            size:3,

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

    ]
    return (
        <div>
            <Box sx={{ flexGrow: 1 }} >
                <Grid container justifyContent='center'>
                    <h2>UNDER-GRADUATE EDUCATION</h2>
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
                    <Button onClick={()=>addItem()}> Add University</Button>
                </Grid>
                <Grid container spacing={1} padding={5} >
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>College</TableCell>
                                <TableCell>Degree</TableCell>
                                <TableCell>Graduation Date</TableCell>
                                <TableCell>Mailing Address</TableCell>        
                            </TableRow>
                        </TableHead>
                            <TableBody>
                            {values.underGraduateEducation ? values.underGraduateEducation.map((pat,index) =>{
                                    return (
                            <TableRow key={index}>
                                <TableCell>{pat.nameOfCollegeOrUniversity}</TableCell>
                                <TableCell>{pat.degreeReceived}</TableCell>
                                <TableCell>{pat.graduationDate}</TableCell>
                                <TableCell>{pat.mailingAddress} {pat.city} {pat.state} {pat.zip}</TableCell>

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
export default UnderGraduteEducation
