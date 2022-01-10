import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { 
    Button, 
    Grid, 
    Box, 
} from '@mui/material'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  content: {
    justifyContent: "center"
  }
});

const ReviewPage = ({values}) => {
    const classes = useStyles()


    return (
    <div>
        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={1} padding={5}>

                <Accordion defaultExpanded={true} sx={{ width: '100%' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    classes={{ content: classes.content }}                 >
                    <Typography>Practioner Information</Typography>
                </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            First Name: {values.firstName}, 
                            Middle Name : {values.middleName}, 
                            Last Name: {values.lastName}, 
                            Nickname: {values.nickName}, 

                        </Typography>
                        <Typography>
                            
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
                </Accordion>
            </Grid>
        </Box>
      </div>
    )
}

export default ReviewPage
