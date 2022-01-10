import React, {useState, useEffect} from 'react'
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


const PeerReferences = ({handleChange, values, handleChangeList}) => {
    const [data, setData] = useState({
        nameOfReference:"",
        titleAndSpecialty:"",
        mailingAddress:"",
        city:"",
        state:"",
        zip: "",
        email:"",
        phoneNumber: "",
        faxNumber:"",
        cellNumber:""

    })
    const [list , setList] = useState([])

    useEffect(() => {
        console.log(data)
        setList(data)

    }, [data])

    const addItem = () =>{
    
        console.log(list)
        handleChangeList(list, 'peerReferences')
        setData({
            nameOfReference:"",
            titleAndSpecialty:"",
            mailingAddress:"",
            city:"",
            state:"",
            zip: "",
            email:"",
            phoneNumber: "",
            faxNumber:"",
            cellNumber:""    
        })
    }
    
    let optionsList = [
        
        {
            labelPlaceholder: "Name of reference",
            name: "nameOfReference",
            size:9,
            tableLabel:"Name"

        },
        {
            labelPlaceholder: "Title and specialty",
            name: "titleAndSpecialty",
            size:3,
            tableLabel:"Title"

        },
        {
            labelPlaceholder: "Mailing address",
            name: "mailingAddress",
            size:6,
            tableLabel:"Address"

        },
        {
            labelPlaceholder: "City",
            name: "city",
            size:2,
            tableLabel:"City"

        },
        {
            labelPlaceholder: "State",
            name: "state",
            size:2,
            tableLabel:"State"

        },
        {
            labelPlaceholder: "Zip Code",
            name: "zip",
            size:2,
            tableLabel:"Zip"

        },
        {
            labelPlaceholder: "Email Address",
            name: "email",
            size:3,
            tableLabel:"Email"

        },
        {
            labelPlaceholder: "Home Phone Number",
            name: "phoneNumber",
            size:3,
            tableLabel:"Number"


        },
        {
            labelPlaceholder: "Fax Number",
            name: "faxNumber",
            size:3,
            tableLabel:"Fax"


        },
        {
            labelPlaceholder: "Cell Phone Number",
            name: "cellNumber",
            size:3,
            tableLabel:"Cell Number"
            

        }


    ]



    
    return (
        <div>
            <Box sx={{ flexGrow: 1 }} >
                <Grid container justifyContent='center'>
                    <h2>PEER REFERENCES</h2>
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
                    <Button onClick={()=>addItem()}>Add Work Location</Button>
                </Grid>
                <Grid container spacing={1} padding={5} >
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {optionsList.map((item, index)=>{
                                    return(
                                        <TableCell key={index}>{item.tableLabel}</TableCell>
                                    )
                                })}
                                          
                            </TableRow>
                        </TableHead>
                            <TableBody>
                            {values.peerReferences ? values.peerReferences.map((pat,index) =>{
                                    return (
                                <TableRow key={index}>

                                {optionsList.map((item, index)=>{
                                    return(
                                        <TableCell key={index}>{pat[item.name]}</TableCell>
                                    )
                                })}

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

export default PeerReferences
