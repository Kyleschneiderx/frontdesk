///V. ALL OTHER PROFESSIONAL LICENSES


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

const AllProLicenses = ({handleFormData, values, handleChangeList}) => {

    const [ data, setData ] = useState({
        proLicenseState:'',
        licenseNumber:"",
        proLicenseDateIssued:"",
        proLicenseExpirationDate:"",
        yearRelinquished:"",
        proLicenseReason:"",
    })
    const [list , setList] = useState([])


    useEffect(() => {

        setList(data)
        console.log(list)

    }, [data])

    const addItem = () =>{
    
        console.log(list)
        handleChangeList(list, 'allOtherProLicenses')
        setData({
            proLicenseState:'',
            licenseNumber:"",
            proLicenseDateIssued:"",
            proLicenseExpirationDate:"",
            yearRelinquished:"",
            proLicenseReason:"",
        })
    }

    let optionsList = [

        {
            labelPlaceholder: "Licence State",
            name: "proLicenseState",
            size:3,

        },
        {
            labelPlaceholder: "License/registration/certificate number",
            name: "licenseNumber",
            size:6,

        },
        {
            labelPlaceholder: "Date Issued",
            name: "proLicenseDateIssued",
            size:3,

        },
        {
            labelPlaceholder: "Expiration date",
            name: "proLicenseExpirationDate",
            size:3,

        },
        {
            labelPlaceholder: "Year relinquished",
            name: "yearRelinquished",
            size:3,

        },
        {
            labelPlaceholder: "Reason",
            name: "proLicenseReason",
            size:6,

        },

    ]

    console.log(values)
    return (

        <div>
            <Box sx={{ flexGrow: 1 }} >
                <Grid container justifyContent='center'>
                    <h2>ALL OTHER PROFESSIONAL LICENSES</h2>
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
                    <Button onClick={()=>addItem()}> Add License</Button>
                </Grid>
                <Grid container spacing={1} padding={5} >
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>License State</TableCell>
                                <TableCell>License #</TableCell>
                                <TableCell>Date Issued</TableCell>
                                <TableCell>Expiration Date</TableCell>
                                <TableCell>Year relinquished</TableCell>
                                <TableCell>Reason</TableCell>         
                            </TableRow>
                        </TableHead>
                            <TableBody>
                            {values.allOtherProLicenses ? values.allOtherProLicenses.map((pat,index) =>{
                                    return (
                            <TableRow key={index}>
                                <TableCell>{pat.proLicenseState}</TableCell>
                                <TableCell>{pat.licenseNumber}</TableCell>
                                <TableCell>{pat.proLicenseDateIssued}</TableCell>

                                <TableCell>{pat.proLicenseExpirationDate}</TableCell>
                                <TableCell>{pat.yearRelinquished}</TableCell>
                                <TableCell>{pat.proLicenseReason}</TableCell>

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

export default AllProLicenses;
