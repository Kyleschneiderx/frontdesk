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


const WorkHistory = ({handleChange, values, handleChangeList}) => {

    const [data, setData] = useState({
        nameOfCurrentPractice:"",
        contactName:"",
        phoneNumber:"",
        faxNumber:"",
        from:"",
        to: "",
        mailingAddress:"",
        city: "",
        state:"",
        zip:"",
        reasonForLeaving:""


    })
    const [list , setList] = useState([])

    useEffect(() => {
        console.log(data)
        setList(data)

    }, [data])

    const addItem = () =>{
    
        console.log(list)
        handleChangeList(list, 'workHistory')
        setData({
            nameOfCurrentPractice:"",
            contactName:"",
            phoneNumber:"",
            faxNumber:"",
            from:"",
            to: "",
            mailingAddress:"",
            city: "",
            state:"",
            zip:"",
            reasonForLeaving:""
        })
    }
    
    let optionsList = [
        
        {
            labelPlaceholder: "Name of current practice/employer",
            name: "nameOfCurrentPractice",
            size:12,
            tableLabel:"Name"

        },
        {
            labelPlaceholder: "Contact name",
            name: "contactName",
            size:3,
            tableLabel:"Contact"

        },
        {
            labelPlaceholder: "Phone Number",
            name: "phoneNumber",
            size:3,
            tableLabel:"Phone"

        },
        {
            labelPlaceholder: "Fax Number",
            name: "faxNumber",
            size:2,
            tableLabel:"Fax"

        },
        {
            labelPlaceholder: "From",
            name: "from",
            size:2,
            tableLabel:"From"

        },
        {
            labelPlaceholder: "To",
            name: "to",
            size:2,
            tableLabel:"To"

        },
        {
            labelPlaceholder: "Mailing Address",
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
            labelPlaceholder: "Reason for Leaving",
            name: "reasonForLeaving",
            size:12,
            tableLabel:"Reason"
            

        },


    ]



    
    return (
        <div>
            <Box sx={{ flexGrow: 1 }} >
                <Grid container justifyContent='center'>
                    <h2>WORK HISTORY</h2>
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
                            {values.workHistory ? values.workHistory.map((pat,index) =>{
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

export default WorkHistory
