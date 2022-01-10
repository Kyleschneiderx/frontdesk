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

const ProfessionalLiability = ({handleChange, values, handleChangeList}) => {
    const [data, setData] = useState({
        nameOfCarrier:"",
        policyNumber:"",
        mailingAddress:"",
        city:"",
        state:"",
        zip: "",
        phoneNumber: "",
        faxNumber:"",
        from:"",
        to:""

    })
    const [list , setList] = useState([])

    useEffect(() => {
        console.log(data)
        setList(data)

    }, [data])

    const addItem = () =>{
    
        console.log(list)
        handleChangeList(list, 'professionalLiability')
        setData({
            nameOfCarrier:"",
            policyNumber:"",
            mailingAddress:"",
            city:"",
            state:"",
            zip: "",
            phoneNumber: "",
            faxNumber:"",
            from:"",
            to:"",
            perClaimAmount:"",  
            aggregateAmount:"",
            effectiveDate:"",
            expirationDate: "" 
        })
    }
    
    let optionsList = [
        
        {
            labelPlaceholder: "Name of carrier",
            name: "nameOfCarrier",
            size:9,
            tableLabel:"Name"

        },
        {
            labelPlaceholder: "Policy Number",
            name: "policyNumber",
            size:3,
            tableLabel:"P.N."

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
            labelPlaceholder: "Home Phone Number",
            name: "phoneNumber",
            size:4,
            tableLabel:"Number"


        },
        {
            labelPlaceholder: "Fax Number",
            name: "faxNumber",
            size:4,
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
            labelPlaceholder: "Per Claim Amount",
            name: "perClaimAmount",
            size:3,
            tableLabel:"Per Claim"  

        },
        {
            labelPlaceholder: "Aggregate Amount",
            name: "aggregateAmount",
            size:3,
            tableLabel:"Aggregate"  

        },
        {
            labelPlaceholder: "Effective date",
            name: "effectiveDate",
            size:3,
            tableLabel:"Effective Date"  

        },
        {
            labelPlaceholder: "Expiration date",
            name: "expirationDate",
            size:3,
            tableLabel:"Expiration Date"  

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
                    <Button onClick={()=>addItem()}>Add Policy</Button>
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
                            {values.professionalLiability ? values.professionalLiability.map((pat,index) =>{
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

export default ProfessionalLiability;
