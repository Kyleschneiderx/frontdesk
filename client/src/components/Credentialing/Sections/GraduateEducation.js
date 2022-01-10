import React from 'react'
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

const GraduateEducation = ({handleFormData, values}) => {
    let optionList = [
        {
            labelPlaceholder: "Instituition Name",
            name: "graduateEducationIntuition",
            size:12,

        },
        {
            labelPlaceholder: "Graduate Education Program or Course of Study",
            name: "graduateEducationProgramOrCourseOfStudy",
            size: 9,

        },
        {
            labelPlaceholder: "Graduate Education Faculty Director",
            name: "graduateEducationFacultyDirector",
            size: 3

        },
        {
            labelPlaceholder: "Graduate Education Mailing Address",
            name: "graduateEducationMailingAddress",
            size:6

        },
        {
            labelPlaceholder: "City",
            name: "graduateEducationCity",
            size:2

        },
        {
            labelPlaceholder: "State",
            name: 'graduateEducationState' ,
            size:2

        },
        {
            labelPlaceholder: "Zip Code",
            name: 'graduateEducationZip',
            size:2

        },
        {
            labelPlaceholder: "Graduate Education Date Attended",
            name: 'graduateEducationDateAttended',
            size:4

        },
        {
            labelPlaceholder: "Graduate Education Phone Number",
            name: 'graduateEducationPhone',
            size:4

        },
        {
            labelPlaceholder: "Fax Number",
            name: 'graduateEducationFax',
            size:4

        },
    ]
    return (
        <div>
        <Box sx={{ flexGrow: 1 }} >
            <Grid container justifyContent='center'>
                <h2>GRADUATE EDUCATION</h2>
            </Grid>
            <Grid container spacing={1} padding={5}>
                {optionList.map((item, index) =>{

                    if(item.type === "select"){
                        return(
                        <Grid key={index} item xs={item.size}>
                        <select placeholder={item.labelPlaceholder} className={item.type} name={item.name} value={values[item.name]} onChange={handleFormData(item.name)}>
                            <option value="" disabled hidden>{item.labelPlaceholder}</option>
                            {item.options.map((option, index)=>{
                                return(
                                <option key={index} value={option.value}>{option.value}</option>
                                )
                            })}

                        </select>
                        </Grid>
                        )
                    }
                    return (
                    <Grid key={index} item xs={item.size}>
                        <input
                            type="text"
                            placeholder={item.labelPlaceholder}
                            className="input"
                            name={item.name}
                            onChange={handleFormData(item.name)}
                            value={values[item.name]}/>
                    </Grid>                       
                    )
                })}

            </Grid>
        </Box>
            
        </div>
    )
}

export default GraduateEducation;