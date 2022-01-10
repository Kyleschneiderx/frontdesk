/////V. PROFESSIONAL LICENSURE

import React from 'react'
import { Grid, Box } from '@mui/material';

const ProLicence = ({handleFormData, values}) => {

    let optionList = [
        {
            labelPlaceholder: "Effective Date at Primary Practice location",
            name: "effectiveDateAtPrimaryPracticeLocation",
            size:6,

        },
        {
            labelPlaceholder: "Status",
            name: "status",
            size: 6,
            type: "select",
            options:[
                {
                    value: "PCP"
                },
                {
                    value: "Urgent Care"
                },
                {
                    value: "Specialist"
                },

            ]
        },
        {
            labelPlaceholder: "Issue date",
            name: "licenseIssueDate",
            size: 3

        },
        {
            labelPlaceholder: "Expiration date",
            name: "licenseExpirationDate",
            size:3

        },
        {
            labelPlaceholder: "Name of sponsor if required by licensure, (i.e. Physician’s Assistant).",
            name: "licenseSponsor",
            size:6

        },
        {
            labelPlaceholder: "Drug Enforcement Administration (DEA) registration number",
            name: 'deaRegitrationNumber' ,
            size:6

        },
        {
            labelPlaceholder: "Issue date",
            name: 'deaIssueDate',
            size:3

        },
        {
            labelPlaceholder: "Expiration date",
            name: 'deaExpirationDate',
            size:3

        },
        {
            labelPlaceholder: "State controlled substance certificate number",
            name: 'stateControlledSubstanceCertificateNumber',
            size:6

        },
        {
            labelPlaceholder: "Issue date",
            name: 'stateControlledSubstanceCertificateNumberIssueDate',
            size:3

        },
        {
            labelPlaceholder: "Expiration date",
            name: 'stateControlledSubstanceCertificateNumberExpirationDate',
            size:3

        },
        {
            labelPlaceholder: "ECFMG number (applicable to foreign medical graduates)",
            name: 'ECFMGnumber',
            size:9

        },
        {
            labelPlaceholder: "Date issued",
            name: 'ECFMGnumberIssueDate',
            size:3

        }
    ]


    return (
        <div>
        <Box sx={{ flexGrow: 1 }} >
            <Grid container justifyContent='center'>
                <h2>PROFESSIONAL LICENSURE</h2>
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

export default ProLicence;