import React, {useState} from 'react'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';


import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDateTimePicker,
  DateTimePicker
} from '@material-ui/pickers';
import 'date-fns';
import moment from 'moment'


const Waitlist = () => {

    const now = new Date()
    const [endDate, setEndDate] = useState(new Date());
    const [time, setTime] = useState([])



    const handleDateChange = (date) => {
        setEndDate(new Date(date));
    };

    const addTime = ()=>{
        setTime([...time, endDate])
        console.log(time)
    }

    const removeTime = (index) =>{
            // assigning the list to temp variable
        const temp = [...time];

        // removing the element using splice
        temp.splice(index, 1);

        // updating the list
        setTime(temp);


    }


    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justifyContent="center">
            <KeyboardDateTimePicker
                disableToolbar
                variant="dialog"
                format="MM/dd/yyyy hh:mm"
                margin="normal"
                id="date-picker-dialog"
                label="Add Opening"
                value={endDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
                <Button onClick={()=> addTime()}>Add Time</Button>
            </Grid>
            </MuiPickersUtilsProvider>
            <Grid container justifyContent='center'>
            {time ? 
                time.map((item, index)=>{
                    return(
                    <div key={index}>
                        <Paper padding={2} spacing={2}>
                        <Grid container alignItems="center" justifyContent="center">
                            <Typography padding={2}>
                            {moment(item).format('MM/DD/YY hh:mm')}
                            </Typography>
                        <div >
                            <Button onClick={()=> removeTime(index)}>
                                <DeleteIcon/>
                            </Button>
                        </div>
                        </Grid>
                        </Paper>
                    </div>
                    )
                }) : null}
            </Grid>
        </div>
    )
}

export default Waitlist;
